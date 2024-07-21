import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "../server/build/swagger.json",
  output: "./src/api/openapi",
  client: "@hey-api/client-fetch",
});
