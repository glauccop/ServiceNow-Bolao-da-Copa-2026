import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    IntegerColumn,
    ChoiceColumn,
    ReferenceColumn,
    DateTimeColumn,
} from '@servicenow/sdk/core'

const GROUPS = {
    A: { label: 'Grupo A' },
    B: { label: 'Grupo B' },
    C: { label: 'Grupo C' },
    D: { label: 'Grupo D' },
    E: { label: 'Grupo E' },
    F: { label: 'Grupo F' },
    G: { label: 'Grupo G' },
    H: { label: 'Grupo H' },
    I: { label: 'Grupo I' },
    J: { label: 'Grupo J' },
    K: { label: 'Grupo K' },
    L: { label: 'Grupo L' },
}

/** Seleções da Copa */
export const x_snc_bolao_da_cop_team = Table({
    $id: Now.ID['t_team'],
    name: 'x_snc_bolao_da_cop_team',
    label: 'Seleção',
    display: 'name',
    allowWebServiceAccess: true,
    schema: {
        name: StringColumn({ label: 'Nome', mandatory: true, maxLength: 60 }),
        code: StringColumn({ label: 'Código', maxLength: 3 }),
        flag: StringColumn({ label: 'Bandeira', maxLength: 16 }),
        group: ChoiceColumn({ label: 'Grupo', choices: GROUPS }),
        confederation: ChoiceColumn({
            label: 'Confederação',
            choices: {
                UEFA: { label: 'UEFA' },
                CONMEBOL: { label: 'CONMEBOL' },
                CONCACAF: { label: 'CONCACAF' },
                CAF: { label: 'CAF' },
                AFC: { label: 'AFC' },
                OFC: { label: 'OFC' },
            },
        }),
    },
})

/** Jogos da Copa */
export const x_snc_bolao_da_cop_match = Table({
    $id: Now.ID['t_match'],
    name: 'x_snc_bolao_da_cop_match',
    label: 'Jogo',
    display: 'venue',
    allowWebServiceAccess: true,
    schema: {
        match_no: IntegerColumn({ label: 'Nº do jogo' }),
        stage: ChoiceColumn({
            label: 'Fase',
            default: 'group',
            choices: {
                group: { label: 'Fase de grupos' },
                r32: { label: 'Oitavas (32)' },
                r16: { label: 'Oitavas de final' },
                qf: { label: 'Quartas de final' },
                sf: { label: 'Semifinal' },
                third: { label: 'Disputa de 3º' },
                final: { label: 'Final' },
            },
        }),
        group: ChoiceColumn({ label: 'Grupo', choices: GROUPS }),
        home_team: ReferenceColumn({
            label: 'Mandante',
            referenceTable: 'x_snc_bolao_da_cop_team',
        }),
        away_team: ReferenceColumn({
            label: 'Visitante',
            referenceTable: 'x_snc_bolao_da_cop_team',
        }),
        kickoff: DateTimeColumn({ label: 'Início' }),
        status: ChoiceColumn({
            label: 'Status',
            default: 'open',
            choices: {
                open: { label: 'Apostas abertas' },
                closed: { label: 'Apostas fechadas' },
                finished: { label: 'Encerrado' },
            },
        }),
        home_score: IntegerColumn({ label: 'Gols mandante' }),
        away_score: IntegerColumn({ label: 'Gols visitante' }),
        venue: StringColumn({ label: 'Local', maxLength: 120 }),
    },
})

/** Carteira de estalecas por usuário */
export const x_snc_bolao_da_cop_wallet = Table({
    $id: Now.ID['t_wallet'],
    name: 'x_snc_bolao_da_cop_wallet',
    label: 'Carteira',
    display: 'user',
    allowWebServiceAccess: true,
    index: [{ name: 'wallet_user_unique', unique: true, element: 'user' }],
    schema: {
        user: ReferenceColumn({
            label: 'Usuário',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        balance: IntegerColumn({ label: 'Saldo (estalecas)', default: 1000 }),
    },
})

/** Palpites / apostas */
export const x_snc_bolao_da_cop_bet = Table({
    $id: Now.ID['t_bet'],
    name: 'x_snc_bolao_da_cop_bet',
    label: 'Palpite',
    allowWebServiceAccess: true,
    index: [{ name: 'bet_user_match_unique', unique: true, element: ['user', 'match'] }],
    schema: {
        user: ReferenceColumn({
            label: 'Usuário',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        match: ReferenceColumn({
            label: 'Jogo',
            referenceTable: 'x_snc_bolao_da_cop_match',
            mandatory: true,
        }),
        pred_home: IntegerColumn({ label: 'Palpite mandante', default: 0 }),
        pred_away: IntegerColumn({ label: 'Palpite visitante', default: 0 }),
        stake: IntegerColumn({ label: 'Aposta (estalecas)', default: 100, mandatory: true }),
        payout: IntegerColumn({ label: 'Retorno', default: 0 }),
        result: ChoiceColumn({
            label: 'Resultado',
            default: 'pending',
            choices: {
                pending: { label: 'Pendente' },
                exact: { label: 'Placar exato' },
                winner: { label: 'Acertou o vencedor' },
                wrong: { label: 'Errou' },
            },
        }),
    },
})

/** Definições de conquistas */
export const x_snc_bolao_da_cop_achievement = Table({
    $id: Now.ID['t_achievement'],
    name: 'x_snc_bolao_da_cop_achievement',
    label: 'Conquista',
    display: 'name',
    allowWebServiceAccess: true,
    schema: {
        name: StringColumn({ label: 'Nome', mandatory: true, maxLength: 60 }),
        description: StringColumn({ label: 'Descrição', maxLength: 255 }),
        icon: StringColumn({ label: 'Ícone', maxLength: 16 }),
        criteria_key: ChoiceColumn({
            label: 'Critério',
            choices: {
                exact: { label: 'Placar exato' },
                streak: { label: 'Sequência de acertos' },
                underdog: { label: 'Caçador de zebras' },
                highroller: { label: 'High roller' },
                first_bet: { label: 'Primeira aposta' },
            },
        }),
    },
})

/** Conquistas obtidas por usuário */
export const x_snc_bolao_da_cop_user_badge = Table({
    $id: Now.ID['t_user_badge'],
    name: 'x_snc_bolao_da_cop_user_badge',
    label: 'Conquista do usuário',
    allowWebServiceAccess: true,
    schema: {
        user: ReferenceColumn({
            label: 'Usuário',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        achievement: ReferenceColumn({
            label: 'Conquista',
            referenceTable: 'x_snc_bolao_da_cop_achievement',
            mandatory: true,
        }),
        earned_at: DateTimeColumn({ label: 'Conquistada em' }),
    },
})
