import {bindActionCreators} from 'react-redux';
import InputComponent from '../components/InputComponent';
import {InputActions} from '../actionCreaters/inputActions';
import {connect} from 'redux';
const mapStateToProps = () => {

}

const mapDispatchToProps = (dispatch)=> {
    return {
        onsend: bindActionCreators(InputActions.send, dispatch)
    }
}
const ConnectedInput = connect(mapStateToProps, mapDispatchToProps)(InputComponent);


export default ConnectedInput;
