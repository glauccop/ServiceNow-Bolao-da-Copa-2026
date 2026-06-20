import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ach_first_bet'],
    table: 'x_snc_bolao_da_cop_achievement',
    data: {
        name: 'Estreante',
        description: 'Fez a primeira aposta no bolão.',
        icon: '🎟️',
        criteria_key: 'first_bet',
    },
})

Record({
    $id: Now.ID['ach_exact'],
    table: 'x_snc_bolao_da_cop_achievement',
    data: {
        name: 'Vidente',
        description: 'Acertou o placar exato de um jogo.',
        icon: '🎯',
        criteria_key: 'exact',
    },
})

Record({
    $id: Now.ID['ach_streak'],
    table: 'x_snc_bolao_da_cop_achievement',
    data: {
        name: 'Sequência de Fogo',
        description: 'Acertou 3 placares exatos.',
        icon: '🔥',
        criteria_key: 'streak',
    },
})

Record({
    $id: Now.ID['ach_underdog'],
    table: 'x_snc_bolao_da_cop_achievement',
    data: {
        name: 'Caçador de Zebras',
        description: 'Apostou e acertou uma zebra.',
        icon: '🐎',
        criteria_key: 'underdog',
    },
})

Record({
    $id: Now.ID['ach_highroller'],
    table: 'x_snc_bolao_da_cop_achievement',
    data: {
        name: 'High Roller',
        description: 'Venceu uma aposta de 500+ estalecas.',
        icon: '💰',
        criteria_key: 'highroller',
    },
})
