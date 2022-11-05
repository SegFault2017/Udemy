import * as cdk from "aws-cdk-lib";
import { CfnOutput, CfnParameter, Duration } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FirstCdkAppStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const duration = new CfnParameter(this, "duration", {
			type: "Number",
			default: 6,
			minValue: 1,
			maxValue: 10,
		});

		const bucket = new Bucket(this, "someBucket", {
			lifecycleRules: [
				{
					expiration: Duration.days(duration.valueAsNumber),
				},
			],
		});

		new CfnOutput(this, "mybucket", {
			value: bucket.bucketName,
		});

		// The code that defines your stack goes here

		// example resource
		// const queue = new sqs.Queue(this, 'FirstCdkAppQueue', {
		//   visibilityTimeout: cdk.Duration.seconds(300)
		// });
	}
}
