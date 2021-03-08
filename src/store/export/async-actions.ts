import axios from 'axios';
import { Dispatch } from 'redux';
import { SearchResultGithub } from '../../modules';

import store from '../index';
import * as actions from './actions';
import { GithubListActions } from './types';

export const getGithubRepoList= async( dispatch: Dispatch<GithubListActions> ) => {
  dispatch(actions.setLoading(true));
  try {
    const state = store.getState();
    const { searchQuery, page, searchHistory } = state.githubList;
    const { data } = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&page=${page}&per_page=30&order=desc`) as SearchResultGithub;
    
    dispatch(actions.setItems(data.items));
    dispatch(actions.setPages(Math.ceil(data.total_count/30)));
    dispatch(actions.setLoading(false));
  } catch (err) {
    dispatch(actions.setLoading(false));
    console.error('error getReportsList',err);
  }
};
