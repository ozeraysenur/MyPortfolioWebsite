import { combineReducers } from 'redux';
import langReducer from './langReducer';
import themeReducer from './themeReducer';


export const reducers = combineReducers({
  theme: themeReducer,
  language: langReducer
})

