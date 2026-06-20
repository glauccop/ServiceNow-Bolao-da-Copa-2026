import type {
    Team,
    Match,
    Bet,
    CurrentUser,
    Achievement,
    UserBadge,
    MatchStatus,
    BetResult,
} from '../types'

const SCOPE = 'x_snc_bolao_da_cop'
const T = {
    team: `${SCOPE}_team`,
    match: `${SCOPE}_match`,
    wallet: `${SCOPE}_wallet`,
    bet: `${SCOPE}_bet`,
    achievement: `${SCOPE}_achievement`,
    badge: `${SCOPE}_user_badge`,
}

/** Extracts the raw value from a `sysparm_display_value=all` field object. */
function val(field: any): string {
    if (field == null) return ''
    if (typeof field === 'object') return field.value ?? ''
    return String(field)
}
/** Extracts the display value from a `sysparm_display_value=all` field object. */
function disp(field: any): string {
    if (field == null) return ''
    if (typeof field === 'object') return field.display_value ?? field.value ?? ''
    return String(field)
}
function num(field: any): number | null {
    const v = val(field)
    if (v === '' || v === null) return null
    const n = parseInt(v, 10)
    return isNaN(n) ? null : n
}

export class BolaoService {
    private headers(extra: Record<string, string> = {}): Record<string, string> {
        return {
            Accept: 'application/json',
            'X-UserToken': window.g_ck || '',
            ...extra,
        }
    }

    private async getTable(table: string, query: string, fields?: string): Promise<any[]> {
        const params = new URLSearchParams()
        params.set('sysparm_display_value', 'all')
        params.set('sysparm_exclude_reference_link', 'true')
        if (query) params.set('sysparm_query', query)
        if (fields) params.set('sysparm_fields', fields)
        const res = await fetch(`/api/now/table/${table}?${params.toString()}`, {
            method: 'GET',
            headers: this.headers(),
        })
        if (!res.ok) throw new Error(`Falha ao carregar ${table} (${res.status})`)
        const json = await res.json()
        return json.result || []
    }

    async getCurrentUser(): Promise<CurrentUser> {
        // Endpoint padrão da plataforma para "quem sou eu".
        const res = await fetch('/api/now/ui/user/current_user', { headers: this.headers() })
        let sys_id = ''
        let name = 'Participante'
        if (res.ok) {
            const json = await res.json()
            const r = json.result || {}
            sys_id = r.user_sys_id || r.sys_id || ''
            name = r.user_display_name || r.user_name || name
        }
        // Verifica o papel de admin do bolão.
        let isAdmin = false
        try {
            const roles = await this.getTable(
                'sys_user_has_role',
                `user=${sys_id}^role.name=${SCOPE}.admin`,
                'sys_id',
            )
            isAdmin = roles.length > 0
        } catch {
            isAdmin = false
        }
        return { sys_id, name, isAdmin }
    }

    async getTeams(): Promise<Team[]> {
        const rows = await this.getTable(T.team, 'ORDERBYgroup^ORDERBYname')
        return rows.map((r) => ({
            sys_id: val(r.sys_id),
            name: disp(r.name) || val(r.name),
            code: val(r.code),
            flag: val(r.flag),
            group: val(r.group),
            confederation: val(r.confederation),
        }))
    }

    async getMatches(): Promise<Match[]> {
        const rows = await this.getTable(T.match, 'ORDERBYkickoff^ORDERBYmatch_no')
        return rows.map((r) => ({
            sys_id: val(r.sys_id),
            match_no: num(r.match_no) ?? 0,
            stage: val(r.stage),
            group: val(r.group),
            home_team: val(r.home_team),
            away_team: val(r.away_team),
            home_team_name: disp(r.home_team),
            away_team_name: disp(r.away_team),
            kickoff: val(r.kickoff),
            kickoffDisplay: disp(r.kickoff),
            status: (val(r.status) || 'open') as MatchStatus,
            home_score: num(r.home_score),
            away_score: num(r.away_score),
            venue: val(r.venue),
        }))
    }

