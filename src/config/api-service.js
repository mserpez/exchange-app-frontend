import { Api, makeRequest } from '@yuniku/make-request';

const environment = (process.env.REACT_APP_ENV) ? process.env.REACT_APP_ENV : process.env.NODE_ENV;
const keyByEnv = {
  development: 'LOCAL',
  dev: 'DEV',
  demo: 'STAGE',
  production: 'PROD',
};
const envKey = keyByEnv[environment] || 'LOCAL';
const BASE_URL = process.env[`REACT_APP_${envKey}_API_URL`];
const PORT = process.env[`REACT_APP_${envKey}_API_PORT`];

const apiBaseUrl = (PORT) ? `${BASE_URL}:${PORT}/api/v1` : `${BASE_URL}/api`;
const authBaseUrl = (PORT) ? `${BASE_URL}:${PORT}` : `${BASE_URL}`;
const loginHeaders = {
  'Content-Type': 'application/json',
  Authorization: 'Basic YWRtaW46S01xNV5TdzpybXtmNmhASg',
};
const apiHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export const loginService = new Api(authBaseUrl, { timeout: 30000, headers: loginHeaders });
export const apiService = new Api(apiBaseUrl, { timeout: 30000, headers: apiHeaders });
