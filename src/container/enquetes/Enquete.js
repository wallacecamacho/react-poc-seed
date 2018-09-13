// @flow
import React from "react";
import { connect } from "react-redux";
import EnqueteComponents from "../../stories/screens/layer/EnqueteComponents";
import { fetchList } from "../enquetes/ActionEnquetes";

export class EnquetesContainer extends React.Component {

	componentDidMount() {
		//this.props.fetchList();
	}

	componentWillMount() {
		this.props.fetchList();
	}

	render() {
		return <EnqueteComponents enquetes={this.props.data}/>;
	}
}


function bindAction(dispatch) {
	return {
		fetchList: param => dispatch(fetchList()),
	};
}

const mapStateToProps = state => ({
	data: state.enquetesReducer.listEnquetes,
	isLoading: state.enquetesReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(EnquetesContainer);
