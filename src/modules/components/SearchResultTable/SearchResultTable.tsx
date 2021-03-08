import React from "react";

import { DataSearchGithub } from "../../Module";

interface SearchResultTableInterface {
  searchResults?: DataSearchGithub;
}

const SearchResultTable: React.FC<SearchResultTableInterface> = ({ searchResults }) => {
  console.log(searchResults);

  return(
    <div>
      table
    </div>
  )
}

export default SearchResultTable;