import type { Config } from 'jest';

const config: Config = {
  moduleNameMapper: {
    '@root/(.*)': '<rootDir>/src/$1',
  },
};

export default config;
