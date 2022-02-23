type WeekDay = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = WeekDay | 'Sat' | 'Sun'

let nextDay: Record<WeekDay, Day> = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat'
}

let fullDay: {[K in WeekDay]: Day} = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat'
}

type Account = {
    id: number
    isEmployee: boolean
    notes: string[]
}

type OptionalAccount = {
    [K in keyof Account]?: Account[K]
}

type NullableAccount = {
    [K in keyof Account]: Account[K] | null
}

type ReadonlyAccount = {
    readonly [K in keyof Account]: Account[K]
}

type Account2 = {
    -readonly [K in keyof ReadonlyAccount]: ReadonlyAccount[K]
}

type Account3 = {
    [K in keyof OptionalAccount]-? : OptionalAccount[K]
}

type Currency = {
    unit: 'EUR' | 'GBP' | 'JPY' | 'USD'
    value: number
}