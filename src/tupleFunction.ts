export function tuple<T extends unknown[]>(...ts: T) {
    return ts;
}

// a will be tuple and with defined type
let a = tuple(1, true)

function isString(it: unknown): it is string {
    return typeof it === 'string'
}

export function parseInput(input: string | number) {
    let formatInput: string
    if (isString(input)) {
        formatInput = input.toUpperCase()
    }
}