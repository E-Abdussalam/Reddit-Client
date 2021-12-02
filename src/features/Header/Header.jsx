import React, { useState, useEffect } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/redditSlice";
const Header = () => {
  const [searchTermLocal, setSearchTermLocal] = useState("");
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();
  // change search term
  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };
  // useEffect
  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);
  // search submit
  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
  };
  return (
    <header>
      <div className="logo">
        <p>
          Reddit<span>Minimal</span>
        </p>
      </div>
      <form className="search" onSubmit={onSearchTermSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTermLocal}
          onChange={onSearchTermChange}
        />
        <button
          type="submit"
          onClick={onSearchTermSubmit}
          aria-label="Search"
        ></button>
      </form>
    </header>
  );
};
export default Header;
