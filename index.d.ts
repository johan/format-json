declare module 'format-json' {
    export function terse(obj: Record<string, any>): string; // eslint-disable-line @typescript-eslint/no-explicit-any
    export function plain(obj: Record<string, any>, indentation?: number | string): string; // eslint-disable-line @typescript-eslint/no-explicit-any
    export function diffy(obj: Record<string, any>): string; // eslint-disable-line @typescript-eslint/no-explicit-any
    export function space(obj: Record<string, any>): string; // eslint-disable-line @typescript-eslint/no-explicit-any
    export function lines(obj: Record<string, any>): string; // eslint-disable-line @typescript-eslint/no-explicit-any
}
