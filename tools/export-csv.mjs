#!/usr/bin/env node
/**
 * Exporta data/worldcup.json para CSVs prontos para download/uso:
 *   - data/teams.csv
 *   - data/matches.csv
 *
 * Uso: node tools/export-csv.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const data = JSON.parse(readFileSync(join(ROOT, 'data', 'worldcup.json'), 'utf8'))

/** Escapa um campo CSV (aspas se contiver vírgula, aspas ou quebra de linha). */
function cell(v) {
    if (v == null) return ''
    const s = String(v)
    return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s
}
function toCsv(headers, rows) {
    const lines = [headers.join(',')]
    for (const r of rows) lines.push(r.map(cell).join(','))
    return lines.join('\n') + '\n'
}

const teamsCsv = toCsv(
    ['code', 'name', 'group', 'confederation', 'flag'],
    data.teams.map((t) => [t.code, t.name, t.group, t.confederation, t.flag]),
)

const matchesCsv = toCsv(
    ['match_no', 'stage', 'group', 'home', 'away', 'kickoff', 'status', 'home_score', 'away_score', 'venue'],
    data.matches.map((m) => [
        m.match_no, m.stage, m.group || '', m.home || '', m.away || '',
        m.kickoff, m.status,
        m.home_score == null ? '' : m.home_score,
        m.away_score == null ? '' : m.away_score,
        m.venue || '',
    ]),
)

writeFileSync(join(ROOT, 'data', 'teams.csv'), teamsCsv)
writeFileSync(join(ROOT, 'data', 'matches.csv'), matchesCsv)
console.log(`✓ data/teams.csv (${data.teams.length} seleções)`)
console.log(`✓ data/matches.csv (${data.matches.length} jogos)`)
