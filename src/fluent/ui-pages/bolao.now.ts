import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import bolaoPage from '../../client/index.html'

UiPage({
    $id: Now.ID['bolao-page'],
    endpoint: 'x_snc_bolao_da_cop_bolao.do',
    description: 'Bolão da Copa 2026 - Portal do participante',
    category: 'general',
    html: bolaoPage,
    direct: true,
})
