import { useContext } from "react";
import { SearchContext } from "../../../modules/contexts/SearchContext";
import classes from "./Search.module.css";

export const Search = ({ placeholder }) => {
  const { search, setSearch } = useContext(SearchContext);

  const onChange = (event) => setSearch(event.target.value);

  return (
    <input
      onChange={(event) => onChange(event)}
      placeholder={placeholder}
      type="text"
      className={classes.search}
      value={search}
    ></input>
  );
};
