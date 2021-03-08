import { combineReducers, createStore } from 'redux';
import { githubList } from './export/reducer';
import { StateInterface } from './export/types';

export interface RootState {
  githubList: StateInterface
}

const store = createStore<RootState, any, any, any>(
  combineReducers({
    githubList: githubList
  }));

export default store;
