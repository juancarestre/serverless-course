
const hello = async (event, context) => {
    let datetime = Date()
    return {
        "statusCode": 200,
        "body": JSON.stringify({ 'message':`Hola mundo - bienvenidos al curso de serverless framework en aws ${datetime}`})
    }
}

module.exports = {
    hello
}
