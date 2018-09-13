import config from '../../scripts/settings/index'

export default class Resources {

  fetchEnquete(tipo: Object) {
    return (config.api.enquetes);
  }

  fetchEnqueteTotalizador(tipo) {
    return (config.api.enquetesTotalizador);
  }

  fetchEnqueteTotalizadorParam(tipo) {
    console.log(tipo);
    return (config.api.enquetesTotalizadorParam(tipo));
  }

}
