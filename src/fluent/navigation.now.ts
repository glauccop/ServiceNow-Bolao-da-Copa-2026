import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'

const PLAYER = 'x_snc_bolao_da_cop.player'
const ADMIN = 'x_snc_bolao_da_cop.admin'

/** Menu de aplicação — só aparece para quem tem a role player (admin a contém). */
const menu = ApplicationMenu({
    $id: Now.ID['menu_bolao'],
    title: 'Bolão da Copa 2026',
    description: 'Portal e administração do bolão da Copa do Mundo 2026.',
    hint: 'Bolão da Copa',
    active: true,
    order: 100,
    roles: [PLAYER],
})

/** Atalho para o portal (todos os participantes). */
Record({
    $id: Now.ID['mod_portal'],
    table: 'sys_app_module',
    data: {
        title: '🎮 Abrir o Bolão',
        application: menu,
        link_type: 'DIRECT',
        query: 'x_snc_bolao_da_cop_bolao.do',
        order: 100,
        active: true,
        roles: [PLAYER],
    },
})

/** Separador da área administrativa. */
Record({
    $id: Now.ID['mod_admin_sep'],
    table: 'sys_app_module',
    data: {
        title: 'Administração',
        application: menu,
        link_type: 'SEPARATOR',
        order: 200,
        active: true,
        roles: [ADMIN],
    },
})

/** Módulos de lista (gestão de registros) — apenas admin. */
Record({
    $id: Now.ID['mod_admin_match'],
    table: 'sys_app_module',
    data: { title: 'Jogos', application: menu, link_type: 'LIST', name: 'x_snc_bolao_da_cop_match', order: 210, active: true, roles: [ADMIN] },
})
Record({
    $id: Now.ID['mod_admin_team'],
    table: 'sys_app_module',
    data: { title: 'Seleções', application: menu, link_type: 'LIST', name: 'x_snc_bolao_da_cop_team', order: 220, active: true, roles: [ADMIN] },
})
Record({
    $id: Now.ID['mod_admin_bet'],
    table: 'sys_app_module',
    data: { title: 'Palpites', application: menu, link_type: 'LIST', name: 'x_snc_bolao_da_cop_bet', order: 230, active: true, roles: [ADMIN] },
})
Record({
    $id: Now.ID['mod_admin_wallet'],
    table: 'sys_app_module',
    data: { title: 'Carteiras', application: menu, link_type: 'LIST', name: 'x_snc_bolao_da_cop_wallet', order: 240, active: true, roles: [ADMIN] },
})
Record({
    $id: Now.ID['mod_admin_ach'],
    table: 'sys_app_module',
    data: { title: 'Conquistas', application: menu, link_type: 'LIST', name: 'x_snc_bolao_da_cop_achievement', order: 250, active: true, roles: [ADMIN] },
})
Record({
    $id: Now.ID['mod_admin_badge'],
    table: 'sys_app_module',
    data: { title: 'Conquistas dos usuários', application: menu, link_type: 'LIST', name: 'x_snc_bolao_da_cop_user_badge', order: 260, active: true, roles: [ADMIN] },
})
