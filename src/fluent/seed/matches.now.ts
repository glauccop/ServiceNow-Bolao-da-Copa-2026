import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['m_1'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 1,
        stage: 'group',
        group: 'A',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_mex'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_rsa'),
        kickoff: '2026-06-11 20:00:00',
        status: 'finished',
        home_score: 2,
        away_score: 0,
        venue: 'Estadio Azteca, Cidade do México',
    },
})

Record({
    $id: Now.ID['m_2'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 2,
        stage: 'group',
        group: 'A',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_kor'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cze'),
        kickoff: '2026-06-12 16:00:00',
        status: 'finished',
        home_score: 2,
        away_score: 1,
        venue: 'BC Place, Vancouver',
    },
})

Record({
    $id: Now.ID['m_3'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 3,
        stage: 'group',
        group: 'A',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_mex'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_kor'),
        kickoff: '2026-06-17 20:00:00',
        status: 'finished',
        home_score: 1,
        away_score: 0,
        venue: 'Estadio Azteca, Cidade do México',
    },
})

Record({
    $id: Now.ID['m_4'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 4,
        stage: 'group',
        group: 'A',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cze'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_rsa'),
        kickoff: '2026-06-18 13:00:00',
        status: 'finished',
        home_score: 1,
        away_score: 1,
        venue: 'Estadio BBVA, Monterrey',
    },
})

Record({
    $id: Now.ID['m_5'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 5,
        stage: 'group',
        group: 'A',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_mex'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cze'),
        kickoff: '2026-06-24 14:00:00',
        status: 'open',
        venue: 'Estadio Akron, Guadalajara',
    },
})

Record({
    $id: Now.ID['m_6'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 6,
        stage: 'group',
        group: 'A',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_rsa'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_kor'),
        kickoff: '2026-06-24 14:00:00',
        status: 'open',
        venue: 'Estadio Azteca, Cidade do México',
    },
})

Record({
    $id: Now.ID['m_7'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 7,
        stage: 'group',
        group: 'B',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_can'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_bih'),
        kickoff: '2026-06-12 18:00:00',
        status: 'finished',
        home_score: 1,
        away_score: 1,
        venue: 'BMO Field, Toronto',
    },
})

Record({
    $id: Now.ID['m_8'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 8,
        stage: 'group',
        group: 'B',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_sui'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_qat'),
        kickoff: '2026-06-13 13:00:00',
        status: 'finished',
        home_score: 1,
        away_score: 1,
        venue: 'BC Place, Vancouver',
    },
})

Record({
    $id: Now.ID['m_9'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 9,
        stage: 'group',
        group: 'B',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_sui'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_bih'),
        kickoff: '2026-06-18 16:00:00',
        status: 'finished',
        home_score: 4,
        away_score: 1,
        venue: 'BC Place, Vancouver',
    },
})

Record({
    $id: Now.ID['m_10'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 10,
        stage: 'group',
        group: 'B',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_can'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_qat'),
        kickoff: '2026-06-18 19:00:00',
        status: 'finished',
        home_score: 6,
        away_score: 0,
        venue: 'BMO Field, Toronto',
    },
})

Record({
    $id: Now.ID['m_11'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 11,
        stage: 'group',
        group: 'B',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_can'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_sui'),
        kickoff: '2026-06-24 18:00:00',
        status: 'open',
        venue: 'BMO Field, Toronto',
    },
})

Record({
    $id: Now.ID['m_12'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 12,
        stage: 'group',
        group: 'B',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_bih'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_qat'),
        kickoff: '2026-06-24 18:00:00',
        status: 'open',
        venue: 'BC Place, Vancouver',
    },
})

Record({
    $id: Now.ID['m_13'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 13,
        stage: 'group',
        group: 'C',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_bra'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_mar'),
        kickoff: '2026-06-13 18:00:00',
        status: 'open',
        venue: 'SoFi Stadium, Los Angeles',
    },
})

Record({
    $id: Now.ID['m_14'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 14,
        stage: 'group',
        group: 'C',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_sco'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_hai'),
        kickoff: '2026-06-13 21:00:00',
        status: 'open',
        venue: 'Mercedes-Benz Stadium, Atlanta',
    },
})

