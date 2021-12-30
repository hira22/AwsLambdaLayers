# slack_notifier

Send message to Slack

- TypeScript (4.2.3)
- Node.js (14.16.0)

# Usage

1. Upload slack_notifier.zip file to Lambda Layer.
1. Create Lambda Function.
1. Add slack_notifier layer.

## Example Lambda Function

```js
const slackNotifier = require('slack_notifier');

exports.handler = async (event) => {
    return slackNotifier.notifySlack({Slack WebHook URL}, 'Hello from Lambda with Lambda Layer!');
};
```

# See also

- [Use Lambda Layers To Post To Slack](https://medium.com/@cplankey/use-lambda-layers-to-post-to-slack-513782db3d82)
- [AWS Lambda ( Typescript ) の Lambda Layers 活用、開発、デプロイ考察](https://dev.classmethod.jp/articles/aws-lambda-typescript-lambda-layers-deploy/)
