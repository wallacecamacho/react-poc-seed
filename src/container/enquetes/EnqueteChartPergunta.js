// @flow
import React from "react";
import { connect } from "react-redux";
import { fetchList } from "../enquetes/Action";
import PieChart from "../../stories/screens/charts/PieChart";
import Table from "../../stories/screens/charts/Table";
import Cloudwords from "../../stories/screens/charts/CloudWords";


export class EnqueteChartPergunta extends React.Component {

	constructor(props) {
		super();
		this.preloader = this.preloader.bind(this);
	}

	componentDidMount() {
		this.props.fetchList(this.props.enquete.enqueteId);
	}

	componentWillMount() {
		
	}

	preloader() {
		let val =  <div className="preloader-wrapper big active">
		<div className="spinner-layer spinner-blue-only">
		  <div className="circle-clipper left">
			<div className="circle"></div>
		  </div><div className="gap-patch">
			<div className="circle"></div>
		  </div><div className="circle-clipper right">
			<div className="circle"></div>
		  </div>
		</div>
	  </div>

	  return val;
	};

	render() {

		if(this.props.isLoading) {
			return this.preloader();
		}else {
			return (
				<div>
			<PieChart dados={this.props.dataTotais.donnut}/>
			<Table tableDados={this.props.dataTotais.word}/>
			<Cloudwords dados={this.props.dataTotais.clouds}/>
			
			</div>
			);
		}
	}
}


function bindAction(dispatch) {
	return {
		fetchList: param => dispatch(fetchList(param)),
	};
}

const mapStateToProps = state => ({
	data: state.enquetesReducer.listEnquetes,
	dataTotais: state.enquetesReducer.listEnquetesTotais,
	isLoading: state.enquetesReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(EnqueteChartPergunta);
