export default class Resources {

  fetchResposta(tipo: String, marca: String) {
    return (`https://fipeapi.appspot.com/api/1/${tipo}/veiculo/${marca}.json`);
  }

}
