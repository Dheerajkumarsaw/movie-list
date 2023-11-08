import { useState } from "react";

function NavBar() {
  const search_movie_num = 20;
  const [query, setQuery] = useState();
  return (
    <div>
      <nav className="text-3xl font-serif bg-indigo-600 rounded-lg p-4 m-6 h-20 grid items-center grid-cols-3">
        <Logo></Logo>
        <Search query={query} setQuery={setQuery}></Search>
        {search_movie_num === 0 ? (
          ""
        ) : (
          <SearchResult search_movie_num={search_movie_num}></SearchResult>
        )}
      </nav>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center text-white">
      <span role="img"> 🍿</span>
      <h1>Movie List</h1>
    </div>
  );
}

function SearchResult({ search_movie_num }) {
  return (
    <div>
      <p className="text-slate-400 ml-44 text-xl">
        Found {search_movie_num} results{" "}
      </p>
    </div>
  );
}

function Search({ query, setQuery }) {
  return (
    <div>
      <input
        placeholder="search movies..."
        className="rounded-md bg-indigo-500 h-11 p-2 w-96 text-xl text-gray-100 placeholder:text-gray-300 "
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}

export default NavBar;
