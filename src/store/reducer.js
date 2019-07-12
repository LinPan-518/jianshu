import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../component/header/store';



 const reducer = combineReducers({
    header : headerReducer
});// this state 变成immutable对象 
export default reducer;