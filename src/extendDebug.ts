
type ClassConstructor<T> = new(...args: any[]) => T

function withEzDebug<T extends ClassConstructor<{
    getDebugValue(): object
}>>(Class: T) {
    return class extends Class {
        constructor(...args: any[]) {
            super(...args)
        }
        debug() {
            const Name = Class.constructor.name
            const value = this.getDebugValue()
            return Name + '(' + JSON.stringify(value) + ')'
        }
    }
}