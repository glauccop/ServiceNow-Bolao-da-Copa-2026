import type { Bet, LeaderRow, UserBadge, Achievement } from '../types'

interface WalletRow {
    user: string
    name: string
    balance: number
}

/**
 * Monta o ranking a partir das carteiras (saldo) e agrega estatísticas dos palpites.
 * Tudo client-side — escala adequada para o volume de uma demo.
 */
export function buildLeaderboard(
    wallets: WalletRow[],
    bets: Bet[],
    badges: UserBadge[],
    achievements: Achievement[],
): LeaderRow[] {
    const achById = new Map(achievements.map((a) => [a.sys_id, a]))

    const statsByUser = new Map<
        string,
        { exact: number; win: number; total: number }
    >()
    for (const b of bets) {
        const s = statsByUser.get(b.user) || { exact: 0, win: 0, total: 0 }
        s.total += 1
        if (b.result === 'exact') {
            s.exact += 1
            s.win += 1
        } else if (b.result === 'winner') {
            s.win += 1
        }
        statsByUser.set(b.user, s)
    }

    const badgesByUser = new Map<string, string[]>()
    for (const ub of badges) {
        const ach = achById.get(ub.achievement)
        if (!ach) continue
        const arr = badgesByUser.get(ub.user) || []
        arr.push(ach.icon || '🏅')
        badgesByUser.set(ub.user, arr)
    }

    return wallets.map((w) => {
        const s = statsByUser.get(w.user) || { exact: 0, win: 0, total: 0 }
        const settled = bets.filter((b) => b.user === w.user && b.result !== 'pending').length
        return {
            user: w.user,
            name: w.name,
            balance: w.balance,
            exactHits: s.exact,
            winHits: s.win,
            totalBets: s.total,
            winRate: settled > 0 ? Math.round((s.win / settled) * 100) : 0,
            badges: badgesByUser.get(w.user) || [],
        }
    })
}
