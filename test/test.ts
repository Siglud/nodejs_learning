import { expect } from 'chai'
import 'mocha'
import * as utils from '../src/basic'

describe('basic', () => {
    describe('#generator', () => {
        const t = utils.createFibonacciGenerator()
        it('should return 1 when call first time', () => {
            expect(t.next().value).to.equal(0);
            expect(t.next().value).to.equal(1);
            expect(t.next().value).to.equal(1);
            expect(t.next().value).to.equal(2);
        })
    })

    describe('#readProperty', () => {
        const t = {'a': 1, 'b': 'x'}
        it('should read property', () => {
            expect(utils.get(t, 'a')).to.equal(1)
            expect(utils.get(t, 'b')).to.equal('x')
        })
    })

    describe('#if else', () => {
        let x: string | undefined;
        it('should be 0', () => {
            expect(x ?? '2').to.equal('2')
        });
    })
})