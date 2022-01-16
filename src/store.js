import {createStore , bindActionCreators} from 'redux';
import reducer from './reducers/rootReducer';
import actions from './actions/action';


const store=createStore(reducer);

const actionCreators=bindActionCreators(actions , store.dispatch);


export { store , actionCreators};