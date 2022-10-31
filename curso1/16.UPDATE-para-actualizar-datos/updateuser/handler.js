const AWS = require("aws-sdk")

let DBClientParams = {}

if (process.env.IS_OFFLINE) DBClientParams = {
accessKeyId: 'FALSE_ACCESS_KEY' ,
secretAccessKey: 'SECRET_ACCESS_KEY' ,
region: "local",
endpoint: 'http://localhost:8000',
}

const dynamoDB = new AWS.DynamoDB.DocumentClient(DBClientParams)

const updateUser = async (event, context) => {

    const userId = event.pathParameters.id
    const body = JSON.parse(event.body)
    
    const params = {
        TableName: 'user-crud-sls-app',
        Key: { pk: userId },
        UpdateExpression: 'set #name = :name',
        ExpressionAttributeNames: {'#name' : 'name'},
        ExpressionAttributeValues: {
            ':name': body.name
        },
        ReturnValues: 'ALL_NEW'
    }
    const result = await dynamoDB.update(params).promise()
    return {
        "statusCode": 200,
        "body": JSON.stringify(result.Attributes)
    }
}

module.exports = {
    updateUser
}