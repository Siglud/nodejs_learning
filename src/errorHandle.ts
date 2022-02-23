import { randomUUID } from "crypto"

function ask() {
    const r = randomUUID()
    if (r.endsWith('A')) {
        return []
    }
    return [r]
}

function parse(birthday: string): Date[] {
    const date = new Date(birthday)
    if (date == null) {
        return []
    }
    return [date]
}