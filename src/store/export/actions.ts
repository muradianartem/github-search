import { action } from 'typesafe-actions';
import { Constants } from './constants';
import { GithubRepo } from './types';

export function setItems(items: Array<GithubRepo>) {
  return action(Constants.SET_ITEMS, {
    items
  });
}

export function setPage(page: number) {
  return action(Constants.SET_PAGE, {
    page
  });
}

export function setSearchQuery(searchQuery: string) {
  return action(Constants.SET_SEARCH_QUERY, {
    searchQuery
  });
}

export function setLoading(loading: boolean) {
  return action(Constants.LOADING, {
    loading
  });
}

export function setPages(total_count: number) {
  return action(Constants.LOADING, {
    total_count
  });
}
