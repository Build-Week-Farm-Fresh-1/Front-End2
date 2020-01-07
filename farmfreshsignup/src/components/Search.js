import React from "react";

const Search = () => (
  <div className="nav-bar-search">
    <form>
      <label htmlFor="name">
        Search:
        <input id="name" type="text" name="textfield" placeholder="Search" />
      </label>
    </form>
  </div>
);

export default Search;
