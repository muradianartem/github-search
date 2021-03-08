import React from "react";

interface SearchInterface {
  onSearch: (e: string) => void;
}

const Search: React.FC<SearchInterface> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    onSearch(searchQuery);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input placeholder="type query..." onChange={(e) => setSearchQuery(e.target.value)} />
      <button type="submit" onSubmit={handleSubmit}>Search</button>
      <button type="reset">Clear</button>
    </form>
  )
}

export default Search;