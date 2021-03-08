import axios from 'axios';
import { Dispatch } from 'redux';
import { SearchResultGithub } from '../../modules';

import store from '../index';
import * as actions from './actions';
import { GithubListActions } from './types';

export const getGithubRepoList= async( dispatch: Dispatch<GithubListActions> ) => {
  dispatch(actions.setLoading(true));
  try {
    const { searchQuery } = store;
    const { data } = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&page=0&per_page=30&order=desc`) as SearchResultGithub;
    
    dispatch(actions.setItems(data.items));
    dispatch(actions.setPages(data.total_count));
    dispatch(actions.setLoading(false));
  } catch (err) {
    dispatch(actions.setLoading(false));
    console.error('error getReportsList',err);
  }
};