    async getMyBets(): Promise<Bet[]> {
        const rows = await this.getTable(T.bet, 'user=javascript:gs.getUserID()')
        return rows.map(this.mapBet)
    }

    async getAllBets(): Promise<Bet[]> {
        const rows = await this.getTable(
            T.bet,
            '',
            'sys_id,user,match,pred_home,pred_away,stake,payout,result',
        )
        return rows.map(this.mapBet)
    }

    private mapBet(r: any): Bet {
        return {
            sys_id: val(r.sys_id),
            user: val(r.user),
            match: val(r.match),
            pred_home: num(r.pred_home) ?? 0,
            pred_away: num(r.pred_away) ?? 0,
            stake: num(r.stake) ?? 0,
            payout: num(r.payout) ?? 0,
            result: (val(r.result) || 'pending') as BetResult,
        }
    }

    /** Carteiras ordenadas por saldo desc; retorna mapa user->{balance,name}. */
    async getWallets(): Promise<{ user: string; name: string; balance: number }[]> {
        const rows = await this.getTable(T.wallet, 'ORDERBYDESCbalance', 'user,balance')
        return rows.map((r) => ({
            user: val(r.user),
            name: disp(r.user) || val(r.user),
            balance: num(r.balance) ?? 0,
        }))
    }

    async getMyBalance(): Promise<number> {
        const rows = await this.getTable(T.wallet, 'user=javascript:gs.getUserID()', 'balance')
        if (rows.length === 0) return 0
        return num(rows[0].balance) ?? 0
    }

    async getAchievements(): Promise<Achievement[]> {
        const rows = await this.getTable(T.achievement, '')
        return rows.map((r) => ({
            sys_id: val(r.sys_id),
            name: disp(r.name) || val(r.name),
            description: val(r.description),
            icon: val(r.icon),
            criteria_key: val(r.criteria_key),
        }))
    }

    async getMyBadges(): Promise<UserBadge[]> {
        const rows = await this.getTable(T.badge, 'user=javascript:gs.getUserID()', 'user,achievement')
        return rows.map((r) => ({ user: val(r.user), achievement: val(r.achievement) }))
    }

    async getAllBadges(): Promise<UserBadge[]> {
        const rows = await this.getTable(T.badge, '', 'user,achievement')
        return rows.map((r) => ({ user: val(r.user), achievement: val(r.achievement) }))
    }

    async placeBet(
        matchId: string,
        predHome: number,
        predAway: number,
        stake: number,
        existingBetId?: string,
    ): Promise<void> {
        const body = JSON.stringify({
            match: matchId,
            pred_home: predHome,
            pred_away: predAway,
            stake: stake,
        })
        const url = existingBetId
            ? `/api/now/table/${T.bet}/${existingBetId}`
            : `/api/now/table/${T.bet}`
        const res = await fetch(url, {
            method: existingBetId ? 'PATCH' : 'POST',
            headers: this.headers({ 'Content-Type': 'application/json' }),
            body,
        })
        if (!res.ok) {
            const text = await res.text()
            let msg = `Erro ao registrar aposta (${res.status})`
            try {
                const j = JSON.parse(text)
                if (j?.error?.message) msg = j.error.message
            } catch {
                /* ignore */
            }
            throw new Error(msg)
        }
    }

    /** Admin: lança o resultado do jogo e encerra (dispara a liquidação). */
    async settleMatch(matchId: string, homeScore: number, awayScore: number): Promise<void> {
        const res = await fetch(`/api/now/table/${T.match}/${matchId}`, {
            method: 'PATCH',
            headers: this.headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({
                home_score: homeScore,
                away_score: awayScore,
                status: 'finished',
            }),
        })
        if (!res.ok) throw new Error(`Erro ao lançar resultado (${res.status})`)
    }

    /** Admin: muda o status de apostas de um jogo. */
    async setMatchStatus(matchId: string, status: MatchStatus): Promise<void> {
        const res = await fetch(`/api/now/table/${T.match}/${matchId}`, {
            method: 'PATCH',
            headers: this.headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ status }),
        })
        if (!res.ok) throw new Error(`Erro ao atualizar status (${res.status})`)
    }
}
