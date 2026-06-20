import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['u_0'],
    table: 'sys_user',
    data: {
        user_name: 'bolao.ana',
        first_name: 'Ana',
        last_name: 'Souza',
        name: 'Ana Souza',
    },
})

Record({
    $id: Now.ID['b_0_1'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_1'),
        pred_home: 2,
        pred_away: 0,
        stake: 150,
        payout: 750,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_0_2'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_2'),
        pred_home: 2,
        pred_away: 1,
        stake: 250,
        payout: 1250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_0_3'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_3'),
        pred_home: 2,
        pred_away: 0,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_4'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_4'),
        pred_home: 2,
        pred_away: 2,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_7'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_7'),
        pred_home: 1,
        pred_away: 1,
        stake: 250,
        payout: 1250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_0_8'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_8'),
        pred_home: 2,
        pred_away: 2,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_9'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_9'),
        pred_home: 5,
        pred_away: 1,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_10'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_10'),
        pred_home: 7,
        pred_away: 0,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_25'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_25'),
        pred_home: 7,
        pred_away: 1,
        stake: 50,
        payout: 250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_0_26'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_26'),
        pred_home: 2,
        pred_away: 0,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_31'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_31'),
        pred_home: 2,
        pred_away: 2,
        stake: 150,
        payout: 750,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_0_32'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_32'),
        pred_home: 6,
        pred_away: 1,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_37'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_37'),
        pred_home: 1,
        pred_away: 1,
        stake: 250,
        payout: 1250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_0_38'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_38'),
        pred_home: 3,
        pred_away: 3,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_43'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_43'),
        pred_home: 0,
        pred_away: 0,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_0_44'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_44'),
        pred_home: 2,
        pred_away: 2,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_49'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_49'),
        pred_home: 3,
        pred_away: 1,
        stake: 200,
        payout: 1000,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_0_50'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_50'),
        pred_home: 5,
        pred_away: 1,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_55'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_55'),
        pred_home: 4,
        pred_away: 0,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_56'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_56'),
        pred_home: 4,
        pred_away: 1,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_61'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_61'),
        pred_home: 2,
        pred_away: 2,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_62'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_62'),
        pred_home: 4,
        pred_away: 1,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_67'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_67'),
        pred_home: 5,
        pred_away: 2,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_68'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_68'),
        pred_home: 2,
        pred_away: 0,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_0_101'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_101'),
        pred_home: 2,
        pred_away: 1,
        stake: 150,
        payout: 750,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_0_102'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_102'),
        pred_home: 3,
        pred_away: 0,
        stake: 250,
        payout: 1250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_0_105'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_105'),
        pred_home: 1,
        pred_away: 3,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['w_0'],
    table: 'x_snc_bolao_da_cop_wallet',
    data: {
        user: Now.ref('sys_user', 'u_0'),
        balance: 10500,
    },
})

Record({
    $id: Now.ID['u_1'],
    table: 'sys_user',
    data: {
        user_name: 'bolao.bruno',
        first_name: 'Bruno',
        last_name: 'Lima',
        name: 'Bruno Lima',
    },
})

