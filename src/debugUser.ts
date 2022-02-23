export class HardToDebugUser {
    constructor(
        private id: number,
        private firstName: string,
        private lastName: string
    ) {}
    getDebugValue() {
        return {
            id: this.id,
            name: this.firstName + ' ' + this.lastName
        }
    }
}

const User = withEzDebug(HardToDebugUser)
const user = new User(3, 'Emma', 'Gluzman')
user.debug()