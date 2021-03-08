import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { GithubListActions } from "../../../store/export/types";
import * as actions from "../../../store/export/actions";
import * as asyncActions from "../../../store/export/async-actions";

interface SearchInterface extends ReduxGithubListType {};

type ReduxGithubListType = ReturnType<typeof mapDispatcherToProps>;

const mapDispatcherToProps = (dispatch: Dispatch<GithubListActions>) => {
  return {
    getGithubRepoList: () => asyncActions.getGithubRepoList(dispatch),
    setSearchQuery: (searchQuery: string) => dispatch(actions.setSearchQuery(searchQuery)),
  };
};

const Search: React.FC<SearchInterface> = ({ setSearchQuery, getGithubRepoList }) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    getGithubRepoList();
  }

  const handleClear = () => {
    setSearchQuery("");
  }

  return(
    <form onSubmit={handleSubmit}>
      <input placeholder="type query..." onChange={(e) => setSearchQuery(e.target.value)} />
      <button type="submit" onSubmit={handleSubmit}>Search</button>
      <button type="reset" onClick={handleClear}>Clear</button>
    </form>
  )
}

export default connect(null, mapDispatcherToProps)(Search);
