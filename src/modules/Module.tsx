import React from "react";
import axios from "axios";

import Search from "./components/Search";
import SearchResultTable from "./components/SearchResultTable";

export interface SearchResultGithub {
  data: DataSearchGithub;
  [key:string]: any;
}

export interface DataSearchGithub {
  total_count: number;
  items: Array<GithubRepo>
}

export interface GithubRepo {
    name: string;
    id: number;
    html_url: String;
    stargazers_count: number;
    [key:string]: any;
}

const Module: React.FC<any> = () => {
  const [searchResults, setSearchResults] = React.useState<DataSearchGithub>();

  const getResults = async (searchQuery: string) => {
    const { data } = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&page=0&per_page=30&order=desc`) as SearchResultGithub;

    setSearchResults(data);
  };

  const onSearch = (searchQuery: string) => {
    getResults(searchQuery);
  };

  return(
    <>
      <Search onSearch={onSearch} />
      <SearchResultTable searchResults={searchResults}/>
    </>
  )
}

export default Module;