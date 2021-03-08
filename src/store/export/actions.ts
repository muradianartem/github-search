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

export function setPages(pages_count: number) {
  return action(Constants.SET_PAGES_COUNT, {
    pages_count
  });
}

export function setSearchHistory(searchHistory: Array<string>) {
  return action(Constants.SET_SEARCH_HISTORY, {
    searchHistory
  });
}
