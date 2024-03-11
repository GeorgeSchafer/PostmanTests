let counter = 1

function is(bool){
    if(bool){return 'is'}
    else {return 'is not'}
}

function count(){
    counter++
}

function checkStatus(code){
    pm.test(`Test ${counter}: Status code is ${code}`, () => {
        pm.response.to.have.status(code)
    })
    count()
}

function checkSchema(subject, newSchema, checkAgainst, bool){
    pm.test(`Test ${counter}: ${subject} schema ${is(bool)} valid`, () => {
        const schema = newSchema
        bool
            ? pm.expect(checkAgainst).to.have.jsonSchema(schema)
            : pm.expect(checkAgainst).to.not.have.jsonSchema(schema)
    })
    count()
}

export { // export ony for testing
    is,
    count,
    checkStatus,
    checkSchema
}