export function sumVariadic(...args: number[]): number {
    return Array.from(args).reduce((total, n) => total + n, 0)
}

export function* createFibonacciGenerator(): IterableIterator<number> {
    let a = 0
    let b = 1
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}