Record({
    $id: Now.ID['m_15'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 15,
        stage: 'group',
        group: 'C',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_bra'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_sco'),
        kickoff: '2026-06-19 18:00:00',
        status: 'open',
        venue: 'SoFi Stadium, Los Angeles',
    },
})

Record({
    $id: Now.ID['m_16'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 16,
        stage: 'group',
        group: 'C',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_mar'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_hai'),
        kickoff: '2026-06-19 21:00:00',
        status: 'open',
        venue: 'Levi\'s Stadium, São Francisco',
    },
})

Record({
    $id: Now.ID['m_17'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 17,
        stage: 'group',
        group: 'C',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_bra'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_hai'),
        kickoff: '2026-06-25 18:00:00',
        status: 'open',
        venue: 'SoFi Stadium, Los Angeles',
    },
})

Record({
    $id: Now.ID['m_18'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 18,
        stage: 'group',
        group: 'C',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_mar'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_sco'),
        kickoff: '2026-06-25 21:00:00',
        status: 'open',
        venue: 'Mercedes-Benz Stadium, Atlanta',
    },
})

Record({
    $id: Now.ID['m_19'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 19,
        stage: 'group',
        group: 'D',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_usa'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_aus'),
        kickoff: '2026-06-12 19:00:00',
        status: 'open',
        venue: 'SoFi Stadium, Los Angeles',
    },
})

Record({
    $id: Now.ID['m_20'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 20,
        stage: 'group',
        group: 'D',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_par'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_tur'),
        kickoff: '2026-06-13 16:00:00',
        status: 'open',
        venue: 'Hard Rock Stadium, Miami',
    },
})

Record({
    $id: Now.ID['m_21'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 21,
        stage: 'group',
        group: 'D',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_usa'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_par'),
        kickoff: '2026-06-19 19:00:00',
        status: 'open',
        venue: 'SoFi Stadium, Los Angeles',
    },
})

Record({
    $id: Now.ID['m_22'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 22,
        stage: 'group',
        group: 'D',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_aus'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_tur'),
        kickoff: '2026-06-19 16:00:00',
        status: 'open',
        venue: 'Lumen Field, Seattle',
    },
})

Record({
    $id: Now.ID['m_23'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 23,
        stage: 'group',
        group: 'D',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_usa'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_tur'),
        kickoff: '2026-06-25 19:00:00',
        status: 'open',
        venue: 'SoFi Stadium, Los Angeles',
    },
})

Record({
    $id: Now.ID['m_24'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 24,
        stage: 'group',
        group: 'D',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_aus'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_par'),
        kickoff: '2026-06-25 16:00:00',
        status: 'open',
        venue: 'Hard Rock Stadium, Miami',
    },
})

Record({
    $id: Now.ID['m_25'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 25,
        stage: 'group',
        group: 'E',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_ger'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cuw'),
        kickoff: '2026-06-14 16:00:00',
        status: 'finished',
        home_score: 7,
        away_score: 1,
        venue: 'MetLife Stadium, Nova York',
    },
})

Record({
    $id: Now.ID['m_26'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 26,
        stage: 'group',
        group: 'E',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_civ'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_ecu'),
        kickoff: '2026-06-14 13:00:00',
        status: 'finished',
        home_score: 1,
        away_score: 0,
        venue: 'Gillette Stadium, Boston',
    },
})

Record({
    $id: Now.ID['m_27'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 27,
        stage: 'group',
        group: 'E',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_ger'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_ecu'),
        kickoff: '2026-06-20 16:00:00',
        status: 'open',
        venue: 'MetLife Stadium, Nova York',
    },
})

Record({
    $id: Now.ID['m_28'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 28,
        stage: 'group',
        group: 'E',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_ecu'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cuw'),
        kickoff: '2026-06-20 19:00:00',
        status: 'open',
        venue: 'Gillette Stadium, Boston',
    },
})

