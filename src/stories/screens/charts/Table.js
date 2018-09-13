import React from 'react';
import { Chart } from 'react-google-charts';

export default class Table extends React.Component {
  componentDidMount() {

	}

	componentWillMount() {
    this.setState({ tableDados : this.props.dados });
  }
  
  render () {
    return (
    <div id="work-collections">
      <div >
        <div className="row">
        { (this.state.tableDados) ? this.renderChart() : '' }
        </div>
      </div>
    </div>
    );
  }

  renderChart() {
    let comp = null;
    if(this.state.tableDados) {
     comp = this.props.tableDados.map((enquete) => {
      console.log(enquete);
        return (
          <div className="col s12 m12 l6" key={enquete.id}>
            <h5 className="header">{enquete.pergunta}</h5>
            <div className={'my-pretty-chart-container-table' + enquete.id} key={enquete.id}>
            <div className="card">
                <Chart
                  chartType="Table"
                  data={enquete.valoresAgrupados}
                  columns={[{"type":"string","label":"Qtd. Resposta"}]}
                  graph_id={"Table" + enquete.id}
                  width="100%"
                  height="100%"
                  legend_toggle
                />
            </div>
            </div>
          </div>
    );
  });
  }
  return comp;
  }
}