Record({
    $id: Now.ID['b_1_1'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_1'),
        pred_home: 3,
        pred_away: 0,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_1_2'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_2'),
        pred_home: 1,
        pred_away: 3,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_3'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_3'),
        pred_home: 0,
        pred_away: 2,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_4'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_4'),
        pred_home: 1,
        pred_away: 3,
        stake: 700,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_7'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_7'),
        pred_home: 2,
        pred_away: 2,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_1_8'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_8'),
        pred_home: 1,
        pred_away: 3,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_9'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_9'),
        pred_home: 1,
        pred_away: 3,
        stake: 250,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_10'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_10'),
        pred_home: 6,
        pred_away: 0,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_1_25'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_25'),
        pred_home: 8,
        pred_away: 1,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_1_26'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_26'),
        pred_home: 0,
        pred_away: 2,
        stake: 200,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_31'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_31'),
        pred_home: 3,
        pred_away: 3,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_1_32'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_32'),
        pred_home: 1,
        pred_away: 3,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_37'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_37'),
        pred_home: 2,
        pred_away: 2,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_1_38'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_38'),
        pred_home: 2,
        pred_away: 4,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_43'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_43'),
        pred_home: 1,
        pred_away: 1,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_1_44'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_44'),
        pred_home: 1,
        pred_away: 3,
        stake: 250,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_49'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_49'),
        pred_home: 4,
        pred_away: 1,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_1_50'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_50'),
        pred_home: 1,
        pred_away: 3,
        stake: 100,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_55'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_55'),
        pred_home: 0,
        pred_away: 2,
        stake: 100,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_56'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_56'),
        pred_home: 1,
        pred_away: 3,
        stake: 200,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_61'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_61'),
        pred_home: 1,
        pred_away: 3,
        stake: 200,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_62'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_62'),
        pred_home: 1,
        pred_away: 3,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_67'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_67'),
        pred_home: 2,
        pred_away: 4,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_68'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_68'),
        pred_home: 0,
        pred_away: 2,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_101'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_101'),
        pred_home: 3,
        pred_away: 1,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_1_102'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_102'),
        pred_home: 0,
        pred_away: 2,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_1_105'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_105'),
        pred_home: 2,
        pred_away: 1,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['w_1'],
    table: 'x_snc_bolao_da_cop_wallet',
    data: {
        user: Now.ref('sys_user', 'u_1'),
        balance: 150,
    },
})

Record({
    $id: Now.ID['u_2'],
    table: 'sys_user',
    data: {
        user_name: 'bolao.carla',
        first_name: 'Carla',
        last_name: 'Dias',
        name: 'Carla Dias',
    },
})

Record({
    $id: Now.ID['b_2_1'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_1'),
        pred_home: 3,
        pred_away: 0,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_2_2'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_2'),
        pred_home: 1,
        pred_away: 3,
        stake: 550,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_2_3'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_3'),
        pred_home: 1,
        pred_away: 0,
        stake: 200,
        payout: 1000,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_2_4'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_4'),
        pred_home: 1,
        pred_away: 1,
        stake: 50,
        payout: 250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_2_7'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_7'),
        pred_home: 1,
        pred_away: 3,
        stake: 100,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_2_8'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_8'),
        pred_home: 1,
        pred_away: 3,
        stake: 650,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_2_9'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_9'),
        pred_home: 4,
        pred_away: 1,
        stake: 50,
        payout: 250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_2_10'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_10'),
        pred_home: 6,
        pred_away: 0,
        stake: 150,
        payout: 750,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_2_25'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_25'),
        pred_home: 1,
        pred_away: 3,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_2_26'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_26'),
        pred_home: 1,
        pred_away: 0,
        stake: 250,
        payout: 1250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_2_31'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_31'),
        pred_home: 2,
        pred_away: 4,
        stake: 250,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_2_32'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_32'),
        pred_home: 5,
        pred_away: 1,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_2_37'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_37'),
        pred_home: 1,
        pred_away: 3,
        stake: 550,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_2_38'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_38'),
        pred_home: 2,
        pred_away: 2,
        stake: 200,
        payout: 1000,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_2_43'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_43'),
        pred_home: 0,
        pred_away: 2,
        stake: 650,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_2_44'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_44'),
        pred_home: 1,
        pred_away: 1,
        stake: 50,
        payout: 250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_2_49'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_49'),
        pred_home: 1,
        pred_away: 3,
        stake: 500,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_2_50'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_50'),
        pred_home: 4,
        pred_away: 1,
        stake: 150,
        payout: 750,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_2_55'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_55'),
        pred_home: 0,
        pred_away: 2,
        stake: 600,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_2_56'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_56'),
        pred_home: 3,
        pred_away: 1,
        stake: 250,
        payout: 1250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_2_61'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_61'),
        pred_home: 1,
        pred_away: 3,
        stake: 700,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_2_62'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_62'),
        pred_home: 3,
        pred_away: 1,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_2_67'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_67'),
        pred_home: 4,
        pred_away: 2,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_2_68'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_68'),
        pred_home: 1,
        pred_away: 0,
        stake: 200,
        payout: 1000,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_2_101'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_101'),
        pred_home: 3,
        pred_away: 1,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_2_102'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_102'),
        pred_home: 0,
        pred_away: 2,
        stake: 550,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_2_105'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_105'),
        pred_home: 3,
        pred_away: 1,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['w_2'],
    table: 'x_snc_bolao_da_cop_wallet',
    data: {
        user: Now.ref('sys_user', 'u_2'),
        balance: 3800,
    },
})

