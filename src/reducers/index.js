import { combineReducers } from 'redux';
import DataList from './dataList.js'
import ActiveState from './activestate.js'
const rootReducer = combineReducers({
    data : DataList,
    activedata : ActiveState
});

export default rootReducer;
