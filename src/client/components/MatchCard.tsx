import React, { useState } from 'react'
import type { Match, Team, Bet } from '../types'
import Flag from './Flag'

interface Props {
    match: Match
    home?: Team
    away?: Team
    bet?: Bet
    balance: number
    onPlaceBet: (match: Match, predHome: number, predAway: number, stake: number, betId?: string) => Promise<void>
}

const RESULT_LABEL: Record<string, string> = {
    exact: 'Placar exato!',
    winner: 'Acertou o vencedor',
    wrong: 'Não foi dessa vez',
    pending: 'Aguardando',
}

function TeamSide({ team, fallbackName, align }: { team?: Team; fallbackName: string; align: 'left' | 'right' }) {
    const name = team?.name || fallbackName || 'A definir'
    return (
        <div className={`team team-${align}`}>
            <Flag code={team?.code} size={44} />
            <span className="team-code">{team?.code || '—'}</span>
            <span className="team-name">{name}</span>
        </div>
    )
}

export default function MatchCard({ match, home, away, bet, balance, onPlaceBet }: Props) {
    const isFinished = match.status === 'finished'
    const isOpen = match.status === 'open'
    const [predHome, setPredHome] = useState<number>(bet?.pred_home ?? 0)
    const [predAway, setPredAway] = useState<number>(bet?.pred_away ?? 0)
    const [stake, setStake] = useState<number>(bet?.stake ?? 100)
    const [saving, setSaving] = useState(false)

    const step = (setter: (n: number) => void, v: number, delta: number) =>
        setter(Math.max(0, v + delta))

    const submit = async () => {
        setSaving(true)
        try {
            await onPlaceBet(match, predHome, predAway, stake, bet?.sys_id)
        } finally {
            setSaving(false)
        }
    }

    const statusBadge = isFinished ? (
        <span className="status-pill finished">Encerrado</span>
    ) : isOpen ? (
        <span className="status-pill open">Apostas abertas</span>
    ) : (
        <span className="status-pill closed">🔒 Fechado</span>
    )

    return (
        <article className={`match-card ${match.status}`}>
            <header className="match-head">
                <span className="match-meta">
                    {match.group ? `Grupo ${match.group}` : match.stage} · Jogo {match.match_no}
                </span>
                {statusBadge}
            </header>

            <div className="scoreboard">
                <TeamSide team={home} fallbackName={match.home_team_name} align="left" />
                <div className="score-center">
                    {isFinished ? (
                        <div className="final-score">
                            {match.home_score}<span>×</span>{match.away_score}
                        </div>
                    ) : (
                        <div className="vs">VS</div>
                    )}
                    <div className="kickoff">{match.kickoffDisplay}</div>
                </div>
                <TeamSide team={away} fallbackName={match.away_team_name} align="right" />
            </div>

            {match.venue && <div className="venue">📍 {match.venue}</div>}

            {/* Estado: jogo aberto -> formulário de aposta */}
            {isOpen && (
                <div className="bet-panel">
                    <div className="bet-predict">
                        <div className="stepper">
                            <button onClick={() => step(setPredHome, predHome, -1)} aria-label="menos">−</button>
                            <span className="pred">{predHome}</span>
                            <button onClick={() => step(setPredHome, predHome, +1)} aria-label="mais">+</button>
                        </div>
                        <span className="pred-x">×</span>
                        <div className="stepper">
                            <button onClick={() => step(setPredAway, predAway, -1)} aria-label="menos">−</button>
                            <span className="pred">{predAway}</span>
                            <button onClick={() => step(setPredAway, predAway, +1)} aria-label="mais">+</button>
                        </div>
                    </div>
                    <div className="stake-row">
                        <label>Aposta</label>
                        <input
                            type="range"
                            min={10}
                            max={Math.max(10, balance + (bet?.stake ?? 0))}
                            step={10}
                            value={stake}
                            onChange={(e) => setStake(parseInt(e.target.value, 10))}
                        />
                        <span className="stake-value">🪙 {stake}</span>
                    </div>
                    <button className="bet-btn" onClick={submit} disabled={saving || stake <= 0}>
                        {saving ? 'Enviando…' : bet ? 'Atualizar palpite' : 'Apostar'}
                    </button>
                </div>
            )}

            {/* Estado: jogo fechado ou encerrado, com palpite do usuário */}
            {!isOpen && bet && (
                <div className={`bet-result ${bet.result}`}>
                    <div className="bet-result-row">
                        <span>Seu palpite: <strong>{bet.pred_home} × {bet.pred_away}</strong></span>
                        <span>🪙 {bet.stake}</span>
                    </div>
                    <div className="bet-result-status">
                        <span className={`result-tag ${bet.result}`}>{RESULT_LABEL[bet.result]}</span>
                        {bet.result !== 'pending' && (
                            <span className={`payout ${bet.payout > 0 ? 'pos' : 'neg'}`}>
                                {bet.payout > 0 ? `+${bet.payout}` : `−${bet.stake}`} 🪙
                            </span>
                        )}
                    </div>
                </div>
            )}

            {!isOpen && !bet && <div className="no-bet">Você não apostou neste jogo.</div>}
        </article>
    )
}
