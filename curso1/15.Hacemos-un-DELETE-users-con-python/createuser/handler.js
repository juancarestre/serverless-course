const AWS = require("aws-sdk")
const { randomUUID } = require("crypto");

let DBClientParams = {}

if (process.env.IS_OFFLINE) DBClientParams = {
accessKeyId: 'FALSE_ACCESS_KEY' ,
secretAccessKey: 'SECRET_ACCESS_KEY' ,
region: "local",
endpoint: 'http://localhost:8000',
}

const dynamoDB = new AWS.DynamoDB.DocumentClient(DBClientParams)

const createUser = async (event, context) => {

    const id = randomUUID();
    let userBody = JSON.parse(event.body)
    userBody.pk = id
    const params = {
        TableName: 'user-crud-sls-app',
        Item: userBody 
    }
    console.log(params.Item)
    await dynamoDB.put(params).promise()
    return {
        "statusCode": 200,
        "body": JSON.stringify(params.Item)
    }
}

module.exports = {
    createUser
}