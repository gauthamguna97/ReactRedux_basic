import { combineReducers } from 'redux';
import SideMenu from './activestate.js'
import main from './UserData.js';
const rootReducer = combineReducers({
    sideMenu : SideMenu,
    main : main,
});

export default rootReducer;
