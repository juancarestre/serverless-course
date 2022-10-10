const AWS = require("aws-sdk")

const s3 = new AWS.S3({
    signatureVersion: 'v4',
})

const uploadUser = async (event, context) => {
}

module.exports = {
    uploadUser
}