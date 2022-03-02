import { UserDefinedException } from './userDefinedException';

export function doWithException(input: number): number {
    if (input < 10) {
        throw new UserDefinedException('Error!', 'Input cannot less then 10');
    }
    return input - 10;
}