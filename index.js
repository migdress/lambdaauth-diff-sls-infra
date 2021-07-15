"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");

const env = pulumi.getStack()

const dynamodbUser = new aws.dynamodb.Table(`${env}-lambdaauthdiffsls-user`, {
    name: `${env}-lambdaauthdiffsls-user`,
    attributes: [
        {
            name: "email",
            type: "S",
        }
    ],
    hashKey: "email",
    readCapacity: 2,
    writeCapacity: 2,
    tags: {
        Environment: env
    }
})


module.exports = {
    dynamodb_user_name: dynamodbUser.name,
    dynamodb_user_arn: dynamodbUser.arn,
}

