// handles importing scss/css as modules
declare module '*.scss' {
    const content: string
    export default content
}

declare module '*.css' {
    const content: string
    export default content
}

// ServiceNow globals available on the BYOUI page
declare global {
    interface Window {
        /** Per-session security token required by the Table/REST APIs */
        g_ck?: string
        /** Current user sys_id, when exposed by the platform */
        NOW?: { user?: { id?: string; name?: string } }
    }
}

export {}
