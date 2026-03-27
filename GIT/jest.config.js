export default {
  preset: "ts-jest/preset/default-esm",
  testEnvironment: "node",
  extentionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "⁽\\,{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
}