Record({
    $id: Now.ID['m_29'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 29,
        stage: 'group',
        group: 'E',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_ger'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_civ'),
        kickoff: '2026-06-25 16:00:00',
        status: 'open',
        venue: 'MetLife Stadium, Nova York',
    },
})

Record({
    $id: Now.ID['m_30'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 30,
        stage: 'group',
        group: 'E',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_civ'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cuw'),
        kickoff: '2026-06-25 19:00:00',
        status: 'open',
        venue: 'Gillette Stadium, Boston',
    },
})

Record({
    $id: Now.ID['m_31'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 31,
        stage: 'group',
        group: 'F',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_ned'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_jpn'),
        kickoff: '2026-06-15 16:00:00',
        status: 'finished',
        home_score: 2,
        away_score: 2,
        venue: 'MetLife Stadium, Nova York',
    },
})

Record({
    $id: Now.ID['m_32'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 32,
        stage: 'group',
        group: 'F',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_swe'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_tun'),
        kickoff: '2026-06-15 13:00:00',
        status: 'finished',
        home_score: 5,
        away_score: 1,
        venue: 'Lincoln Financial Field, Filadélfia',
    },
})

Record({
    $id: Now.ID['m_33'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 33,
        stage: 'group',
        group: 'F',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_ned'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_swe'),
        kickoff: '2026-06-21 16:00:00',
        status: 'open',
        venue: 'MetLife Stadium, Nova York',
    },
})

Record({
    $id: Now.ID['m_34'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 34,
        stage: 'group',
        group: 'F',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_jpn'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_tun'),
        kickoff: '2026-06-21 13:00:00',
        status: 'open',
        venue: 'Lincoln Financial Field, Filadélfia',
    },
})

Record({
    $id: Now.ID['m_35'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 35,
        stage: 'group',
        group: 'F',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_ned'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_tun'),
        kickoff: '2026-06-26 16:00:00',
        status: 'open',
        venue: 'MetLife Stadium, Nova York',
    },
})

Record({
    $id: Now.ID['m_36'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 36,
        stage: 'group',
        group: 'F',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_jpn'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_swe'),
        kickoff: '2026-06-26 13:00:00',
        status: 'open',
        venue: 'Lincoln Financial Field, Filadélfia',
    },
})

Record({
    $id: Now.ID['m_37'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 37,
        stage: 'group',
        group: 'G',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_bel'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_egy'),
        kickoff: '2026-06-15 19:00:00',
        status: 'finished',
        home_score: 1,
        away_score: 1,
        venue: 'Arrowhead Stadium, Kansas City',
    },
})

Record({
    $id: Now.ID['m_38'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 38,
        stage: 'group',
        group: 'G',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_irn'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_nzl'),
        kickoff: '2026-06-15 22:00:00',
        status: 'finished',
        home_score: 2,
        away_score: 2,
        venue: 'Levi\'s Stadium, São Francisco',
    },
})

Record({
    $id: Now.ID['m_39'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 39,
        stage: 'group',
        group: 'G',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_bel'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_irn'),
        kickoff: '2026-06-21 19:00:00',
        status: 'open',
        venue: 'Arrowhead Stadium, Kansas City',
    },
})

Record({
    $id: Now.ID['m_40'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 40,
        stage: 'group',
        group: 'G',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_egy'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_nzl'),
        kickoff: '2026-06-21 22:00:00',
        status: 'open',
        venue: 'Levi\'s Stadium, São Francisco',
    },
})

Record({
    $id: Now.ID['m_41'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 41,
        stage: 'group',
        group: 'G',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_bel'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_nzl'),
        kickoff: '2026-06-26 19:00:00',
        status: 'open',
        venue: 'Arrowhead Stadium, Kansas City',
    },
})

Record({
    $id: Now.ID['m_42'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 42,
        stage: 'group',
        group: 'G',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_egy'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_irn'),
        kickoff: '2026-06-26 22:00:00',
        status: 'open',
        venue: 'Levi\'s Stadium, São Francisco',
    },
})

Record({
    $id: Now.ID['m_43'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 43,
        stage: 'group',
        group: 'H',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_esp'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cpv'),
        kickoff: '2026-06-14 19:00:00',
        status: 'finished',
        home_score: 0,
        away_score: 0,
        venue: 'AT&T Stadium, Dallas',
    },
})

