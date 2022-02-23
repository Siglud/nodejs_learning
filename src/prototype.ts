import * as func from "./tupleFunction"

declare global {
    interface Array<T> {
        zip<U>(list: U[]): [T, U][]
    }
}
    
Array.prototype.zip = function<T, U>(this: T[], list: U[]): [T, U][] {
    return this.map((v, k) => func.tuple(v, list[k]))
}
