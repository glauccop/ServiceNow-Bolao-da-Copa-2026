import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'

/** Valida o palpite antes de salvar: jogo aberto, aposta > 0 e saldo suficiente. */
BusinessRule({
    $id: Now.ID['br_bet_validate'],
    name: 'Bolao - Validar palpite',
    table: 'x_snc_bolao_da_cop_bet',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    active: true,
    script: `(function executeRule(current, previous) {
        if (!current.user) current.setValue('user', gs.getUserID());

        var m = new GlideRecord('x_snc_bolao_da_cop_match');
        if (!m.get(current.match.toString())) {
            gs.addErrorMessage('Jogo inválido.');
            current.setAbortAction(true);
            return;
        }
        if (m.getValue('status') != 'open') {
            gs.addErrorMessage('As apostas para este jogo estão fechadas.');
            current.setAbortAction(true);
            return;
        }

        var stake = parseInt(current.getValue('stake'), 10);
        if (isNaN(stake) || stake <= 0) {
            gs.addErrorMessage('A aposta deve ser maior que zero.');
            current.setAbortAction(true);
            return;
        }

        var engine = new BolaoEngine();
        var available = engine.getBalance(current.user.toString());
        if (!current.isNewRecord() && previous) available += parseInt(previous.stake, 10);
        if (stake > available) {
            gs.addErrorMessage('Saldo insuficiente de estalecas.');
            current.setAbortAction(true);
            return;
        }
    })(current, previous);`,
})

/** Aplica o débito/ajuste de estalecas na carteira após salvar o palpite. */
BusinessRule({
    $id: Now.ID['br_bet_wallet'],
    name: 'Bolao - Aplicar aposta na carteira',
    table: 'x_snc_bolao_da_cop_bet',
    when: 'after',
    action: ['insert', 'update'],
    order: 100,
    active: true,
    script: `(function executeRule(current, previous) {
        // Liquidação (result != pending) é tratada pela engine; não mexer na carteira aqui.
        if (current.getValue('result') != 'pending') return;
        var engine = new BolaoEngine();
        if (current.operation() == 'insert') {
            engine.adjustBalance(current.user.toString(), -parseInt(current.getValue('stake'), 10));
        } else if (previous) {
            var delta = parseInt(previous.stake, 10) - parseInt(current.getValue('stake'), 10);
            if (delta != 0) engine.adjustBalance(current.user.toString(), delta);
        }
    })(current, previous);`,
})

/** Liquida os palpites quando um jogo é encerrado com placar. */
BusinessRule({
    $id: Now.ID['br_match_settle'],
    name: 'Bolao - Liquidar jogo encerrado',
    table: 'x_snc_bolao_da_cop_match',
    when: 'after',
    action: ['update', 'insert'],
    order: 100,
    active: true,
    condition: "current.status == 'finished'",
    script: `(function executeRule(current, previous) {
        new BolaoEngine().settleMatch(current.getUniqueValue());
    })(current, previous);`,
})
