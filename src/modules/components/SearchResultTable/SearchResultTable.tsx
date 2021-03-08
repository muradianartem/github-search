import React from "react";
import { Dispatch } from "redux";
import { GithubListActions } from "../../../store/export/types";
import Pagination from "react-js-pagination";

import * as actions from "../../../store/export/actions";
import * as asyncActions from "../../../store/export/async-actions";
import { connect } from "react-redux";
import { RootState } from "../../../store";

import "./SearchResultTable.scss";

interface SearchResultTableInterface extends ReduxGithubListType {};

type ReduxGithubListType = ReturnType<typeof mapDispatcherToProps> & ReturnType<typeof mapStateToProps>;

const mapDispatcherToProps = (dispatch: Dispatch<GithubListActions>) => {
  return {
    getGithubRepoList: () => asyncActions.getGithubRepoList(dispatch),
    setPage: (page: number) => dispatch(actions.setPage(page))
  };
};

const mapStateToProps = ({ githubList }: RootState) => {
  const { loading, items, pages_count, page } = githubList;

  return { loading, items, pages_count, page };
};

const SearchResultTable: React.FC<SearchResultTableInterface> = ({ items, loading, pages_count, page, setPage, getGithubRepoList }) => {
  const handleChangePage = (selected: number) => {
    setPage(selected);
    getGithubRepoList();
  }

  if (items.length === 0 && !loading) {
    return <></>;
  }

  if (loading) return <div>Loading...</div>;

  return(
    <div className="table-wrapper">
      <table>
        <thead>
          <tr className="repo-table_head">
            <th>Name</th>
            <th>Url</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>  
          {items.map( ({ name, id, html_url, stargazers_count}) => {
            return (
              <tr key={id} className="repo-item">
                <td>{name}</td>
                <td>
                  <a href={html_url} target="_blank" rel="noreferrer">  
                    {html_url}
                  </a>
                </td>
                <td>{stargazers_count}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination 
        activePage={page}
        itemsCountPerPage={30}
        totalItemsCount={pages_count}
        pageRangeDisplayed={3}
        onChange={handleChangePage}
        itemClass="item"
      />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatcherToProps)(SearchResultTable);