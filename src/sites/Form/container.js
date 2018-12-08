import Site from './form';
import { connect } from 'react-redux';
import { sendDataAPI } from '../../actions/form';

export const mapStateToProps = (state) => {
    return state;
};

export const mapDispatchToProps = (dispatch) => {
    return { sendDataAPI: name => dispatch(sendDataAPI(name)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Site);
