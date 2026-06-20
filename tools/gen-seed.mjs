#!/usr/bin/env node
/**
 * Gerador de seed do Bolão da Copa.
 *
 * Lê data/worldcup.json (formato { teams: [...], matches: [...] }) e gera:
 *   - src/fluent/seed/teams.now.ts        (48 seleções)
 *   - src/fluent/seed/matches.now.ts      (jogos, finished com placar + open)
 *   - src/fluent/seed/achievements.now.ts (definições de conquistas)
 *   - src/fluent/seed/demo.now.ts         (usuários demo + carteiras + apostas precomputadas)
 *
 * As apostas/saldos dos usuários demo são PREcomputados (business rules não disparam
 * em dados carregados na instalação do app), produzindo um leaderboard já populado a
 * partir dos resultados reais dos jogos já disputados.
 *
 * Uso: node tools/gen-seed.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DATA = join(ROOT, 'data', 'worldcup.json')
const SEED_DIR = join(ROOT, 'src', 'fluent', 'seed')

const EXACT_MULT = 5
const WINNER_MULT = 2
const INITIAL = 1000

const PERSONAS = [
    { name: 'Ana Souza', user: 'bolao.ana', exact: 35, win: 75 },
    { name: 'Bruno Lima', user: 'bolao.bruno', exact: 25, win: 65 },
    { name: 'Carla Dias', user: 'bolao.carla', exact: 45, win: 80 },
    { name: 'Diego Alves', user: 'bolao.diego', exact: 15, win: 55 },
    { name: 'Eduardo Reis', user: 'bolao.eduardo', exact: 30, win: 70 },
    { name: 'Fernanda Melo', user: 'bolao.fernanda', exact: 20, win: 60 },
    { name: 'Gustavo Pinto', user: 'bolao.gustavo', exact: 10, win: 45 },
    { name: 'Helena Castro', user: 'bolao.helena', exact: 40, win: 78 },
    { name: 'Igor Nunes', user: 'bolao.igor', exact: 22, win: 62 },
    { name: 'Juliana Rocha', user: 'bolao.juliana', exact: 28, win: 68 },
]

function esc(s) {
    return String(s == null ? '' : s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}
function teamKey(code) {
    return `team_${code.toLowerCase()}`
}
function matchKey(no) {
    return `m_${no}`
}

function loadData() {
    let raw
    try {
        raw = readFileSync(DATA, 'utf8')
    } catch {
        console.error(`\n✗ Arquivo de dados não encontrado: ${DATA}`)
        console.error('  Crie data/worldcup.json no formato { "teams": [...], "matches": [...] }.\n')
        process.exit(1)
    }
    const data = JSON.parse(raw)
    if (!Array.isArray(data.teams) || !Array.isArray(data.matches)) {
        console.error('✗ JSON inválido: precisa de arrays "teams" e "matches".')
        process.exit(1)
    }
    return data
}

/* ---------- teams ---------- */
function genTeams(teams) {
    const lines = [
        "import '@servicenow/sdk/global'",
        "import { Record } from '@servicenow/sdk/core'",
        '',
    ]
    for (const t of teams) {
        lines.push(`Record({`)
        lines.push(`    $id: Now.ID['${teamKey(t.code)}'],`)
        lines.push(`    table: 'x_snc_bolao_da_cop_team',`)
        lines.push(`    data: {`)
        lines.push(`        name: '${esc(t.name)}',`)
        lines.push(`        code: '${esc(t.code)}',`)
        lines.push(`        flag: '${esc(t.flag)}',`)
        lines.push(`        group: '${esc(t.group)}',`)
        lines.push(`        confederation: '${esc(t.confederation)}',`)
        lines.push(`    },`)
        lines.push(`})`)
        lines.push('')
    }
    return lines.join('\n')
}

/* ---------- matches ---------- */
function genMatches(matches) {
    const lines = [
        "import '@servicenow/sdk/global'",
        "import { Record } from '@servicenow/sdk/core'",
        '',
    ]
    for (const m of matches) {
        const finished = m.status === 'finished'
        lines.push(`Record({`)
        lines.push(`    $id: Now.ID['${matchKey(m.match_no)}'],`)
        lines.push(`    table: 'x_snc_bolao_da_cop_match',`)
        lines.push(`    data: {`)
        lines.push(`        match_no: ${m.match_no},`)
        lines.push(`        stage: '${esc(m.stage || 'group')}',`)
        if (m.group) lines.push(`        group: '${esc(m.group)}',`)
        if (m.home) lines.push(`        home_team: Now.ref('x_snc_bolao_da_cop_team', '${teamKey(m.home)}'),`)
        if (m.away) lines.push(`        away_team: Now.ref('x_snc_bolao_da_cop_team', '${teamKey(m.away)}'),`)
        lines.push(`        kickoff: '${esc(m.kickoff)}',`)
        lines.push(`        status: '${esc(m.status)}',`)
        if (finished) {
            lines.push(`        home_score: ${m.home_score},`)
            lines.push(`        away_score: ${m.away_score},`)
        }
        lines.push(`        venue: '${esc(m.venue || '')}',`)
        lines.push(`    },`)
        lines.push(`})`)
        lines.push('')
    }
    return lines.join('\n')
}

