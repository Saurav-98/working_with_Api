import React, { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSearchClick = (e) => {
    e.preventDefault();
    onSearchSubmit(searchTerm);
    setSearchTerm("");
  };
  return (
    <div>
      <form onSubmit={handleSearchClick}>
        <label htmlFor="search-input">Make a search!</label>
        <br />
        <input
          onChange={handleSearchChange}
          type="text"
          id="search-input"
          value={searchTerm}
        />
      </form>
    </div>
  );
};

export default SearchBar;
