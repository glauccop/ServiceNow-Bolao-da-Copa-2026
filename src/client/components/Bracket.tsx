import React from 'react'
import type { Match, Team } from '../types'
import Flag from './Flag'

interface Props {
    matches: Match[]
    teamById: Map<string, Team>
}

/** Quem alimenta cada confronto: [jogo que define o mandante, jogo que define o visitante]. */
const FEED: Record<number, [number, number]> = {
    201: [101, 102],
    202: [103, 104],
    203: [105, 106],
    204: [107, 108],
    301: [201, 202],
    302: [203, 204],
    401: [301, 302],
}

const COLUMNS: { title: string; nos: number[] }[] = [
    { title: 'Oitavas', nos: [101, 102, 103, 104, 105, 106, 107, 108] },
    { title: 'Quartas', nos: [201, 202, 203, 204] },
    { title: 'Semifinais', nos: [301, 302] },
    { title: 'Final', nos: [401] },
]

export default function Bracket({ matches, teamById }: Props) {
    const byNo = new Map<number, Match>()
    matches.forEach((m) => byNo.set(m.match_no, m))

    const homeId = (no: number): string | null => {
        const feed = FEED[no]
        if (feed) return winnerOf(feed[0])
        const m = byNo.get(no)
        return m && m.home_team ? m.home_team : null
    }
    const awayId = (no: number): string | null => {
        const feed = FEED[no]
        if (feed) return winnerOf(feed[1])
        const m = byNo.get(no)
        return m && m.away_team ? m.away_team : null
    }
    function winnerOf(no: number): string | null {
        const m = byNo.get(no)
        if (!m || m.status !== 'finished' || m.home_score == null || m.away_score == null) return null
        if (m.home_score > m.away_score) return homeId(no)
        if (m.away_score > m.home_score) return awayId(no)
        return homeId(no) // empate (raro em mata-mata) → mandante
    }

    const hasKnockout = COLUMNS.some((c) => c.nos.some((no) => byNo.has(no)))
    if (!hasKnockout) {
        return <div className="empty">O chaveamento aparece quando os jogos de mata-mata forem cadastrados.</div>
    }

    const Slot = ({ teamId, score, isWinner, decided }: {
        teamId: string | null
        score: number | null
        isWinner: boolean
        decided: boolean
    }) => {
        const team = teamId ? teamById.get(teamId) : undefined
        return (
            <div className={`bk-slot ${isWinner ? 'winner' : ''} ${!team ? 'tbd' : ''}`}>
                {team ? <Flag code={team.code} size={22} /> : <span className="bk-tbd-dot">•</span>}
                <span className="bk-code">{team ? team.code : 'A definir'}</span>
                {decided && <span className="bk-score">{score}</span>}
            </div>
        )
    }

    return (
        <div className="bracket-scroll">
            <div className="bracket">
                {COLUMNS.map((col) => (
                    <div key={col.title} className={`bk-col col-${col.nos.length}`}>
                        <div className="bk-col-title">{col.title}</div>
                        <div className="bk-col-matches">
                            {col.nos.map((no) => {
                                const m = byNo.get(no)
                                const hId = homeId(no)
                                const aId = awayId(no)
                                const finished = !!m && m.status === 'finished'
                                const wId = winnerOf(no)
                                return (
                                    <div key={no} className={`bk-match ${finished ? 'done' : ''}`}>
                                        <Slot teamId={hId} score={m?.home_score ?? null} isWinner={!!wId && wId === hId} decided={finished} />
                                        <Slot teamId={aId} score={m?.away_score ?? null} isWinner={!!wId && wId === aId} decided={finished} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
