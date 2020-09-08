const dev = {
  STRIPE_KEY:
    "pk_test_51HMGL9JUKotgqlXyhPIe0oLmwkxHmdLlggIoGjGFFgmXfLG0GhBFtDGDP5MJhWXwUAMPPfszBO6n14Gsss3HvmCB00ShUxs9QF",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-jlu7ydndy2j2",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://4966eddw76.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_mhApY0kKA",
    APP_CLIENT_ID: "135k32dqvo7bor9fqlo0rnvbam",
    IDENTITY_POOL_ID: "us-east-1:56c08572-3d36-47eb-8664-13955be0bd14",
  },
};

const prod = {
  STRIPE_KEY:
    "pk_test_51HMGL9JUKotgqlXyhPIe0oLmwkxHmdLlggIoGjGFFgmXfLG0GhBFtDGDP5MJhWXwUAMPPfszBO6n14Gsss3HvmCB00ShUxs9QF",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-10cx9zhwp5f47",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://rtkwqg8bv3.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_sG9ia26Wv",
    APP_CLIENT_ID: "1niagok9lo5viu9ssg932fmu35",
    IDENTITY_POOL_ID: "us-east-1:fbfb1765-196b-439d-9a14-48e387ee1437",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
