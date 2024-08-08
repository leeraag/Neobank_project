export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { diagnostics: { ignoreCodes: ['TS151001'] } }],
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
    "^@/(.*)$": "<rootDir>/src/$1",
    'src/(.*)': '<rootDir>/src/$1',
    "@api/*": "<rootDir>/src/api/$1",
    "@assets/*": "<rootDir>/src/assets/$1",
    "@components/*": "<rootDir>/src/components/$1",
    "@constant/*": "<rootDir>/src/constant/$1",
    "@pages/*": "<rootDir>/src/pages/$1",
    "@router/*": "<rootDir>/src/router/$1",
    "@types/*": "<rootDir>/src/types/$1",
    "@utils/*": "<rootDir>/src/utils/$1",
    "@UI/*": "<rootDir>/src/components/UI/$1",
    "^swiper/react": "<rootDir>/node_modules/swiper/swiper-react.d.ts",
    "^swiper/modules": "<rootDir>/node_modules/swiper/types/modules/index.d.ts",
    "^swiper/scss": "<rootDir>/node_modules/swiper/swiper.scss",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: [
      "/node_modules/(?![swiper/react/swiper-react.js])",
      "/node_modules/(?![swiper/react/swiper.js])"
  ],
};