const AWS = require("aws-sdk")

let DBClientParams = {}

if (process.env.IS_OFFLINE) DBClientParams = {
accessKeyId: 'FALSE_ACCESS_KEY' ,
secretAccessKey: 'SECRET_ACCESS_KEY' ,
region: "local",
endpoint: 'http://localhost:8000',
}

const dynamoDB = new AWS.DynamoDB.DocumentClient(DBClientParams)

const getUser = async (event, context) => {
    console.log(event)

    const userId = event.pathParameters.idx

    const params = {
        TableName: 'user-crud-sls-app',
        KeyConditionExpression: 'pk = :pk',
        ExpressionAttributeValues: { ':pk': userId }
    }
    const user = await dynamoDB.query(params).promise()
    return {
        "statusCode": 200,
        "body": JSON.stringify(user.Items)
    }
}

module.exports = {
    getUser
}