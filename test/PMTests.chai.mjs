import { expect } from 'chai'
import {
    is,
    did,
    does,
    have,
    has,
    counter,
    getCounter,
    checkStatus,
    checkSchema,
    stringLongerThan,
    checkString
} from '../PMTests.mjs'
import {
    throwError,
    valueMatch,
    objectsMatch,
    throwsError,
    constructorThrowsError
} from './ChaiTests/Chai.mjs'


describe('PMTests.mjs', () => {
    const count = counter + 1
    describe('counter', () => {
        it(`${getCounter()} counter is 1`, () => {
            expect(count).to.eql(1)
        })

        const counterStr = getCounter()
        it(`${counterStr} getCounter() is 'Test 2 -'`, () => {
            expect(counterStr).to.eql('Test 2 -')
        })
    })
    
    describe('description functions', () => {
        valueMatch(is(true), 'is')
        valueMatch(is(false), 'is NOT')
        valueMatch(did(true), 'did')
        valueMatch(did(false), 'did NOT')
        valueMatch(does(true), 'does')
        valueMatch(does(false), 'does NOT')
        valueMatch(have(true), 'have')
        valueMatch(have(false), 'NOT have')
        valueMatch(has(true), 'has')
        valueMatch(has(false), 'does NOT have')
    })

    describe('Check Status', () => {
        checkStatus(200)
    })
})
