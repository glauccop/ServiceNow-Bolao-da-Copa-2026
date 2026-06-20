export interface Team {
    sys_id: string
    name: string
    code: string
    flag: string
    group: string
    confederation: string
}

export type MatchStatus = 'open' | 'closed' | 'finished'

export interface Match {
    sys_id: string
    match_no: number
    stage: string
    group: string
    home_team: string // team sys_id
    away_team: string // team sys_id
    home_team_name: string // reference display value (fallback when join misses)
    away_team_name: string
    kickoff: string
    kickoffDisplay: string
    status: MatchStatus
    home_score: number | null
    away_score: number | null
    venue: string
}

export type BetResult = 'pending' | 'exact' | 'winner' | 'wrong'

export interface Bet {
    sys_id: string
    user: string
    match: string // match sys_id
    pred_home: number
    pred_away: number
    stake: number
    payout: number
    result: BetResult
}

export interface CurrentUser {
    sys_id: string
    name: string
    isAdmin: boolean
}

export interface LeaderRow {
    user: string
    name: string
    balance: number
    exactHits: number
    winHits: number
    totalBets: number
    winRate: number
    badges: string[]
}

export interface Achievement {
    sys_id: string
    name: string
    description: string
    icon: string
    criteria_key: string
}

export interface UserBadge {
    user: string
    achievement: string // achievement sys_id
}
