const REQUIRED_ENVS = [
  "SERVER_PORT",
  "DB_HOST",
  "DB_PORT",
  "DB_USERNAME",
  "DB_PASSWORD",
  "DB_DATABASE",
  "JWT_SECRET",
  "CLIENT_URL",
];

export function validateEnvs() {
  for (const env of REQUIRED_ENVS) {
    if (!process.env[env]) {
      throw new Error(`Missing required environment variable ${env}`);
    }
  }
}