Record({
    $id: Now.ID['m_44'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 44,
        stage: 'group',
        group: 'H',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_ksa'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_uru'),
        kickoff: '2026-06-14 22:00:00',
        status: 'finished',
        home_score: 1,
        away_score: 1,
        venue: 'NRG Stadium, Houston',
    },
})

Record({
    $id: Now.ID['m_45'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 45,
        stage: 'group',
        group: 'H',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_esp'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_uru'),
        kickoff: '2026-06-20 22:00:00',
        status: 'open',
        venue: 'AT&T Stadium, Dallas',
    },
})

Record({
    $id: Now.ID['m_46'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 46,
        stage: 'group',
        group: 'H',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cpv'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_ksa'),
        kickoff: '2026-06-20 19:00:00',
        status: 'open',
        venue: 'NRG Stadium, Houston',
    },
})

Record({
    $id: Now.ID['m_47'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 47,
        stage: 'group',
        group: 'H',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_esp'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_ksa'),
        kickoff: '2026-06-25 22:00:00',
        status: 'open',
        venue: 'AT&T Stadium, Dallas',
    },
})

Record({
    $id: Now.ID['m_48'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 48,
        stage: 'group',
        group: 'H',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cpv'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_uru'),
        kickoff: '2026-06-25 19:00:00',
        status: 'open',
        venue: 'NRG Stadium, Houston',
    },
})

Record({
    $id: Now.ID['m_49'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 49,
        stage: 'group',
        group: 'I',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_fra'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_sen'),
        kickoff: '2026-06-16 16:00:00',
        status: 'finished',
        home_score: 3,
        away_score: 1,
        venue: 'Mercedes-Benz Stadium, Atlanta',
    },
})

Record({
    $id: Now.ID['m_50'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 50,
        stage: 'group',
        group: 'I',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_nor'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_irq'),
        kickoff: '2026-06-16 13:00:00',
        status: 'finished',
        home_score: 4,
        away_score: 1,
        venue: 'Lumen Field, Seattle',
    },
})

Record({
    $id: Now.ID['m_51'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 51,
        stage: 'group',
        group: 'I',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_fra'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_nor'),
        kickoff: '2026-06-22 16:00:00',
        status: 'open',
        venue: 'Mercedes-Benz Stadium, Atlanta',
    },
})

Record({
    $id: Now.ID['m_52'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 52,
        stage: 'group',
        group: 'I',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_sen'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_irq'),
        kickoff: '2026-06-22 13:00:00',
        status: 'open',
        venue: 'Lumen Field, Seattle',
    },
})

Record({
    $id: Now.ID['m_53'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 53,
        stage: 'group',
        group: 'I',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_fra'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_irq'),
        kickoff: '2026-06-27 16:00:00',
        status: 'open',
        venue: 'Mercedes-Benz Stadium, Atlanta',
    },
})

Record({
    $id: Now.ID['m_54'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 54,
        stage: 'group',
        group: 'I',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_sen'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_nor'),
        kickoff: '2026-06-27 13:00:00',
        status: 'open',
        venue: 'Lumen Field, Seattle',
    },
})

Record({
    $id: Now.ID['m_55'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 55,
        stage: 'group',
        group: 'J',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_arg'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_alg'),
        kickoff: '2026-06-16 19:00:00',
        status: 'finished',
        home_score: 3,
        away_score: 0,
        venue: 'Hard Rock Stadium, Miami',
    },
})

Record({
    $id: Now.ID['m_56'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 56,
        stage: 'group',
        group: 'J',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_aut'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_jor'),
        kickoff: '2026-06-16 22:00:00',
        status: 'finished',
        home_score: 3,
        away_score: 1,
        venue: 'NRG Stadium, Houston',
    },
})

Record({
    $id: Now.ID['m_57'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 57,
        stage: 'group',
        group: 'J',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_arg'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_aut'),
        kickoff: '2026-06-22 19:00:00',
        status: 'open',
        venue: 'Hard Rock Stadium, Miami',
    },
})

