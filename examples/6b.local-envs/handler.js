
const hello = async (event, context) => {
    return {
        "statusCode": 200,
        "body": JSON.stringify({ 'message': 'Hello world - serverless framework platzi course'})
    }
}

const bye = async (event, context) => {
    return {
        "statusCode": 200,
        "body": JSON.stringify({ 'message': 'Bye world - serverless framework platzi course'})
    }
}

module.exports = {
    hello, bye
}
