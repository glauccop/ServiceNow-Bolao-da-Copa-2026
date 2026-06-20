import React from 'react'

/** FIFA 3-letter code → ISO 3166-1 alpha-2 (flagcdn) code. */
const CODE_TO_ISO: Record<string, string> = {
    MEX: 'mx', RSA: 'za', KOR: 'kr', CZE: 'cz',
    CAN: 'ca', BIH: 'ba', SUI: 'ch', QAT: 'qa',
    BRA: 'br', MAR: 'ma', SCO: 'gb-sct', HAI: 'ht',
    USA: 'us', AUS: 'au', PAR: 'py', TUR: 'tr',
    GER: 'de', ECU: 'ec', CIV: 'ci', CUW: 'cw',
    NED: 'nl', JPN: 'jp', TUN: 'tn', SWE: 'se',
    BEL: 'be', IRN: 'ir', EGY: 'eg', NZL: 'nz',
    ESP: 'es', URU: 'uy', KSA: 'sa', CPV: 'cv',
    FRA: 'fr', SEN: 'sn', NOR: 'no', IRQ: 'iq',
    ARG: 'ar', AUT: 'at', ALG: 'dz', JOR: 'jo',
    POR: 'pt', COL: 'co', UZB: 'uz', COD: 'cd',
    ENG: 'gb-eng', CRO: 'hr', PAN: 'pa', GHA: 'gh',
}

interface Props {
    code?: string
    size?: number
}

/**
 * Renders a country flag as an image (reliable cross-platform, unlike flag
 * emoji which don't render on Windows). Falls back to the 3-letter code.
 */
export default function Flag({ code, size = 40 }: Props) {
    const iso = code ? CODE_TO_ISO[code.toUpperCase()] : undefined
    if (!iso) {
        return <span className="flag-fallback" style={{ width: size }}>{code || '?'}</span>
    }
    const w = size <= 24 ? 40 : 80
    return (
        <img
            className="flag-img"
            src={`https://flagcdn.com/w${w}/${iso}.png`}
            srcSet={`https://flagcdn.com/w${w * 2}/${iso}.png 2x`}
            width={size}
            height={Math.round(size * 0.66)}
            alt={code}
            loading="lazy"
        />
    )
}
