import React, { useState } from 'react'
import type { Match, Team, MatchStatus } from '../types'

interface Props {
    matches: Match[]
    teamById: Map<string, Team>
    onSettle: (matchId: string, home: number, away: number) => Promise<void>
    onSetStatus: (matchId: string, status: MatchStatus) => Promise<void>
}

function AdminRow({ match, teamById, onSettle, onSetStatus }: {
    match: Match
    teamById: Map<string, Team>
    onSettle: Props['onSettle']
    onSetStatus: Props['onSetStatus']
}) {
    const [h, setH] = useState<number>(match.home_score ?? 0)
    const [a, setA] = useState<number>(match.away_score ?? 0)
    const [busy, setBusy] = useState(false)
    const home = teamById.get(match.home_team)
    const away = teamById.get(match.away_team)

    const run = async (fn: () => Promise<void>) => {
        setBusy(true)
        try { await fn() } finally { setBusy(false) }
    }

    return (
        <div className={`admin-row ${match.status}`}>
            <div className="admin-teams">
                <span>{home?.flag} {home?.code}</span>
                <input type="number" min={0} value={h} onChange={(e) => setH(parseInt(e.target.value || '0', 10))} />
                <span className="admin-x">×</span>
                <input type="number" min={0} value={a} onChange={(e) => setA(parseInt(e.target.value || '0', 10))} />
                <span>{away?.code} {away?.flag}</span>
            </div>
            <div className="admin-meta">
                <span className={`status-pill ${match.status}`}>{match.status}</span>
                <span className="admin-kick">{match.kickoffDisplay}</span>
            </div>
            <div className="admin-actions">
                {match.status === 'open' && (
                    <button className="ghost" disabled={busy} onClick={() => run(() => onSetStatus(match.sys_id, 'closed'))}>Fechar</button>
                )}
                {match.status === 'closed' && (
                    <button className="ghost" disabled={busy} onClick={() => run(() => onSetStatus(match.sys_id, 'open'))}>Reabrir</button>
                )}
                <button className="primary" disabled={busy} onClick={() => run(() => onSettle(match.sys_id, h, a))}>
                    {match.status === 'finished' ? 'Recalcular' : 'Lançar resultado'}
                </button>
            </div>
        </div>
    )
}

export default function Admin({ matches, teamById, onSettle, onSetStatus }: Props) {
    const pending = matches.filter((m) => m.status !== 'finished')
    const finished = matches.filter((m) => m.status === 'finished')
    return (
        <div className="admin">
            <div className="admin-note">
                Lançar o placar encerra o jogo e dispara a liquidação automática das apostas.
            </div>
            <h3 className="section-title">Jogos pendentes ({pending.length})</h3>
            {pending.map((m) => (
                <AdminRow key={m.sys_id} match={m} teamById={teamById} onSettle={onSettle} onSetStatus={onSetStatus} />
            ))}
            <h3 className="section-title">Jogos encerrados ({finished.length})</h3>
            {finished.map((m) => (
                <AdminRow key={m.sys_id} match={m} teamById={teamById} onSettle={onSettle} onSetStatus={onSetStatus} />
            ))}
        </div>
    )
}
