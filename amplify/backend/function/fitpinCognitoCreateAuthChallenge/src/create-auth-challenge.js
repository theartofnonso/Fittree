const AWS = require('aws-sdk');

const SES = new AWS.SES();

/**
 * Generate passwordless sign-in OTP and send to subscriber
 * @param {AWS Lambda Event} event
 */
exports.handler = async event => {
  let secretLoginCode;
  if (!event.request.session || !event.request.session.length) {
    // Generate a new secret login code and send it to the subscriber
    secretLoginCode = Date.now().toString().slice(-4);

    await SES.sendEmail({
      Destination: {ToAddresses: [event.request.userAttributes.email]},
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600&display=swap" rel="stylesheet">
  <style>
      body {
          display: flex;
          flex-direction: column;
          font-family: 'Exo 2', sans-serif;
      }
      .container {
          margin: auto;
          background: #f6f6f6;
          padding: 12px;
      }
      .hr {
          margin-top: 20px;
          width: 100%;
          border-color: #d9d9d9;
          border-style: solid;
          border-width: 1px;
      }

      .footer-text {
          font-size: 10px;
          color: #c4c4c4;
      }
  </style>
</head>
<body>
<div class="container">
  <p>Dear <b>${event.request.userAttributes.email.split('@')[0]}</b></p>
  <p>You have requested to verify your email for FitPin </p>
  <p>This is your secret login code: <b style="font-family: 'Exo 2', sans-serif">${secretLoginCode}</b></p>
</div>
<hr class="hr" />
<p class="footer-text">FitPin | Create or Exercise</p>

</body>
</html>
`,
          },
          Text: {
            Charset: 'UTF-8',
            Data: `Your secret login code: ${secretLoginCode}`,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `FitPin Verification Code: ${secretLoginCode}`,
        },
      },
      Source: 'FitPin Verify <admin@fitpin.app>',
    }).promise();
  } else {
    // re-use code generated in previous challenge
    const previousChallenge = event.request.session.slice(-1)[0];
    secretLoginCode =
      previousChallenge.challengeMetadata.match(/CODE-(\d*)/)[1];
  }

  // Add the secret login code to the private challenge parameters
  // so it can be verified by the "Verify Auth Challenge Response" trigger
  event.response.privateChallengeParameters = {secretLoginCode};

  // Add the secret login code to the session so it is available
  // in a next invocation of the "Create Auth Challenge" trigger
  event.response.challengeMetadata = `CODE-${secretLoginCode}`;

  return event;
};
