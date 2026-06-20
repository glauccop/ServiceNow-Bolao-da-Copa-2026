#!/usr/bin/env node
/**
 * Gera SVGs placeholder em docs/screenshots/ para o README não ficar com
 * imagens quebradas. Substitua pelos PNGs reais do portal quando capturar.
 *
 * Uso: node tools/gen-placeholders.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIR = join(ROOT, 'docs', 'screenshots')
mkdirSync(DIR, { recursive: true })

const SHOTS = [
    { file: 'jogos', icon: '⚽', title: 'Jogos & Apostas' },
    { file: 'chaveamento', icon: '🗺️', title: 'Chaveamento' },
    { file: 'ranking', icon: '🏆', title: 'Ranking / Top Líderes' },
    { file: 'perfil', icon: '👤', title: 'Perfil & Conquistas' },
    { file: 'admin', icon: '⚙️', title: 'Painel Admin' },
]

for (const s of SHOTS) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="560" viewBox="0 0 1000 560">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a1424"/>
      <stop offset="1" stop-color="#07101d"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#2ee6d6"/>
      <stop offset="0.5" stop-color="#c8ff2e"/>
      <stop offset="1" stop-color="#ffd23f"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="560" fill="url(#bg)"/>
  <rect x="0" y="0" width="1000" height="6" fill="url(#accent)"/>
  <text x="500" y="250" font-family="Segoe UI, system-ui, sans-serif" font-size="120" text-anchor="middle">${s.icon}</text>
  <text x="500" y="330" font-family="Segoe UI, system-ui, sans-serif" font-size="34" font-weight="800" fill="#eaf2ef" text-anchor="middle">Bolão da Copa 2026 — ${s.title}</text>
  <text x="500" y="375" font-family="Segoe UI, system-ui, sans-serif" font-size="18" fill="#93a4b8" text-anchor="middle">screenshot placeholder — substitua por ${s.file}.png</text>
</svg>`
    writeFileSync(join(DIR, `${s.file}.svg`), svg)
    console.log(`✓ docs/screenshots/${s.file}.svg`)
}
