import { Constants } from './constants';
import { StateInterface } from './types';

const init: StateInterface = {
  items: [],
  page: 0,
  searchQuery: '',
  loading: false
};

export function githubList(state: StateInterface = init, action?: any): StateInterface {
  switch (action.type) {
    case Constants.SET_PAGE:
      return { ...state, ...action.payload};
    case Constants.LOADING:
      return { ...state, ...action.payload};
    case Constants.SET_ITEMS:
      return { ...state, ...action.payload};
    case Constants.SET_SEARCH_QUERY:
      return {...state, ...action.payload};
    default:
      return state;
    }
}
