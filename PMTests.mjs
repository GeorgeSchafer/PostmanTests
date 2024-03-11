import { expect } from 'chai'
const pm = {
    response: {
        to: { 
            have: {
                status: code => {
                    expect(code).to.eql(200)
                }
            }
        }
    },
    expect: (value) => { // not working
        expect(value)
    },
    test: (description, funct) => {return it(description, funct)}
}

let counter = 0

function getCounter(){
    counter++
    return `Test ${counter} -`
}

function is(bool){
    if(bool) {return 'is'}
    else {return 'is NOT'}
}

function did(bool=true){
    if(bool) {return 'did'}
    else {return 'did NOT'}
}

function does(bool=true){
    if(bool) {return 'does'}
    else {return 'does NOT'}
}

function have(bool){
    if(bool) {return 'have'}
    else {return 'NOT have'}
}

function has(bool){
    if(bool) {return 'has'}
    else {return 'does NOT have'}
}

function checkStatus(code){
    const description = `${getCounter()} Status code is ${code}`
    pm.test(description, () => {
        pm.response.to.have.status(code)
    })
}

function checkSchema(subject, newSchema, checkAgainst, bool){
    /** @todo write test */
    const description = `${getCounter()} ${subject} schema ${is(bool)} valid`
    pm.test(description, () => {
        const schema = newSchema
        bool
            ? pm.expect(checkAgainst).to.have.jsonSchema(schema)
            : pm.expect(checkAgainst).to.not.have.jsonSchema(schema)
    })
}

function stringLongerThan(string, alias, int){
    /** @todo write test */
    const description = `${getCounter()} ${alias} is longer than ${int} characters`
    pm.test(description, () => {
        const isGreaterThan = string.length > int
        pm.expect(isGreaterThan).to.eql.true;
    })
}

function checkString(subject, alias, target){
    /** @todo write test */
    const description = `${getCounter()}: ${alias} is ${target}`
    pm.test(description, () => {
        pm.expect(subject).to.eql(target);
    })
}

export { // export ony for testing
    counter,
    getCounter,
    is,
    did,
    does,
    have,
    has,
    checkStatus,
    checkSchema,
    stringLongerThan,
    checkString
}