import React from "react";
import { Dispatch } from "redux";
import { GithubListActions } from "../../../store/export/types";

import * as actions from "../../../store/export/actions";
import * as asyncActions from "../../../store/export/async-actions";
import { connect } from "react-redux";
import { RootState } from "../../../store";

interface SearchResultTableInterface extends ReduxGithubListType {};

type ReduxGithubListType = ReturnType<typeof mapDispatcherToProps> & ReturnType<typeof mapStateToProps>;

const mapDispatcherToProps = (dispatch: Dispatch<GithubListActions>) => {
  return {
    getGithubRepoList: () => asyncActions.getGithubRepoList(dispatch),
    setSearchQuery: (searchQuery: string) => dispatch(actions.setSearchQuery(searchQuery)),
  };
};

const mapStateToProps = ({ githubList }: RootState) => {
  const { loading, items } = githubList;

  return { loading, items };
};

const SearchResultTable: React.FC<SearchResultTableInterface> = ({ items, loading }) => {
  if (items.length === 0 && !loading) {
    return <div>Input search query</div>
  }

  if (loading) return <div>Loading...</div>;

  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Url</th>
          <th>Stars</th>
        </tr>
      </thead>
      <tbody>  
        {items.map( ({ name, id, html_url, stargazers_count}) => {
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>
                <a href={html_url} target="_blank">  
                  {html_url}
                </a>
              </td>
              <td>{stargazers_count}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default connect(mapStateToProps, mapDispatcherToProps)(SearchResultTable);