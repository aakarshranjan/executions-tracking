module.exports = {
    preset: "ts-jest",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testEnvironment: "jest-environment-jsdom",
    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.json",
        babelConfig: true,
      },
    },
    transform: { "^.+\\.(ts|tsx|js|jsx|mjs)$": ["ts-jest"] },
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "babel-jest",
    },
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    coverageDirectory: 'coverage',
  };