import '@servicenow/sdk/global'
import { EmailNotification } from '@servicenow/sdk/core'

/** Avisa o apostador quando o palpite é liquidado (jogo encerrado). */
EmailNotification({
    $id: Now.ID['notif_bet_settled'],
    name: 'Bolao - Palpite liquidado',
    table: 'x_snc_bolao_da_cop_bet',
    description: 'Notifica o usuário quando seu palpite é liquidado após o jogo encerrar.',
    active: true,
    triggerConditions: {
        generationType: 'engine',
        onRecordUpdate: true,
        condition: "current.result != 'pending' && current.result.changes()",
    },
    recipientDetails: {
        recipientFields: ['user'],
    },
    emailContent: {
        contentType: 'text/html',
        subject: 'Bolão da Copa: seu palpite foi liquidado!',
        messageHtml: [
            '<h2>🏆 Bolão da Copa</h2>',
            '<p>Olá, ${user.first_name}!</p>',
            '<p>Seu palpite no jogo <strong>${match}</strong> foi liquidado.</p>',
            '<ul>',
            '<li>Resultado do palpite: <strong>${result}</strong></li>',
            '<li>Retorno: <strong>${payout} estalecas</strong></li>',
            '</ul>',
            '<p>Confira o ranking atualizado no portal do bolão. Boa sorte na próxima!</p>',
        ].join('\n'),
    },
})
