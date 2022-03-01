import * as fs from 'fs-extra'
import * as sinon from 'sinon'
import { expect } from 'chai'

describe('fs-extra_test', () => {
    describe('#stub', () => {
        sinon.stub(fs, 'pathExists').resolves(true)
        it('should exists', async () => {
            const it = await fs.pathExists('/no/exists')
            expect(it).to.equal(true)
        })
        it('should also exists', async () => {
            expect(await fs.pathExists('/no/exists')).to.equal(true)
        })
    })
})