Record({
    $id: Now.ID['u_3'],
    table: 'sys_user',
    data: {
        user_name: 'bolao.diego',
        first_name: 'Diego',
        last_name: 'Alves',
        name: 'Diego Alves',
    },
})

Record({
    $id: Now.ID['b_3_1'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_1'),
        pred_home: 2,
        pred_away: 0,
        stake: 50,
        payout: 250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_3_2'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_2'),
        pred_home: 3,
        pred_away: 1,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_3'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_3'),
        pred_home: 2,
        pred_away: 0,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_4'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_4'),
        pred_home: 1,
        pred_away: 3,
        stake: 100,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_3_7'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_7'),
        pred_home: 1,
        pred_away: 1,
        stake: 150,
        payout: 750,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_3_8'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_8'),
        pred_home: 2,
        pred_away: 2,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_9'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_9'),
        pred_home: 5,
        pred_away: 1,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_10'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_10'),
        pred_home: 0,
        pred_away: 2,
        stake: 200,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_3_25'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_25'),
        pred_home: 8,
        pred_away: 1,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_26'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_26'),
        pred_home: 2,
        pred_away: 0,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_31'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_31'),
        pred_home: 3,
        pred_away: 3,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_32'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_32'),
        pred_home: 6,
        pred_away: 1,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_37'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_37'),
        pred_home: 2,
        pred_away: 2,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_38'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_38'),
        pred_home: 3,
        pred_away: 3,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_43'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_43'),
        pred_home: 1,
        pred_away: 1,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_44'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_44'),
        pred_home: 2,
        pred_away: 2,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_49'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_49'),
        pred_home: 4,
        pred_away: 1,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_50'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_50'),
        pred_home: 5,
        pred_away: 1,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_55'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_55'),
        pred_home: 4,
        pred_away: 0,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_56'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_56'),
        pred_home: 4,
        pred_away: 1,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_61'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_61'),
        pred_home: 2,
        pred_away: 2,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_62'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_62'),
        pred_home: 4,
        pred_away: 1,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_67'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_67'),
        pred_home: 5,
        pred_away: 2,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_68'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_68'),
        pred_home: 2,
        pred_away: 0,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_101'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_101'),
        pred_home: 2,
        pred_away: 1,
        stake: 50,
        payout: 250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_3_102'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_102'),
        pred_home: 4,
        pred_away: 0,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_3_105'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_105'),
        pred_home: 1,
        pred_away: 3,
        stake: 200,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['w_3'],
    table: 'x_snc_bolao_da_cop_wallet',
    data: {
        user: Now.ref('sys_user', 'u_3'),
        balance: 4750,
    },
})

Record({
    $id: Now.ID['u_4'],
    table: 'sys_user',
    data: {
        user_name: 'bolao.eduardo',
        first_name: 'Eduardo',
        last_name: 'Reis',
        name: 'Eduardo Reis',
    },
})

