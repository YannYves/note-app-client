export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-ydu-uploads",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://6cmos7r2ni.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_fy1C0stYt",
    APP_CLIENT_ID: "63vu9jqgk3g4ur19s1il1lcvtf",
    IDENTITY_POOL_ID: "eu-central-1:ff293050-fb2e-4559-b60c-c09be996d2ab",
  },
};
