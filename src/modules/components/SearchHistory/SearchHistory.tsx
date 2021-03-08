import React from "react";
import { Dispatch } from "redux";
import { GithubListActions } from "../../../store/export/types";

import * as actions from "../../../store/export/actions";
import * as asyncActions from "../../../store/export/async-actions";
import { connect } from "react-redux";
import { RootState } from "../../../store";

import "./SearchHistory.scss";

interface SearchHistoryInterface extends ReduxGithubListType {};

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

const SearchHistory: React.FC<SearchHistoryInterface> = ({ searchHistory, setSearchHistory, setSearchQuery, getGithubRepoList }) => {
  React.useEffect(()=>{
    const searchHistory = localStorage.getItem('searchHistory');

    if (searchHistory) setSearchHistory(searchHistory.split(','));
  }, []);

  const handleSearchQuery = (search: string) => {
    setSearchQuery(search);
    getGithubRepoList();
  }

  const handleClearHistory = () => {
    setSearchHistory([]);
    delete localStorage.searchHistory;
  }

  return(
    <div className="search-history">
      {searchHistory.length !== 0 && (
        <div>
          <div>
            <span className="search-history-title">
              Search History:
            </span>
            <span onClick={handleClearHistory} className="clear-search-history">X</span>
          </div>
          <div className="search-history-items">
            {searchHistory.map((search) => {
              return <div onClick={() => handleSearchQuery(search)} className="search-history-item">{search}</div>
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatcherToProps)(SearchHistory);