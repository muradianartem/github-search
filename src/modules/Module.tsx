import React from "react";

import Search from "./components/Search";
import SearchResultTable from "./components/SearchResultTable";
import { GithubRepo } from "../store/export/types";
import SearchHistory from "./components/SearchHistory";

import "./Module.scss";

export interface SearchResultGithub {
  data: DataSearchGithub;
  [key:string]: any;
}

export interface DataSearchGithub {
  total_count: number;
  items: Array<GithubRepo>
}

const Module: React.FC<any> = () => {
  return(
    <div className="module-wrapper">
      <span className="app-title"> Github Search App </span>
      <Search />
      <SearchHistory />
      <SearchResultTable />
    </div>
  )
}

export default Module;