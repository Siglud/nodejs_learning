import { expect } from 'chai'
import 'mocha'
import '../src/prototype'

describe('prototype', () => {
    describe('#zip', () => {
        const t = [1, 2, 3].zip(['a', 'b', 'c']);
        it('should zip together', () => {
            expect(t[0][0]).to.equal(1)
            expect(t[0][1]).to.equal('a')
        })        
    })
})
