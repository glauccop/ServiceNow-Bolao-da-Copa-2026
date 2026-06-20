import React from 'react'
import type { LeaderRow } from '../types'

interface Props {
    rows: LeaderRow[]
    currentUser: string
}

const MEDALS = ['🥇', '🥈', '🥉']

function Podium({ rows }: { rows: LeaderRow[] }) {
    // ordem visual: 2º, 1º, 3º
    const order = [rows[1], rows[0], rows[2]].filter(Boolean)
    const place = (r: LeaderRow) => rows.indexOf(r)
    return (
        <div className="podium">
            {order.map((r) => {
                const p = place(r)
                return (
                    <div key={r.user} className={`podium-spot place-${p}`}>
                        <div className="podium-medal">{MEDALS[p]}</div>
                        <div className="podium-avatar">{r.name.charAt(0).toUpperCase()}</div>
                        <div className="podium-name">{r.name}</div>
                        <div className="podium-balance">🪙 {r.balance}</div>
                        <div className="podium-base">{p + 1}º</div>
                    </div>
                )
            })}
        </div>
    )
}

export default function Leaderboard({ rows, currentUser }: Props) {
    if (rows.length === 0) {
        return <div className="empty">Nenhum participante no ranking ainda.</div>
    }
    const top3 = rows.slice(0, 3)
    const rest = rows.slice(3)
    return (
        <div className="leaderboard">
            <Podium rows={top3} />
            <div className="leader-table">
                <div className="leader-head">
                    <span className="col-rank">#</span>
                    <span className="col-name">Participante</span>
                    <span className="col-stat">Exatos</span>
                    <span className="col-stat">Aprov.</span>
                    <span className="col-bal">Estalecas</span>
                </div>
                {rows.map((r, i) => (
                    <div
                        key={r.user}
                        className={`leader-row ${r.user === currentUser ? 'me' : ''} ${i < 3 ? 'top' : ''}`}
                    >
                        <span className="col-rank">{i < 3 ? MEDALS[i] : i + 1}</span>
                        <span className="col-name">
                            <span className="row-avatar">{r.name.charAt(0).toUpperCase()}</span>
                            {r.name}
                            <span className="row-badges">{r.badges.slice(0, 5).join(' ')}</span>
                        </span>
                        <span className="col-stat">{r.exactHits}</span>
                        <span className="col-stat">{r.winRate}%</span>
                        <span className="col-bal">🪙 {r.balance}</span>
                    </div>
                ))}
                {rest.length === 0 && top3.length < rows.length ? null : null}
            </div>
        </div>
    )
}