Record({
    $id: Now.ID['b_4_1'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_1'),
        pred_home: 3,
        pred_away: 0,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_2'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_2'),
        pred_home: 3,
        pred_away: 1,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_3'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_3'),
        pred_home: 0,
        pred_away: 2,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_4_4'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_4'),
        pred_home: 1,
        pred_away: 3,
        stake: 600,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_4_7'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_7'),
        pred_home: 2,
        pred_away: 2,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_8'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_8'),
        pred_home: 2,
        pred_away: 2,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_9'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_9'),
        pred_home: 1,
        pred_away: 3,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_4_10'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_10'),
        pred_home: 0,
        pred_away: 2,
        stake: 700,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_4_25'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_25'),
        pred_home: 8,
        pred_away: 1,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_26'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_26'),
        pred_home: 2,
        pred_away: 0,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_31'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_31'),
        pred_home: 3,
        pred_away: 3,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_32'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_32'),
        pred_home: 6,
        pred_away: 1,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_37'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_37'),
        pred_home: 2,
        pred_away: 2,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_38'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_38'),
        pred_home: 2,
        pred_away: 4,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_4_43'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_43'),
        pred_home: 1,
        pred_away: 1,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_44'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_44'),
        pred_home: 1,
        pred_away: 3,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_4_49'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_49'),
        pred_home: 4,
        pred_away: 1,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_50'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_50'),
        pred_home: 1,
        pred_away: 3,
        stake: 250,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_4_55'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_55'),
        pred_home: 4,
        pred_away: 0,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_56'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_56'),
        pred_home: 1,
        pred_away: 3,
        stake: 100,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_4_61'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_61'),
        pred_home: 2,
        pred_away: 2,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_62'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_62'),
        pred_home: 1,
        pred_away: 3,
        stake: 200,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_4_67'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_67'),
        pred_home: 5,
        pred_away: 2,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_68'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_68'),
        pred_home: 0,
        pred_away: 2,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_4_101'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_101'),
        pred_home: 3,
        pred_away: 1,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_102'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_102'),
        pred_home: 4,
        pred_away: 0,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_4_105'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_105'),
        pred_home: 2,
        pred_away: 1,
        stake: 250,
        payout: 1250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['w_4'],
    table: 'x_snc_bolao_da_cop_wallet',
    data: {
        user: Now.ref('sys_user', 'u_4'),
        balance: 2150,
    },
})

Record({
    $id: Now.ID['u_5'],
    table: 'sys_user',
    data: {
        user_name: 'bolao.fernanda',
        first_name: 'Fernanda',
        last_name: 'Melo',
        name: 'Fernanda Melo',
    },
})

Record({
    $id: Now.ID['b_5_1'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_1'),
        pred_home: 0,
        pred_away: 2,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_2'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_2'),
        pred_home: 1,
        pred_away: 3,
        stake: 250,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_3'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_3'),
        pred_home: 1,
        pred_away: 0,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_5_4'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_4'),
        pred_home: 2,
        pred_away: 2,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_5_7'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_7'),
        pred_home: 1,
        pred_away: 3,
        stake: 250,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_8'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_8'),
        pred_home: 1,
        pred_away: 3,
        stake: 550,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_9'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_9'),
        pred_home: 4,
        pred_away: 1,
        stake: 200,
        payout: 1000,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_5_10'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_10'),
        pred_home: 7,
        pred_away: 0,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_5_25'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_25'),
        pred_home: 1,
        pred_away: 3,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_26'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_26'),
        pred_home: 0,
        pred_away: 2,
        stake: 600,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_31'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_31'),
        pred_home: 2,
        pred_away: 4,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_32'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_32'),
        pred_home: 1,
        pred_away: 3,
        stake: 700,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_37'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_37'),
        pred_home: 1,
        pred_away: 3,
        stake: 250,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_38'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_38'),
        pred_home: 2,
        pred_away: 2,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_5_43'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_43'),
        pred_home: 0,
        pred_away: 2,
        stake: 100,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_44'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_44'),
        pred_home: 1,
        pred_away: 1,
        stake: 200,
        payout: 1000,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_5_49'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_49'),
        pred_home: 1,
        pred_away: 3,
        stake: 200,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_50'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_50'),
        pred_home: 4,
        pred_away: 1,
        stake: 50,
        payout: 250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_5_55'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_55'),
        pred_home: 0,
        pred_away: 2,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_56'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_56'),
        pred_home: 3,
        pred_away: 1,
        stake: 150,
        payout: 750,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_5_61'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_61'),
        pred_home: 1,
        pred_away: 3,
        stake: 600,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_62'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_62'),
        pred_home: 3,
        pred_away: 1,
        stake: 250,
        payout: 1250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_5_67'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_67'),
        pred_home: 2,
        pred_away: 4,
        stake: 700,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_68'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_68'),
        pred_home: 1,
        pred_away: 0,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_5_101'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_101'),
        pred_home: 1,
        pred_away: 3,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_102'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_102'),
        pred_home: 0,
        pred_away: 2,
        stake: 250,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_5_105'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_105'),
        pred_home: 3,
        pred_away: 1,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['w_5'],
    table: 'x_snc_bolao_da_cop_wallet',
    data: {
        user: Now.ref('sys_user', 'u_5'),
        balance: 900,
    },
})

