import Site from './home';
import { connect } from 'react-redux';
import { updateValue } from '../../actions/counter';

export const mapStateToProps = (state) => {
    return state;
};

export const mapDispatchToProps = (dispatch) => {
    return { updateValue: type => dispatch(updateValue(type)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Site);
