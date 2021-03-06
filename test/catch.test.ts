import 'chai'
import 'mocha'
import '../src/funcWithException'
import { doWithException } from '../src/funcWithException'

describe('checkThrow', () => {
    describe('throwOrNot', () => {
        it('catchWithBase', () => {
            try {
                const res = doWithException(5)
                console.log(res)
            } catch(e) {
                if (e instanceof Error) {
                    console.log(e.message);
                }
            }
        })
    })

    describe('checkNull', () => {
        it('should null', () => {
            type E = {
                node?: string
            }
            let x: E = {}
            console.log(x?.node);
        });
    })
})