Record({
    $id: Now.ID['u_6'],
    table: 'sys_user',
    data: {
        user_name: 'bolao.gustavo',
        first_name: 'Gustavo',
        last_name: 'Pinto',
        name: 'Gustavo Pinto',
    },
})

Record({
    $id: Now.ID['b_6_1'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_1'),
        pred_home: 2,
        pred_away: 0,
        stake: 200,
        payout: 1000,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_6_2'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_2'),
        pred_home: 3,
        pred_away: 1,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_3'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_3'),
        pred_home: 2,
        pred_away: 0,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_4'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_4'),
        pred_home: 1,
        pred_away: 3,
        stake: 250,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_6_7'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_7'),
        pred_home: 1,
        pred_away: 1,
        stake: 50,
        payout: 250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_6_8'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_8'),
        pred_home: 2,
        pred_away: 2,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_9'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_9'),
        pred_home: 5,
        pred_away: 1,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_10'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_10'),
        pred_home: 0,
        pred_away: 2,
        stake: 100,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_6_25'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_25'),
        pred_home: 8,
        pred_away: 1,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_26'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_26'),
        pred_home: 2,
        pred_away: 0,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_31'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_31'),
        pred_home: 3,
        pred_away: 3,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_32'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_32'),
        pred_home: 6,
        pred_away: 1,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_37'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_37'),
        pred_home: 2,
        pred_away: 2,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_38'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_38'),
        pred_home: 3,
        pred_away: 3,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_43'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_43'),
        pred_home: 1,
        pred_away: 1,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_44'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_44'),
        pred_home: 2,
        pred_away: 2,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_49'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_49'),
        pred_home: 4,
        pred_away: 1,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_50'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_50'),
        pred_home: 5,
        pred_away: 1,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_55'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_55'),
        pred_home: 4,
        pred_away: 0,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_56'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_56'),
        pred_home: 4,
        pred_away: 1,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_61'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_61'),
        pred_home: 2,
        pred_away: 2,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_62'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_62'),
        pred_home: 4,
        pred_away: 1,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_67'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_67'),
        pred_home: 5,
        pred_away: 2,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_68'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_68'),
        pred_home: 2,
        pred_away: 0,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_101'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_101'),
        pred_home: 2,
        pred_away: 1,
        stake: 200,
        payout: 1000,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_6_102'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_102'),
        pred_home: 4,
        pred_away: 0,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_6_105'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_105'),
        pred_home: 1,
        pred_away: 3,
        stake: 100,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['w_6'],
    table: 'x_snc_bolao_da_cop_wallet',
    data: {
        user: Now.ref('sys_user', 'u_6'),
        balance: 5250,
    },
})

Record({
    $id: Now.ID['u_7'],
    table: 'sys_user',
    data: {
        user_name: 'bolao.helena',
        first_name: 'Helena',
        last_name: 'Castro',
        name: 'Helena Castro',
    },
})

