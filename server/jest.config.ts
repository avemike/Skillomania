import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.controller.ts",
    "src/**/*.service.ts",
    // "src/**/*.repository.ts",
  ],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "ts"],
  modulePathIgnorePatterns: ["<rootDir>/src/test-helpers/", "<rootDir>/build/"],
  setupFiles: ["./src/test-helpers/setupTests.test.ts"],
};

export default config;
