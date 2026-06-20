import React, { useEffect, useMemo, useState } from 'react'
import './app.css'
import { BolaoService } from './services/BolaoService'
import { buildLeaderboard } from './lib/leaderboard'
import type {
    Team,
    Match,
    Bet,
    CurrentUser,
    Achievement,
    UserBadge,
    MatchStatus,
} from './types'
import MatchCard from './components/MatchCard'
import Leaderboard from './components/Leaderboard'
import Profile from './components/Profile'
import Admin from './components/Admin'
import Bracket from './components/Bracket'

type Tab = 'jogos' | 'chaveamento' | 'ranking' | 'perfil' | 'admin'
type MatchFilter = 'open' | 'finished' | 'all'

interface Toast {
    msg: string
    kind: 'success' | 'error'
}

export default function App() {
    const service = useMemo(() => new BolaoService(), [])

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [tab, setTab] = useState<Tab>('jogos')
    const [toast, setToast] = useState<Toast | null>(null)
    const [matchFilter, setMatchFilter] = useState<MatchFilter>('open')

    const [user, setUser] = useState<CurrentUser>({ sys_id: '', name: '', isAdmin: false })
    const [teams, setTeams] = useState<Team[]>([])
    const [matches, setMatches] = useState<Match[]>([])
    const [myBets, setMyBets] = useState<Bet[]>([])
    const [allBets, setAllBets] = useState<Bet[]>([])
    const [wallets, setWallets] = useState<{ user: string; name: string; balance: number }[]>([])
    const [balance, setBalance] = useState(0)
    const [achievements, setAchievements] = useState<Achievement[]>([])
    const [myBadges, setMyBadges] = useState<UserBadge[]>([])
    const [allBadges, setAllBadges] = useState<UserBadge[]>([])

    const flash = (msg: string, kind: Toast['kind']) => {
        setToast({ msg, kind })
        window.setTimeout(() => setToast(null), 3500)
    }

    const loadAll = async () => {
        try {
            setLoading(true)
            setError(null)
            const [u, ts, ms, mb, ab, ws, bal, achs, mbadges, abadges] = await Promise.all([
                service.getCurrentUser(),
                service.getTeams(),
                service.getMatches(),
                service.getMyBets(),
                service.getAllBets(),
                service.getWallets(),
                service.getMyBalance(),
                service.getAchievements(),
                service.getMyBadges(),
                service.getAllBadges(),
            ])
            setUser(u)
            setTeams(ts)
            setMatches(ms)
            setMyBets(mb)
            setAllBets(ab)
            setWallets(ws)
            setBalance(bal)
            setAchievements(achs)
            setMyBadges(mbadges)
            setAllBadges(abadges)
        } catch (err: any) {
            setError(err?.message || 'Erro ao carregar o bolão.')
        } finally {
            setLoading(false)
        }
    }

    const reloadDynamic = async () => {
        const [mb, ab, ws, bal, ms, mbadges, abadges] = await Promise.all([
            service.getMyBets(),
            service.getAllBets(),
            service.getWallets(),
            service.getMyBalance(),
            service.getMatches(),
            service.getMyBadges(),
            service.getAllBadges(),
        ])
        setMyBets(mb)
        setAllBets(ab)
        setWallets(ws)
        setBalance(bal)
        setMatches(ms)
        setMyBadges(mbadges)
        setAllBadges(abadges)
    }

    useEffect(() => {
        void loadAll()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const teamById = useMemo(() => new Map(teams.map((t) => [t.sys_id, t])), [teams])
    const matchById = useMemo(() => new Map(matches.map((m) => [m.sys_id, m])), [matches])
    const betByMatch = useMemo(() => new Map(myBets.map((b) => [b.match, b])), [myBets])
    const leaderboard = useMemo(
        () => buildLeaderboard(wallets, allBets, allBadges, achievements),
        [wallets, allBets, allBadges, achievements],
    )

    const visibleMatches = useMemo(() => {
        if (matchFilter === 'all') return matches
        if (matchFilter === 'open') return matches.filter((m) => m.status !== 'finished')
        return matches.filter((m) => m.status === 'finished')
    }, [matches, matchFilter])

    const handlePlaceBet = async (
        match: Match,
        predHome: number,
        predAway: number,
        stake: number,
        betId?: string,
    ) => {
        try {
            await service.placeBet(match.sys_id, predHome, predAway, stake, betId)
            await reloadDynamic()
            flash('Palpite registrado! 🎯', 'success')
        } catch (err: any) {
            flash(err?.message || 'Não foi possível registrar a aposta.', 'error')
        }
    }

    const handleSettle = async (matchId: string, home: number, away: number) => {
        try {
            await service.settleMatch(matchId, home, away)
            await reloadDynamic()
            flash('Resultado lançado e apostas liquidadas! 🏆', 'success')
        } catch (err: any) {
            flash(err?.message || 'Erro ao lançar resultado.', 'error')
        }
    }

    const handleSetStatus = async (matchId: string, status: MatchStatus) => {
        try {
            await service.setMatchStatus(matchId, status)
            await reloadDynamic()
            flash('Status atualizado.', 'success')
        } catch (err: any) {
            flash(err?.message || 'Erro ao atualizar status.', 'error')
        }
    }

    if (loading) {
        return (
            <div className="app loading-screen">
                <div className="ball-spinner">⚽</div>
                <p>Carregando o bolão…</p>
            </div>
        )
    }

    const tabs: { key: Tab; icon: string; label: string }[] = [
        { key: 'jogos', icon: '⚽', label: 'Jogos' },
        { key: 'chaveamento', icon: '🗺️', label: 'Chaveamento' },
        { key: 'ranking', icon: '🏆', label: 'Ranking' },
        { key: 'perfil', icon: '👤', label: 'Perfil' },
    ]
    if (user.isAdmin) tabs.push({ key: 'admin', icon: '⚙️', label: 'Admin' })

    return (
        <div className="app">
            <header className="app-header">
                <div className="brand">
                    <span className="brand-mark">⚽</span>
                    <div>
                        <h1>Bolão da Copa</h1>
                        <span className="brand-sub">Copa do Mundo 2026</span>
                    </div>
                </div>
                <nav className="header-nav">
                    {tabs.map((t) => (
                        <button
                            key={t.key}
                            className={tab === t.key ? 'active' : ''}
                            onClick={() => setTab(t.key)}
                        >
                            <span>{t.icon}</span>
                            {t.label}
                        </button>
                    ))}
                </nav>
                <div className="wallet-chip">
                    <span className="coin">🪙</span>
                    <span className="coin-val">{balance}</span>
                </div>
            </header>

            {error && (
                <div className="error-banner">
                    {error}
                    <button onClick={() => void loadAll()}>Tentar de novo</button>
                </div>
            )}

            {myBets.length === 0 && (
                <div className="welcome-note">
                    <span className="welcome-coin">🪙</span>
                    <div>
                        <strong>Bem-vindo ao Bolão da Copa!</strong> Todo participante começa com{' '}
                        <strong>1000 estalecas</strong>. Sua carteira é criada automaticamente no seu{' '}
                        <strong>primeiro palpite</strong> — por isso o saldo aparece zerado até você apostar.
                        Faça seu primeiro palpite na aba <strong>Jogos</strong> para entrar no ranking!
                    </div>
                </div>
            )}

            <main className="app-body">
                {tab === 'jogos' && (
                    <section>
                        <div className="filter-tabs">
                            <button className={matchFilter === 'open' ? 'active' : ''} onClick={() => setMatchFilter('open')}>A apostar</button>
                            <button className={matchFilter === 'finished' ? 'active' : ''} onClick={() => setMatchFilter('finished')}>Encerrados</button>
                            <button className={matchFilter === 'all' ? 'active' : ''} onClick={() => setMatchFilter('all')}>Todos</button>
                        </div>
                        <div className="match-grid">
                            {visibleMatches.length === 0 && <div className="empty">Nenhum jogo nesta visão.</div>}
                            {visibleMatches.map((m) => (
                                <MatchCard
                                    key={m.sys_id}
                                    match={m}
                                    home={teamById.get(m.home_team)}
                                    away={teamById.get(m.away_team)}
                                    bet={betByMatch.get(m.sys_id)}
                                    balance={balance}
                                    onPlaceBet={handlePlaceBet}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {tab === 'chaveamento' && (
                    <section>
                        <h2 className="view-title">🗺️ Chaveamento</h2>
                        <Bracket matches={matches} teamById={teamById} />
                    </section>
                )}

                {tab === 'ranking' && (
                    <section>
                        <h2 className="view-title">🏆 Top Líderes</h2>
                        <Leaderboard rows={leaderboard} currentUser={user.sys_id} />
                    </section>
                )}

                {tab === 'perfil' && (
                    <section>
                        <Profile
                            user={user}
                            balance={balance}
                            myBets={myBets}
                            matchById={matchById}
                            teamById={teamById}
                            achievements={achievements}
                            myBadges={myBadges}
                        />
                    </section>
                )}

                {tab === 'admin' && user.isAdmin && (
                    <section>
                        <h2 className="view-title">⚙️ Administração</h2>
                        <Admin
                            matches={matches}
                            teamById={teamById}
                            onSettle={handleSettle}
                            onSetStatus={handleSetStatus}
                        />
                    </section>
                )}
            </main>

            {toast && <div className={`toast ${toast.kind}`}>{toast.msg}</div>}

            <nav className="bottom-nav">
                {tabs.map((t) => (
                    <button
                        key={t.key}
                        className={tab === t.key ? 'active' : ''}
                        onClick={() => setTab(t.key)}
                    >
                        <span>{t.icon}</span>
                        {t.label}
                    </button>
                ))}
            </nav>
        </div>
    )
}
