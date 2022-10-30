const AWS = require("aws-sdk")
const dynamoDB = new AWS.DynamoDB.DocumentClient()

const getUser = async (event, context) => {
    const params = {
        TableName: 'user-crud-sls-app',
        KeyConditionExpression: '#pk = :pk',
        ExpressionAttributeValues: { ':pk': '1' },
        ExpressionAttributeNames: { '#pk': 'pk' }
    }
    const user = await dynamoDB.query(params).promise()
    return {
        "statusCode": 200,
        "body": JSON.stringify(user)
    }
}

module.exports = {
    getUser
}
