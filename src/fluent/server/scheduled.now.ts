import '@servicenow/sdk/global'
import { ScheduledScript } from '@servicenow/sdk/core'

/** Fecha as apostas de jogos cujo horário de início já passou. */
ScheduledScript({
    $id: Now.ID['sched_close_bets'],
    name: 'Bolao - Fechar apostas no horário do jogo',
    active: true,
    frequency: 'periodically',
    executionInterval: { minutes: 5 },
    script: `(function () {
        var gr = new GlideRecord('x_snc_bolao_da_cop_match');
        gr.addQuery('status', 'open');
        gr.addQuery('kickoff', '<=', new GlideDateTime().getValue());
        gr.query();
        var count = 0;
        while (gr.next()) {
            gr.setValue('status', 'closed');
            gr.update();
            count++;
        }
        if (count > 0) gs.info('[Bolao] ' + count + ' jogo(s) tiveram apostas fechadas.');
    })();`,
})
