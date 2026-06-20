import React from 'react'
import type { Bet, Match, Team, Achievement, UserBadge, CurrentUser } from '../types'

interface Props {
    user: CurrentUser
    balance: number
    myBets: Bet[]
    matchById: Map<string, Match>
    teamById: Map<string, Team>
    achievements: Achievement[]
    myBadges: UserBadge[]
}

const RESULT_LABEL: Record<string, string> = {
    exact: 'Placar exato',
    winner: 'Acertou vencedor',
    wrong: 'Errou',
    pending: 'Pendente',
}

export default function Profile({
    user,
    balance,
    myBets,
    matchById,
    teamById,
    achievements,
    myBadges,
}: Props) {
    const settled = myBets.filter((b) => b.result !== 'pending')
    const exact = myBets.filter((b) => b.result === 'exact').length
    const wins = myBets.filter((b) => b.result === 'exact' || b.result === 'winner').length
    const winRate = settled.length ? Math.round((wins / settled.length) * 100) : 0
    const earned = new Set(myBadges.map((b) => b.achievement))

    const label = (teamId: string) => {
        const t = teamById.get(teamId)
        return t ? `${t.flag} ${t.code}` : '???'
    }

    return (
        <div className="profile">
            <div className="wallet-hero">
                <div className="wallet-avatar">{user.name.charAt(0).toUpperCase()}</div>
                <div className="wallet-info">
                    <div className="wallet-name">{user.name}</div>
                    <div className="wallet-balance">🪙 {balance} <span>estalecas</span></div>
                </div>
            </div>

            <div className="stat-grid">
                <div className="stat-box">
                    <div className="stat-num">{myBets.length}</div>
                    <div className="stat-label">Palpites</div>
                </div>
                <div className="stat-box">
                    <div className="stat-num">{exact}</div>
                    <div className="stat-label">Placares exatos</div>
                </div>
                <div className="stat-box">
                    <div className="stat-num">{winRate}%</div>
                    <div className="stat-label">Aproveitamento</div>
                </div>
            </div>

            <h3 className="section-title">Conquistas</h3>
            <div className="badge-shelf">
                {achievements.map((a) => {
                    const has = earned.has(a.sys_id)
                    return (
                        <div key={a.sys_id} className={`badge ${has ? 'earned' : 'locked'}`} title={a.description}>
                            <span className="badge-icon">{has ? a.icon : '🔒'}</span>
                            <span className="badge-name">{a.name}</span>
                        </div>
                    )
                })}
                {achievements.length === 0 && <div className="empty">Sem conquistas cadastradas.</div>}
            </div>

            <h3 className="section-title">Histórico de palpites</h3>
            <div className="history">
                {myBets.length === 0 && <div className="empty">Você ainda não fez palpites.</div>}
                {myBets.map((b) => {
                    const m = matchById.get(b.match)
                    return (
                        <div key={b.sys_id} className={`history-row ${b.result}`}>
                            <span className="hist-match">
                                {m ? `${label(m.home_team)} ${b.pred_home}×${b.pred_away} ${label(m.away_team)}` : 'Jogo'}
                            </span>
                            <span className={`result-tag ${b.result}`}>{RESULT_LABEL[b.result]}</span>
                            <span className={`payout ${b.payout > 0 ? 'pos' : b.result === 'wrong' ? 'neg' : ''}`}>
                                {b.result === 'pending'
                                    ? `🪙 ${b.stake}`
                                    : b.payout > 0
                                    ? `+${b.payout} 🪙`
                                    : `−${b.stake} 🪙`}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
