import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { GithubListActions } from "../../../store/export/types";
import Button from "../../../shared/components/Button";
import * as actions from "../../../store/export/actions";
import * as asyncActions from "../../../store/export/async-actions";

import "./Search.scss";
import { RootState } from "../../../store";

interface SearchInterface extends ReduxGithubListType {};

type ReduxGithubListType = ReturnType<typeof mapDispatcherToProps> & ReturnType<typeof mapStateToProps>;

const mapDispatcherToProps = (dispatch: Dispatch<GithubListActions>) => {
  return {
    getGithubRepoList: () => asyncActions.getGithubRepoList(dispatch),
    setSearchQuery: (searchQuery: string) => dispatch(actions.setSearchQuery(searchQuery)),
    setSearchHistory: (searchHistory: Array<string>) => dispatch(actions.setSearchHistory(searchHistory))
  };
};

const mapStateToProps = ({ githubList }: RootState) => {
  const { searchHistory } = githubList;

  return { searchHistory };
};

const Search: React.FC<SearchInterface> = ({ searchHistory, setSearchQuery, getGithubRepoList, setSearchHistory }) => {
  const [querySearch, setQuerySearch] = React.useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newSearchHistory = [...searchHistory, querySearch];
    
    localStorage.setItem('searchHistory', newSearchHistory.join());
    
    setSearchQuery(querySearch);
    setSearchHistory(newSearchHistory);
    getGithubRepoList();
  }

  const handleClear = () => {
    setSearchQuery("");
  }

  const handleChange = (e) => {
    setQuerySearch(e.target.value);
  }

  return(
    <form onSubmit={handleSubmit} className="search-wrapper">
      <input className="search-input" placeholder="type query..." onChange={handleChange} />
      <Button type="submit" onSubmit={handleSubmit} label="search" />
      <Button type="reset" onClick={handleClear} label="Clear" />
    </form>
  )
}

export default connect(mapStateToProps, mapDispatcherToProps)(Search);
