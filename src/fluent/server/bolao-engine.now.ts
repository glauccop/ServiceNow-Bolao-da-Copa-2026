import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['si_bolao_engine'],
    name: 'BolaoEngine',
    description: 'Regras do bolão: carteira, cálculo de payout, liquidação de jogos e conquistas.',
    accessibleFrom: 'package_private',
    active: true,
    script: `var BolaoEngine = Class.create();
BolaoEngine.prototype = {
    initialize: function () {},

    TEAM: 'x_snc_bolao_da_cop_team',
    MATCH: 'x_snc_bolao_da_cop_match',
    WALLET: 'x_snc_bolao_da_cop_wallet',
    BET: 'x_snc_bolao_da_cop_bet',
    ACH: 'x_snc_bolao_da_cop_achievement',
    BADGE: 'x_snc_bolao_da_cop_user_badge',

    initialBalance: function () {
        return parseInt(gs.getProperty('x_snc_bolao_da_cop.initial_balance', '1000'), 10);
    },

    // Garante que o usuário tenha carteira; retorna o sys_id da carteira.
    ensureWallet: function (userId) {
        var gr = new GlideRecord(this.WALLET);
        gr.addQuery('user', userId);
        gr.query();
        if (gr.next()) return gr.getUniqueValue();
        gr.initialize();
        gr.setValue('user', userId);
        gr.setValue('balance', this.initialBalance());
        return gr.insert();
    },

    getBalance: function (userId) {
        this.ensureWallet(userId);
        var gr = new GlideRecord(this.WALLET);
        gr.addQuery('user', userId);
        gr.query();
        return gr.next() ? parseInt(gr.getValue('balance'), 10) : 0;
    },

    adjustBalance: function (userId, delta) {
        this.ensureWallet(userId);
        var gr = new GlideRecord(this.WALLET);
        gr.addQuery('user', userId);
        gr.query();
        if (!gr.next()) return 0;
        var bal = parseInt(gr.getValue('balance'), 10) + parseInt(delta, 10);
        if (bal < 0) bal = 0;
        gr.setValue('balance', bal);
        gr.update();
        return bal;
    },

    // Calcula resultado e retorno de um palpite contra o placar real.
    calculatePayout: function (predHome, predAway, homeScore, awayScore, stake) {
        var exactMult = parseInt(gs.getProperty('x_snc_bolao_da_cop.payout.exact', '5'), 10);
        var winnerMult = parseInt(gs.getProperty('x_snc_bolao_da_cop.payout.winner', '2'), 10);
        predHome = parseInt(predHome, 10);
        predAway = parseInt(predAway, 10);
        homeScore = parseInt(homeScore, 10);
        awayScore = parseInt(awayScore, 10);
        stake = parseInt(stake, 10);
        if (predHome === homeScore && predAway === awayScore) {
            return { result: 'exact', payout: stake * exactMult };
        }
        var predOutcome = predHome === predAway ? 0 : (predHome > predAway ? 1 : -1);
        var realOutcome = homeScore === awayScore ? 0 : (homeScore > awayScore ? 1 : -1);
        if (predOutcome === realOutcome) {
            return { result: 'winner', payout: stake * winnerMult };
        }
        return { result: 'wrong', payout: 0 };
    },

    // Liquida todos os palpites pendentes de um jogo encerrado.
    settleMatch: function (matchId) {
        var m = new GlideRecord(this.MATCH);
        if (!m.get(matchId)) return;
        var hs = parseInt(m.getValue('home_score'), 10);
        var as = parseInt(m.getValue('away_score'), 10);
        if (isNaN(hs) || isNaN(as)) return;
        var bet = new GlideRecord(this.BET);
        bet.addQuery('match', matchId);
        bet.addQuery('result', 'pending');
        bet.query();
        while (bet.next()) {
            var calc = this.calculatePayout(
                bet.getValue('pred_home'),
                bet.getValue('pred_away'),
                hs, as, bet.getValue('stake'));
            bet.setValue('result', calc.result);
            bet.setValue('payout', calc.payout);
            bet.update();
            if (calc.payout > 0) this.adjustBalance(bet.getValue('user'), calc.payout);
            this.evaluateAchievements(bet.getValue('user'));
        }
    },

    grantBadge: function (userId, criteriaKey) {
        var ach = new GlideRecord(this.ACH);
        ach.addQuery('criteria_key', criteriaKey);
        ach.query();
        if (!ach.next()) return;
        var achId = ach.getUniqueValue();
        var has = new GlideRecord(this.BADGE);
        has.addQuery('user', userId);
        has.addQuery('achievement', achId);
        has.query();
        if (has.hasNext()) return;
        var ub = new GlideRecord(this.BADGE);
        ub.initialize();
        ub.setValue('user', userId);
        ub.setValue('achievement', achId);
        ub.setValue('earned_at', new GlideDateTime().getValue());
        ub.insert();
    },

    evaluateAchievements: function (userId) {
        var exact = new GlideRecord(this.BET);
        exact.addQuery('user', userId);
        exact.addQuery('result', 'exact');
        exact.query();
        var exactCount = exact.getRowCount();
        if (exactCount >= 1) this.grantBadge(userId, 'exact');
        if (exactCount >= 3) this.grantBadge(userId, 'streak');

        var hr = new GlideRecord(this.BET);
        hr.addQuery('user', userId);
        hr.addQuery('payout', '>', 0);
        hr.addQuery('stake', '>=', 500);
        hr.query();
        if (hr.hasNext()) this.grantBadge(userId, 'highroller');

        var any = new GlideRecord(this.BET);
        any.addQuery('user', userId);
        any.query();
        if (any.hasNext()) this.grantBadge(userId, 'first_bet');
    },

    type: 'BolaoEngine'
};`,
})
