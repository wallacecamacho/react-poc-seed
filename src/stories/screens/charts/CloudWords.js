import React from 'react';
import {core as Core} from 'zingchart-react';
import ReactDOM from 'react-dom';

export default class CloudWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clouds: [] };
  }

    componentDidMount() {

    }

    componentWillMount() {
      this.setState({clouds: this.props.dados });
    }

    render () {
      return (
      <div id="work-collections">
        <div className="col s12 m12 l6">
          <div className="row">
                      {this.renderChart()}
          </div>
        </div>
      </div>
      );
    }

    renderChart() {

          if (this.state.clouds) {

          let comp = this.state.clouds.map((enquete,index) => {

          let configCloudWords = {
            type: 'wordcloud',
            options: {
              text: enquete.texto,
              ignore: ['um','uma', 'uns', 'uma', 'o', 'a', 'os', 'as', 'de', 'da', 'do', 'em', 'mas', 'mais', 'para', 'por', 'na', 'no', 'nos', 'nem', 'num', 'que', 'se', 'ate', 'pois', 'pelo', 'portanto', 'entanto', 'contudo', 'entretanto', 'ao', 'ou' ],
              style:{
                fontFamily: 'Crete Round',
            
                hoverState: {
                  backgroundColor: '#D32F2F',
                  borderRadius: 2,
                  fontColor: 'white'
                },
                tooltip:{
                  text: '%text: %hits',
                  visible: true,
                  
                  alpha: 0.9,
                  backgroundColor: '#1976D2',
                  borderRadius: 2,
                  borderColor: 'none',
                  fontColor: 'white',
                  fontFamily: 'Georgia',
                  textAlpha: 1
                }
              },
            },
          };

              return (
                <div className="col s12 m10 l6" key={enquete.id}>
                <h5 className="header">{enquete.pergunta}</h5>
                <div className={'pretty-wordclouds-container-table' + enquete.id} key={enquete.id}>
                <div className="card">
                    <Core id={'myChartCloudWord' + enquete.id}  data={configCloudWords} />
                </div>    
                </div>
                </div>
          );
        });
        return comp;
      }
    }

}

ReactDOM.render(<CloudWord />, document.getElementById('myChartCloudWord'));
