import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

const RECAPTCHA_SCORE_THRESHOLD = 0.5;

let client: RecaptchaEnterpriseServiceClient | undefined;

function getClient() {
  if (client) return client;

  const credentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  client = new RecaptchaEnterpriseServiceClient(
    credentialsJson ? { credentials: JSON.parse(credentialsJson) } : undefined
  );
  return client;
}

type RecaptchaVerification = {
  success: boolean;
  score?: number;
  reason?: string;
};

export async function verifyRecaptchaToken(token: string, expectedAction: string): Promise<RecaptchaVerification> {
  const projectID = process.env.G_RECAPTCHA_PROJECT_ID;
  const recaptchaKey = process.env.NEXT_PUBLIC_G_RECAPTCHA_SITE_KEY;

  if (!projectID || !recaptchaKey) {
    return { success: false, reason: 'reCAPTCHA is not configured' };
  }

  const serviceClient = getClient();
  const projectPath = serviceClient.projectPath(projectID);

  const [response] = await serviceClient.createAssessment({
    assessment: {
      event: {
        token,
        siteKey: recaptchaKey,
      },
    },
    parent: projectPath,
  });

  if (!response.tokenProperties?.valid) {
    return { success: false, reason: String(response.tokenProperties?.invalidReason ?? 'Invalid token') };
  }

  if (response.tokenProperties.action !== expectedAction) {
    return { success: false, reason: 'Action mismatch' };
  }

  const score = response.riskAnalysis?.score ?? 0;

  if (score < RECAPTCHA_SCORE_THRESHOLD) {
    return { success: false, score, reason: 'Score too low' };
  }

  return { success: true, score };
}
