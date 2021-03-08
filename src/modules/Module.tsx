import React from "react";
import axios from "axios";

import Search from "./components/Search";
import SearchResultTable from "./components/SearchResultTable";
import { GithubRepo } from "../store/export/types";

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
    <>
      <Search />
      <SearchResultTable />
    </>
  )
}

export default Module;