import logger from 'npmlog';

import Sections from './sections';
import InputsExtractor from './inputs-extractor';

class Runner {
  static run({ event, callback }) {
    const requestPath = event.path;

    InputsExtractor.validate({ requestPath })
      .then(() => InputsExtractor.extractInputs({ requestPath }))
      .then(({ sectionId }) => Sections.getSectionById({ sectionId }))
      .then(({ body }) => {
        callback(null, {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
          statusCode: 200,
        });
      })
      .catch((err) => {
        logger.error(err);

        const body = {};

        callback(null, {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
          statusCode: 200,
        });
      });
  }
}

export default Runner;

// Example event object
// {
//     "resource": "/{proxy+}",
//     "path": "/one/two",
//     "httpMethod": "GET",
//     "headers": {
//         "Accept": "text/html,application/xhtml+xml,application/xml;
//                q=0.9,image/webp,image/apng,*/*;q=0.8",
//         "Accept-Encoding": "gzip, deflate, br",
//         "Accept-Language": "en-US,en;q=0.8,nb;q=0.6",
//         "CloudFront-Forwarded-Proto": "https",
//         "CloudFront-Is-Desktop-Viewer": "true",
//         "CloudFront-Is-Mobile-Viewer": "false",
//         "CloudFront-Is-SmartTV-Viewer": "false",
//         "CloudFront-Is-Tablet-Viewer": "false",
//         "CloudFront-Viewer-Country": "US",
//         "Host": "sections.fomments.com",
//         "upgrade-insecure-requests": "1",
//         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36
//          (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
//         "Via": "2.0 f32e4aea3683be99c4324204c29f5852.cloudfront.net (CloudFront)",
//         "X-Amz-Cf-Id": "h-ISFnhgyZgaPkV-7oA0OnKsYjpXONjwIm9QplGAAcqfURu_i8PqVA==",
//         "x-amzn-ssl-client-hello": "AQAAyAMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB
//            xKSsArwC/ALMAwzKnMqMATwBQAnACdAC8ANQAKAQAAg+rqAAD/AQABAAAAABoAGAAAFXNlY3Rpb25zLmZvbW
//            1lbnRzLmNvbQAXAAAAIwAAAA0AFAASBAMIBAQBBQMIBQUBCAYGAQIBAAUABQEAAAAAABIAAAAQAA4ADAJoM
//            ghodHRwLzEuMXVQAAAACwACAQAACgAKAAi6ugAdABcAGKqqAAEA",
//         "X-Amzn-Trace-Id": "Root=1-59bcbe67-1cd3780551823048160426b7",
//         "X-Forwarded-For": "76.227.226.127, 205.251.214.67",
//         "X-Forwarded-Port": "443",
//         "X-Forwarded-Proto": "https"
//     },
//     "queryStringParameters": null,
//     "pathParameters": {
//         "proxy": "one/two"
//     },
//     "stageVariables": {
//         "logLevel": "info",
//         "alias": "prod"
//     },
//     "requestContext": {
//         "path": "/one/two",
//         "accountId": "834835117621",
//         "resourceId": "265ues",
//         "stage": "prod",
//         "requestId": "971689ad-9aa4-11e7-95bf-fb9afb4e24ae",
//         "identity": {
//             "cognitoIdentityPoolId": null,
//             "accountId": null,
//             "cognitoIdentityId": null,
//             "caller": null,
//             "apiKey": "",
//             "sourceIp": "76.227.226.127",
//             "accessKey": null,
//             "cognitoAuthenticationType": null,
//             "cognitoAuthenticationProvider": null,
//             "userArn": null,
//             "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6)
//               AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
//             "user": null
//         },
//         "resourcePath": "/{proxy+}",
//         "httpMethod": "GET",
//         "apiId": "777djioq45"
//     },
//     "body": null,
//     "isBase64Encoded": false
// }
