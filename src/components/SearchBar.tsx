import React from "react";
import "../styles/SearchBar.scss";

import axios from "axios";

import { Joke } from "../types";

interface IProps {
  setJokes: React.Dispatch<React.SetStateAction<Joke[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<IProps> = ({ setJokes, setIsLoading }) => {
  const [searchValue, setSearchValue] = React.useState<string>("SQL");
  const [amountValue, setAmountValue] = React.useState<string>("10");
  const [categoryValue, setCategoryValue] =
    React.useState<string>("Programming");

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleAmountValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountValue(e.target.value);
  };

  const handleCategoryValueChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategoryValue(e.target.value);
  };

  React.useEffect(() => {
    axios
      .get(
        `https://v2.jokeapi.dev/joke/${categoryValue}?contains=${searchValue}&amount=${amountValue}`
      )
      .then((res) => {
        setIsLoading(false);
        setJokes(res.data.jokes);
      })
      .catch((err) => setIsLoading(false));
  }, [searchValue, amountValue, categoryValue, setJokes, setIsLoading]);

  return (
    <div className="searchBar">
      <div className="searchBar__group">
        <label>Search : </label>
        <input
          className="searchBar__group__search"
          value={searchValue}
          onChange={(e) => handleSearchValueChange(e)}
          type="text"
          placeholder="Search a Joke"
        />
      </div>
      <div className="searchBar__group">
        <label>Amount : </label>
        <input
          placeholder="Amount"
          className="searchBar__group__amount"
          min="1"
          type="number"
          value={amountValue}
          onChange={(e) => handleAmountValueChange(e)}
        />
      </div>
      <div className="searchBar__group">
        <label>Category : </label>

        <select
          className="searchBar__group__category"
          placeholder="Category"
          value={categoryValue}
          onChange={(e) => handleCategoryValueChange(e)}
        >
          <option>Any</option>
          <option>Programming</option>
          <option>Misc</option>
          <option>Dark</option>
          <option>Pun</option>
          <option>Spooky</option>
          <option>Christmas</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
