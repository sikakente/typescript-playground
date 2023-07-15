import * as fs from 'fs';

const loadFixture = (fixture: string) => {
  const fixtureJsonString = fs.readFileSync(`__test__/${fixture}`, 'utf-8');
  return JSON.parse(fixtureJsonString);
};

export default loadFixture;
