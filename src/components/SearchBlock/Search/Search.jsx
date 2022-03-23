import { useContext } from "react";
import { SearchContext } from "../../../modules/contexts/SearchContext";
import classes from "./Search.module.css";

export const Search = ({ placeholder }) => {
  const { search, setSearch } = useContext(SearchContext);

  const inputedText = (event) => setSearch(event.target.value);

  return (
    <input
      onChange={(event) => inputedText(event)}
      placeholder={placeholder}
      type="text"
      className={classes.Search}
      value={search}
    ></input>
  );
};
