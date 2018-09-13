//const env = process.env.NODE_ENV;
const env = 'development';

var apiBaseUrl;
switch (env) {
  case 'development':
    apiBaseUrl = 'http://localhost:3001/enquete-dashboard-backend/';
    break;
  case 'testing':
    apiBaseUrl = 'http://dadhx03.interno:8095/api/';
    break;
  case 'integration':
    apiBaseUrl = 'http://dadhx03.interno:8095/api/';
    break;
  case 'staging':
    apiBaseUrl = 'http://dighx11.interno:8095/api/';
    apiBaseUrl = '/api/';
    break;
  case 'production':
  default:
    apiBaseUrl = 'http://www.oi.com.br/minha-oi/codigodebarras/api/';
    break;
}

const config = {
  API_BASE_URL_EXTERNAL: process.env.API_BASE_URL_EXTERNAL || apiBaseUrl,
};

export default config;
