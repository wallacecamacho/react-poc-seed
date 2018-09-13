import Environment from './env';

const config = {
  api: {
    enquetes: (() => `${Environment.API_BASE_URL_EXTERNAL}enquetes`)(),
    enquetesTotalizador: (param => `${Environment.API_BASE_URL_EXTERNAL}enquetes/totalizadorInicial`)(),
    enquetesTotalizadorParam: (param => {
      return `${Environment.API_BASE_URL_EXTERNAL}enquetes/totalizadorInicial/${param}`
    } ),
  },
};

export default config;
