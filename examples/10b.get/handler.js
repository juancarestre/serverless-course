const AWS = require("aws-sdk")

const dynamoDB = new AWS.DynamoDB.DocumentClient({
    accessKeyId: 'YOUR-ACCESSKEYID' ,
    secretAccessKey: 'YOUR-SECRETACCESSKEY' ,
    region: "local",
    endpoint: 'http://localhost:8000',
  })

const getUser = async (event, context) => {
    const params = {
        TableName: 'user-crud-sls-app',
        KeyConditionExpression: 'pk = :pk',
        ExpressionAttributeValues: { ':pk': '1' }
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
