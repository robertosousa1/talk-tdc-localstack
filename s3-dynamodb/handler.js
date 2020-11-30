const AWS = require("aws-sdk");
const uuid = require("uuid");
const faker = require("faker");
const fs = require("fs");
const { resolve } = require("path");

const host = process.env.LOCALSTACK_HOST || "localhost";
const s3port = process.env.S3_PORT || "4566";
const s3config = {
  s3ForcePathStyle: true,
  endpoint: new AWS.Endpoint(`http://${host}:${s3port}`),
};

const S3 = new AWS.S3(s3config);

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.saveLogo = async (event) => {
  const logoStream = fs.createReadStream(
    resolve(__dirname, "image", "tdc-logo.png")
  );

  const dataS3 = await S3.upload({
    Bucket: "users-image",
    Key: "tdc-logo.png",
    Body: logoStream,
  }).promise();

  await dynamoDB.put({
    TableName: "users",
    Item: {
      name: faker.name.findName(),
      Bucket: dataS3.Bucket,
      Key: dataS3.Key,
      id: uuid.v1(),
      createdAt: new Date().toISOString(),
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Operation successful',
    }),
  };
};