Record({
    $id: Now.ID['m_58'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 58,
        stage: 'group',
        group: 'J',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_alg'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_jor'),
        kickoff: '2026-06-22 22:00:00',
        status: 'open',
        venue: 'NRG Stadium, Houston',
    },
})

Record({
    $id: Now.ID['m_59'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 59,
        stage: 'group',
        group: 'J',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_arg'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_jor'),
        kickoff: '2026-06-27 19:00:00',
        status: 'open',
        venue: 'Hard Rock Stadium, Miami',
    },
})

Record({
    $id: Now.ID['m_60'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 60,
        stage: 'group',
        group: 'J',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_alg'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_aut'),
        kickoff: '2026-06-27 22:00:00',
        status: 'open',
        venue: 'NRG Stadium, Houston',
    },
})

Record({
    $id: Now.ID['m_61'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 61,
        stage: 'group',
        group: 'K',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_por'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cod'),
        kickoff: '2026-06-17 16:00:00',
        status: 'finished',
        home_score: 1,
        away_score: 1,
        venue: 'MetLife Stadium, Nova York',
    },
})

Record({
    $id: Now.ID['m_62'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 62,
        stage: 'group',
        group: 'K',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_col'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_uzb'),
        kickoff: '2026-06-17 13:00:00',
        status: 'finished',
        home_score: 3,
        away_score: 1,
        venue: 'AT&T Stadium, Dallas',
    },
})

Record({
    $id: Now.ID['m_63'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 63,
        stage: 'group',
        group: 'K',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_por'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_col'),
        kickoff: '2026-06-23 16:00:00',
        status: 'open',
        venue: 'MetLife Stadium, Nova York',
    },
})

Record({
    $id: Now.ID['m_64'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 64,
        stage: 'group',
        group: 'K',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cod'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_uzb'),
        kickoff: '2026-06-23 13:00:00',
        status: 'open',
        venue: 'AT&T Stadium, Dallas',
    },
})

Record({
    $id: Now.ID['m_65'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 65,
        stage: 'group',
        group: 'K',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_por'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_uzb'),
        kickoff: '2026-06-28 16:00:00',
        status: 'open',
        venue: 'MetLife Stadium, Nova York',
    },
})

Record({
    $id: Now.ID['m_66'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 66,
        stage: 'group',
        group: 'K',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cod'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_col'),
        kickoff: '2026-06-28 13:00:00',
        status: 'open',
        venue: 'AT&T Stadium, Dallas',
    },
})

Record({
    $id: Now.ID['m_67'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 67,
        stage: 'group',
        group: 'L',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_eng'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cro'),
        kickoff: '2026-06-17 19:00:00',
        status: 'finished',
        home_score: 4,
        away_score: 2,
        venue: 'Gillette Stadium, Boston',
    },
})

Record({
    $id: Now.ID['m_68'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 68,
        stage: 'group',
        group: 'L',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_gha'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_pan'),
        kickoff: '2026-06-17 22:00:00',
        status: 'finished',
        home_score: 1,
        away_score: 0,
        venue: 'SoFi Stadium, Los Angeles',
    },
})

Record({
    $id: Now.ID['m_69'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 69,
        stage: 'group',
        group: 'L',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_eng'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_gha'),
        kickoff: '2026-06-23 19:00:00',
        status: 'open',
        venue: 'Gillette Stadium, Boston',
    },
})

Record({
    $id: Now.ID['m_70'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 70,
        stage: 'group',
        group: 'L',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cro'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_pan'),
        kickoff: '2026-06-23 22:00:00',
        status: 'open',
        venue: 'SoFi Stadium, Los Angeles',
    },
})

Record({
    $id: Now.ID['m_71'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 71,
        stage: 'group',
        group: 'L',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_eng'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_pan'),
        kickoff: '2026-06-28 19:00:00',
        status: 'open',
        venue: 'Gillette Stadium, Boston',
    },
})

Record({
    $id: Now.ID['m_72'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 72,
        stage: 'group',
        group: 'L',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cro'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_gha'),
        kickoff: '2026-06-28 22:00:00',
        status: 'open',
        venue: 'SoFi Stadium, Los Angeles',
    },
})