Record({
    $id: Now.ID['b_7_1'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_1'),
        pred_home: 2,
        pred_away: 0,
        stake: 250,
        payout: 1250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_7_2'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_2'),
        pred_home: 3,
        pred_away: 1,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_3'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_3'),
        pred_home: 2,
        pred_away: 0,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_4'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_4'),
        pred_home: 1,
        pred_away: 3,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_7_7'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_7'),
        pred_home: 1,
        pred_away: 1,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_7_8'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_8'),
        pred_home: 2,
        pred_away: 2,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_9'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_9'),
        pred_home: 5,
        pred_away: 1,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_10'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_10'),
        pred_home: 0,
        pred_away: 2,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_7_25'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_25'),
        pred_home: 8,
        pred_away: 1,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_26'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_26'),
        pred_home: 2,
        pred_away: 0,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_31'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_31'),
        pred_home: 3,
        pred_away: 3,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_32'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_32'),
        pred_home: 6,
        pred_away: 1,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_37'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_37'),
        pred_home: 2,
        pred_away: 2,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_38'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_38'),
        pred_home: 3,
        pred_away: 3,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_43'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_43'),
        pred_home: 1,
        pred_away: 1,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_44'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_44'),
        pred_home: 2,
        pred_away: 2,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_49'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_49'),
        pred_home: 4,
        pred_away: 1,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_50'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_50'),
        pred_home: 5,
        pred_away: 1,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_55'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_55'),
        pred_home: 4,
        pred_away: 0,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_56'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_56'),
        pred_home: 4,
        pred_away: 1,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_61'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_61'),
        pred_home: 2,
        pred_away: 2,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_62'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_62'),
        pred_home: 4,
        pred_away: 1,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_67'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_67'),
        pred_home: 5,
        pred_away: 2,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_68'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_68'),
        pred_home: 2,
        pred_away: 0,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_101'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_101'),
        pred_home: 2,
        pred_away: 1,
        stake: 250,
        payout: 1250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_7_102'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_102'),
        pred_home: 4,
        pred_away: 0,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_7_105'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_105'),
        pred_home: 2,
        pred_away: 1,
        stake: 150,
        payout: 750,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['w_7'],
    table: 'x_snc_bolao_da_cop_wallet',
    data: {
        user: Now.ref('sys_user', 'u_7'),
        balance: 7000,
    },
})

Record({
    $id: Now.ID['u_8'],
    table: 'sys_user',
    data: {
        user_name: 'bolao.igor',
        first_name: 'Igor',
        last_name: 'Nunes',
        name: 'Igor Nunes',
    },
})

Record({
    $id: Now.ID['b_8_1'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_1'),
        pred_home: 0,
        pred_away: 2,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_2'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_2'),
        pred_home: 1,
        pred_away: 3,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_3'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_3'),
        pred_home: 0,
        pred_away: 2,
        stake: 700,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_4'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_4'),
        pred_home: 1,
        pred_away: 1,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_8_7'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_7'),
        pred_home: 1,
        pred_away: 3,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_8'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_8'),
        pred_home: 1,
        pred_away: 3,
        stake: 250,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_9'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_9'),
        pred_home: 4,
        pred_away: 1,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_8_10'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_10'),
        pred_home: 6,
        pred_away: 0,
        stake: 200,
        payout: 1000,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_8_25'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_25'),
        pred_home: 1,
        pred_away: 3,
        stake: 200,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_26'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_26'),
        pred_home: 0,
        pred_away: 2,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_31'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_31'),
        pred_home: 2,
        pred_away: 4,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_32'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_32'),
        pred_home: 1,
        pred_away: 3,
        stake: 600,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_37'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_37'),
        pred_home: 1,
        pred_away: 3,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_38'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_38'),
        pred_home: 2,
        pred_away: 4,
        stake: 700,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_43'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_43'),
        pred_home: 0,
        pred_away: 2,
        stake: 250,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_44'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_44'),
        pred_home: 1,
        pred_away: 3,
        stake: 550,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_49'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_49'),
        pred_home: 1,
        pred_away: 3,
        stake: 100,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_50'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_50'),
        pred_home: 1,
        pred_away: 3,
        stake: 650,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_55'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_55'),
        pred_home: 0,
        pred_away: 2,
        stake: 200,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_56'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_56'),
        pred_home: 3,
        pred_away: 1,
        stake: 50,
        payout: 250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_8_61'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_61'),
        pred_home: 1,
        pred_away: 3,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_62'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_62'),
        pred_home: 3,
        pred_away: 1,
        stake: 150,
        payout: 750,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_8_67'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_67'),
        pred_home: 2,
        pred_away: 4,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_68'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_68'),
        pred_home: 1,
        pred_away: 0,
        stake: 250,
        payout: 1250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_8_101'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_101'),
        pred_home: 1,
        pred_away: 3,
        stake: 50,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_102'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_102'),
        pred_home: 0,
        pred_away: 2,
        stake: 150,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_8_105'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_105'),
        pred_home: 3,
        pred_away: 1,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['w_8'],
    table: 'x_snc_bolao_da_cop_wallet',
    data: {
        user: Now.ref('sys_user', 'u_8'),
        balance: 0,
    },
})

