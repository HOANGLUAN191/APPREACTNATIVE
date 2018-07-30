import { combineReducers } from 'C:/Users/hoang/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import kindergartensReducers from './kindergartensReducers';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    kindergartens: kindergartensReducers,
    selectedKindergartenId: SelectionReducer
  
});
