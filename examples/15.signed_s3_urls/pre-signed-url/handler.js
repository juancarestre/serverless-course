const AWS = require("aws-sdk")

if (process.env.IS_OFFLINE){
    const credentials = new AWS.SharedIniFileCredentials({profile: 'juan'});
    AWS.config.credentials = credentials;
}

const s3 = new AWS.S3({
    signatureVersion: 'v4', // https://blog.shikisoft.com/signing-aws-s3-uploads-with-signature-v4-ruby-on-rails-angularjs/
  }) // https://aws.amazon.com/pt/premiumsupport/knowledge-center/presigned-url-s3-bucket-expiration/

const preSignedUrl = async (event, context) => {

    const filename = event.queryStringParameters.filename

    const signedUrl = await s3.getSignedUrlPromise("putObject", {
        Key: `upload/${filename}`,
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