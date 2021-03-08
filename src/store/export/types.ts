import {ActionType} from 'typesafe-actions';
import * as actions from './actions';

export interface GithubRepo {
  name: string;
  id: number;
  html_url: string;
  stargazers_count: number;
  [key:string]: any;
}

export interface StateInterface {
  items: Array<GithubRepo>,
  page: number,
  searchQuery: string,
  loading: boolean,
  pages_count: number,
  searchHistory: Array<string>
}

export type GithubListActions = ActionType<typeof actions>;
