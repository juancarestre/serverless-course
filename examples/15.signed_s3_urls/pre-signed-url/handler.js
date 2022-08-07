const AWS = require("aws-sdk")

const s3 = new AWS.S3()

const preSignedUrl = async (event, context) => {
    

    const signedUrl = await s3.getSignedUrlPromise("putObject", {
        Key: 'image.jpg',
        Bucket: 'user-crud-sls-app-bucket-23213213',
        Expires: 300,
      });

    return {
        "statusCode": 200,
        "body": JSON.stringify({ signedUrl })
    }

}

module.exports = {
    preSignedUrl
}