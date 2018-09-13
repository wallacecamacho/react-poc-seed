// @flow
import * as React from "react";
import { connect } from "react-redux";
import HomeScreen from "../../stories/screens/home/HomeScreen";
import { fetchList } from "../respostas/Action";

export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}

export class RespostasContainer extends React.Component<Props, State> {

	componentDidMount() {
	}

	componentWillMount() {
		this.props.fetchList();
	}

	render() {
		return <HomeScreen enquetes={this.props.data} />;
	}
}


function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList()),
	};
}

const mapStateToProps = state => ({
	data: state.respostasReducer.listRespostas,
	isLoading: state.respostasReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(RespostasContainer);