/* ---------- achievements ---------- */
function genAchievements() {
    const ach = [
        { key: 'first_bet', icon: '🎟️', name: 'Estreante', desc: 'Fez a primeira aposta no bolão.' },
        { key: 'exact', icon: '🎯', name: 'Vidente', desc: 'Acertou o placar exato de um jogo.' },
        { key: 'streak', icon: '🔥', name: 'Sequência de Fogo', desc: 'Acertou 3 placares exatos.' },
        { key: 'underdog', icon: '🐎', name: 'Caçador de Zebras', desc: 'Apostou e acertou uma zebra.' },
        { key: 'highroller', icon: '💰', name: 'High Roller', desc: 'Venceu uma aposta de 500+ estalecas.' },
    ]
    const lines = [
        "import '@servicenow/sdk/global'",
        "import { Record } from '@servicenow/sdk/core'",
        '',
    ]
    for (const a of ach) {
        lines.push(`Record({`)
        lines.push(`    $id: Now.ID['ach_${a.key}'],`)
        lines.push(`    table: 'x_snc_bolao_da_cop_achievement',`)
        lines.push(`    data: {`)
        lines.push(`        name: '${esc(a.name)}',`)
        lines.push(`        description: '${esc(a.desc)}',`)
        lines.push(`        icon: '${esc(a.icon)}',`)
        lines.push(`        criteria_key: '${a.key}',`)
        lines.push(`    },`)
        lines.push(`})`)
        lines.push('')
    }
    return lines.join('\n')
}

/* ---------- demo users / wallets / bets (precomputed) ---------- */
function genDemo(matches) {
    const finished = matches.filter((m) => m.status === 'finished')
    const lines = [
        "import '@servicenow/sdk/global'",
        "import { Record } from '@servicenow/sdk/core'",
        '',
    ]

    PERSONAS.forEach((p, pi) => {
        const userKey = `u_${pi}`
        const [first, ...rest] = p.name.split(' ')
        const last = rest.join(' ')
        // usuário
        lines.push(`Record({`)
        lines.push(`    $id: Now.ID['${userKey}'],`)
        lines.push(`    table: 'sys_user',`)
        lines.push(`    data: {`)
        lines.push(`        user_name: '${esc(p.user)}',`)
        lines.push(`        first_name: '${esc(first)}',`)
        lines.push(`        last_name: '${esc(last)}',`)
        lines.push(`        name: '${esc(p.name)}',`)
        lines.push(`    },`)
        lines.push(`})`)
        lines.push('')

        // apostas precomputadas
        let balance = INITIAL
        finished.forEach((m) => {
            const r = (pi * 31 + m.match_no * 17) % 100
            const hs = m.home_score
            const as = m.away_score
            let predHome
            let predAway
            let result
            if (r < p.exact) {
                predHome = hs
                predAway = as
                result = 'exact'
            } else if (r < p.win) {
                // mesmo resultado (vencedor/empate), placar diferente
                if (hs > as) {
                    predHome = hs + 1
                    predAway = as
                } else if (hs < as) {
                    predHome = hs
                    predAway = as + 1
                } else {
                    predHome = hs + 1
                    predAway = as + 1
                }
                result = 'winner'
            } else {
                // resultado errado (inverte o favorito)
                if (hs >= as) {
                    predHome = as
                    predAway = as + 2
                } else {
                    predHome = hs + 2
                    predAway = hs
                }
                result = 'wrong'
            }
            const stake = 50 + (r % 5) * 50 + (r > 90 ? 450 : 0) // 50..250, eventuais high rollers
            let payout = 0
            if (result === 'exact') payout = stake * EXACT_MULT
            else if (result === 'winner') payout = stake * WINNER_MULT
            balance += payout - stake

            const betKey = `b_${pi}_${m.match_no}`
            lines.push(`Record({`)
            lines.push(`    $id: Now.ID['${betKey}'],`)
            lines.push(`    table: 'x_snc_bolao_da_cop_bet',`)
            lines.push(`    data: {`)
            lines.push(`        user: Now.ref('sys_user', '${userKey}'),`)
            lines.push(`        match: Now.ref('x_snc_bolao_da_cop_match', '${matchKey(m.match_no)}'),`)
            lines.push(`        pred_home: ${predHome},`)
            lines.push(`        pred_away: ${predAway},`)
            lines.push(`        stake: ${stake},`)
            lines.push(`        payout: ${payout},`)
            lines.push(`        result: '${result}',`)
            lines.push(`    },`)
            lines.push(`})`)
            lines.push('')
        })

        // carteira com saldo precomputado
        if (balance < 0) balance = 0
        lines.push(`Record({`)
        lines.push(`    $id: Now.ID['w_${pi}'],`)
        lines.push(`    table: 'x_snc_bolao_da_cop_wallet',`)
        lines.push(`    data: {`)
        lines.push(`        user: Now.ref('sys_user', '${userKey}'),`)
        lines.push(`        balance: ${balance},`)
        lines.push(`    },`)
        lines.push(`})`)
        lines.push('')
    })

    return lines.join('\n')
}

function main() {
    const data = loadData()
    mkdirSync(SEED_DIR, { recursive: true })
    writeFileSync(join(SEED_DIR, 'teams.now.ts'), genTeams(data.teams))
    writeFileSync(join(SEED_DIR, 'matches.now.ts'), genMatches(data.matches))
    writeFileSync(join(SEED_DIR, 'achievements.now.ts'), genAchievements())
    writeFileSync(join(SEED_DIR, 'demo.now.ts'), genDemo(data.matches))
    const finished = data.matches.filter((m) => m.status === 'finished').length
    console.log(`✓ Seed gerado:`)
    console.log(`  - ${data.teams.length} seleções`)
    console.log(`  - ${data.matches.length} jogos (${finished} encerrados)`)
    console.log(`  - ${PERSONAS.length} usuários demo + carteiras + apostas precomputadas`)
}

main()
