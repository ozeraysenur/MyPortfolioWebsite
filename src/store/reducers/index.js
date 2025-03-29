import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import langReducer from './langReducer';


export const reducers = combineReducers({
  theme: themeReducer,
  language: langReducer
})

