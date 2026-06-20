import '@servicenow/sdk/global'
import { Role, Acl, Property } from '@servicenow/sdk/core'

/** Papéis do bolão */
Role({
    $id: Now.ID['role_player'],
    name: 'x_snc_bolao_da_cop.player',
    description: 'Participante do bolão: aposta e acompanha o ranking.',
    grantable: true,
})

Role({
    $id: Now.ID['role_admin'],
    name: 'x_snc_bolao_da_cop.admin',
    description: 'Administrador do bolão: lança resultados e gerencia rodadas.',
    grantable: true,
    scopedAdmin: true,
    containsRoles: ['x_snc_bolao_da_cop.player'],
})

/** Multiplicadores de payout (ajustáveis sem código) */
Property({
    $id: Now.ID['prop_payout_exact'],
    name: 'x_snc_bolao_da_cop.payout.exact',
    type: 'integer',
    value: 5,
    description: 'Multiplicador da aposta quando o palpite acerta o placar exato.',
})

Property({
    $id: Now.ID['prop_payout_winner'],
    name: 'x_snc_bolao_da_cop.payout.winner',
    type: 'integer',
    value: 2,
    description: 'Multiplicador da aposta quando acerta o vencedor/empate (placar errado).',
})

Property({
    $id: Now.ID['prop_initial_balance'],
    name: 'x_snc_bolao_da_cop.initial_balance',
    type: 'integer',
    value: 1000,
    description: 'Saldo inicial de estalecas para novos participantes.',
})

/* ---------------- ACLs ---------------- */

// Leitura pública (autenticada) das tabelas de catálogo e ranking
const readTables = [
    'x_snc_bolao_da_cop_team',
    'x_snc_bolao_da_cop_match',
    'x_snc_bolao_da_cop_wallet',
    'x_snc_bolao_da_cop_bet',
    'x_snc_bolao_da_cop_achievement',
    'x_snc_bolao_da_cop_user_badge',
] as const

readTables.forEach((table, i) => {
    Acl({
        $id: Now.ID[`acl_read_${i}`],
        type: 'record',
        table: table,
        operation: 'read',
        active: true,
        script: 'answer = gs.isLoggedIn();',
    })
})

// Apostas: criar/editar somente o próprio palpite (admin pode tudo)
const ownBetScript = `(function (current) {
    return gs.getUserID() == current.user.toString() || gs.hasRole('x_snc_bolao_da_cop.admin');
})(current)`

Acl({
    $id: Now.ID['acl_bet_create'],
    type: 'record',
    table: 'x_snc_bolao_da_cop_bet',
    operation: 'create',
    active: true,
    script: 'answer = gs.isLoggedIn();',
})

Acl({
    $id: Now.ID['acl_bet_write'],
    type: 'record',
    table: 'x_snc_bolao_da_cop_bet',
    operation: 'write',
    active: true,
    script: ownBetScript,
})

// Jogos/Times/Conquistas: escrita só admin
;(['x_snc_bolao_da_cop_match', 'x_snc_bolao_da_cop_team', 'x_snc_bolao_da_cop_achievement'] as const).forEach(
    (table, i) => {
        Acl({
            $id: Now.ID[`acl_admin_write_${i}`],
            type: 'record',
            table: table,
            operation: 'write',
            active: true,
            roles: ['x_snc_bolao_da_cop.admin'],
        })
        Acl({
            $id: Now.ID[`acl_admin_create_${i}`],
            type: 'record',
            table: table,
            operation: 'create',
            active: true,
            roles: ['x_snc_bolao_da_cop.admin'],
        })
    },
)
