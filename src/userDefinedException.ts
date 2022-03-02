export class UserDefinedException extends Error {
    public name: string;

    constructor(name: string, msg: string) {
        super(msg)
        this.name = name;
        this.message = msg;
    }
}