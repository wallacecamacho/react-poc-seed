import React from 'react';
import { Chart } from 'react-google-charts';


export default class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enquete: {} };
  }

  componentDidMount() {

	}

	componentWillMount() {
    this.setState({ enquete : this.props.dados });
  }
  
  render () {
    return (
    <div id="chart-dashboard">
      <div id="card-widgets" className="seaction">
        <div className="row">
                    { (this.state.enquete) ? this.renderChart() : '' }
        </div>
      </div>
      <div className="divider"></div>
    </div>
    );
  }


  renderChart() {
    let comp = null;
    if(this.state.enquete) {
    comp = this.props.dados.map((enquete) => {
      console.log(enquete);
        return (
          <div className="col s12 m4 l4" key={enquete.id}>
                   
            <div className={'my-pretty-chart-container' + enquete.id} key={enquete.id}>
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
              <Chart
                chartType="PieChart"
                data={enquete.valoresAgrupados}
                options={{"title": enquete.pergunta ,"pieHole":0.4,"is3D":true}}
                graph_id={"PieChart" + enquete.id}
                width="100%"
                height="400px"
                legend_toggle
              />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{enquete.pergunta}<i className="material-icons right">more_vert</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Informações<i className="material-icons right">close</i></span>
                <p>...</p>
              </div>            
          </div>
          </div>
          </div>
    );
  });
  }
  return comp;
  }
}