Record({
    $id: Now.ID['u_9'],
    table: 'sys_user',
    data: {
        user_name: 'bolao.juliana',
        first_name: 'Juliana',
        last_name: 'Rocha',
        name: 'Juliana Rocha',
    },
})

Record({
    $id: Now.ID['b_9_1'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_1'),
        pred_home: 0,
        pred_away: 2,
        stake: 550,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_9_2'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_2'),
        pred_home: 2,
        pred_away: 1,
        stake: 200,
        payout: 1000,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_3'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_3'),
        pred_home: 2,
        pred_away: 0,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_9_4'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_4'),
        pred_home: 2,
        pred_away: 2,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_9_7'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_7'),
        pred_home: 1,
        pred_away: 3,
        stake: 650,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_9_8'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_8'),
        pred_home: 1,
        pred_away: 1,
        stake: 50,
        payout: 250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_9'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_9'),
        pred_home: 5,
        pred_away: 1,
        stake: 150,
        payout: 300,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_9_10'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_10'),
        pred_home: 7,
        pred_away: 0,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_9_25'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_25'),
        pred_home: 7,
        pred_away: 1,
        stake: 250,
        payout: 1250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_26'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_26'),
        pred_home: 1,
        pred_away: 0,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_31'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_31'),
        pred_home: 2,
        pred_away: 2,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_32'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_32'),
        pred_home: 5,
        pred_away: 1,
        stake: 200,
        payout: 1000,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_37'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_37'),
        pred_home: 1,
        pred_away: 1,
        stake: 200,
        payout: 1000,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_38'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_38'),
        pred_home: 2,
        pred_away: 2,
        stake: 50,
        payout: 250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_43'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_43'),
        pred_home: 0,
        pred_away: 0,
        stake: 50,
        payout: 250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_44'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_44'),
        pred_home: 1,
        pred_away: 1,
        stake: 150,
        payout: 750,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_49'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_49'),
        pred_home: 3,
        pred_away: 1,
        stake: 150,
        payout: 750,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_50'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_50'),
        pred_home: 5,
        pred_away: 1,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_9_55'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_55'),
        pred_home: 3,
        pred_away: 0,
        stake: 250,
        payout: 1250,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_56'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_56'),
        pred_home: 4,
        pred_away: 1,
        stake: 100,
        payout: 200,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_9_61'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_61'),
        pred_home: 1,
        pred_away: 1,
        stake: 100,
        payout: 500,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_62'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_62'),
        pred_home: 4,
        pred_away: 1,
        stake: 200,
        payout: 400,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_9_67'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_67'),
        pred_home: 4,
        pred_away: 2,
        stake: 200,
        payout: 1000,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_68'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_68'),
        pred_home: 2,
        pred_away: 0,
        stake: 50,
        payout: 100,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['b_9_101'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_101'),
        pred_home: 1,
        pred_away: 3,
        stake: 550,
        payout: 0,
        result: 'wrong',
    },
})

Record({
    $id: Now.ID['b_9_102'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_102'),
        pred_home: 3,
        pred_away: 0,
        stake: 200,
        payout: 1000,
        result: 'exact',
    },
})

Record({
    $id: Now.ID['b_9_105'],
    table: 'x_snc_bolao_da_cop_bet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        match: Now.ref('x_snc_bolao_da_cop_match', 'm_105'),
        pred_home: 3,
        pred_away: 1,
        stake: 250,
        payout: 500,
        result: 'winner',
    },
})

Record({
    $id: Now.ID['w_9'],
    table: 'x_snc_bolao_da_cop_wallet',
    data: {
        user: Now.ref('sys_user', 'u_9'),
        balance: 9700,
    },
})
