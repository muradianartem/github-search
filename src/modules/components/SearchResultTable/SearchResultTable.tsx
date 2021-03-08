import React from "react";

import { DataSearchGithub } from "../../Module";

interface SearchResultTableInterface {
  searchResults?: DataSearchGithub;
}

enum TableItems {
  name,
  id,
  html_url,
  stargazers_count
}

const SearchResultTable: React.FC<SearchResultTableInterface> = ({ searchResults }) => {
  if (!searchResults) {
    return <div>Input search query</div>
  }

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
        {searchResults?.items.map( ({ name, id, html_url, stargazers_count}) => {
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{html_url}</td>
              <td>{stargazers_count}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default SearchResultTable;