Record({
    $id: Now.ID['m_101'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 101,
        stage: 'r16',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_bra'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_mex'),
        kickoff: '2026-06-29 16:00:00',
        status: 'finished',
        home_score: 2,
        away_score: 1,
        venue: 'SoFi Stadium, Los Angeles',
    },
})

Record({
    $id: Now.ID['m_102'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 102,
        stage: 'r16',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_arg'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_usa'),
        kickoff: '2026-06-29 20:00:00',
        status: 'finished',
        home_score: 3,
        away_score: 0,
        venue: 'MetLife Stadium, Nova York',
    },
})

Record({
    $id: Now.ID['m_103'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 103,
        stage: 'r16',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_fra'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_jpn'),
        kickoff: '2026-06-30 16:00:00',
        status: 'open',
        venue: 'AT&T Stadium, Dallas',
    },
})

Record({
    $id: Now.ID['m_104'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 104,
        stage: 'r16',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_esp'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_uru'),
        kickoff: '2026-06-30 20:00:00',
        status: 'open',
        venue: 'Mercedes-Benz Stadium, Atlanta',
    },
})

Record({
    $id: Now.ID['m_105'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 105,
        stage: 'r16',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_ger'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_bel'),
        kickoff: '2026-07-01 16:00:00',
        status: 'finished',
        home_score: 2,
        away_score: 1,
        venue: 'Estadio Azteca, Cidade do México',
    },
})

Record({
    $id: Now.ID['m_106'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 106,
        stage: 'r16',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_por'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_ned'),
        kickoff: '2026-07-01 20:00:00',
        status: 'open',
        venue: 'Hard Rock Stadium, Miami',
    },
})

Record({
    $id: Now.ID['m_107'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 107,
        stage: 'r16',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_eng'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_cro'),
        kickoff: '2026-07-02 16:00:00',
        status: 'open',
        venue: 'BC Place, Vancouver',
    },
})

Record({
    $id: Now.ID['m_108'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 108,
        stage: 'r16',
        home_team: Now.ref('x_snc_bolao_da_cop_team', 'team_sui'),
        away_team: Now.ref('x_snc_bolao_da_cop_team', 'team_col'),
        kickoff: '2026-07-02 20:00:00',
        status: 'open',
        venue: 'Lumen Field, Seattle',
    },
})

Record({
    $id: Now.ID['m_201'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 201,
        stage: 'qf',
        kickoff: '2026-07-04 16:00:00',
        status: 'open',
        venue: 'SoFi Stadium, Los Angeles',
    },
})

Record({
    $id: Now.ID['m_202'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 202,
        stage: 'qf',
        kickoff: '2026-07-04 20:00:00',
        status: 'open',
        venue: 'AT&T Stadium, Dallas',
    },
})

Record({
    $id: Now.ID['m_203'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 203,
        stage: 'qf',
        kickoff: '2026-07-05 16:00:00',
        status: 'open',
        venue: 'MetLife Stadium, Nova York',
    },
})

Record({
    $id: Now.ID['m_204'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 204,
        stage: 'qf',
        kickoff: '2026-07-05 20:00:00',
        status: 'open',
        venue: 'Mercedes-Benz Stadium, Atlanta',
    },
})

Record({
    $id: Now.ID['m_301'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 301,
        stage: 'sf',
        kickoff: '2026-07-14 20:00:00',
        status: 'open',
        venue: 'AT&T Stadium, Dallas',
    },
})

Record({
    $id: Now.ID['m_302'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 302,
        stage: 'sf',
        kickoff: '2026-07-15 20:00:00',
        status: 'open',
        venue: 'Mercedes-Benz Stadium, Atlanta',
    },
})

Record({
    $id: Now.ID['m_401'],
    table: 'x_snc_bolao_da_cop_match',
    data: {
        match_no: 401,
        stage: 'final',
        kickoff: '2026-07-19 16:00:00',
        status: 'open',
        venue: 'MetLife Stadium, Nova York',
    },
})
