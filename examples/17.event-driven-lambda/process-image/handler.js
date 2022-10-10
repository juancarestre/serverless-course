// This lambda takes an event n printed it to logs
// sns event send a message nforming about new images detected,
// we took it evalute the lambda againt it and generate severa images.

const AWS = require("aws-sdk")

const s3 = new AWS.S3({
    signatureVersion: 'v4',
})

const processImage = async (event, context) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'SQS event processed.',
            input: event,
        }),
    };

    console.log('event: ', JSON.stringify(event));
    var body = event.Records[0].body;
    console.log("text: ", JSON.parse(body).text);
    callback(null, response);

}

module.exports = {
    processImage
}