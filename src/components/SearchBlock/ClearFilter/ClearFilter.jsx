import { useContext } from "react";
import { SearchContext } from "../../../modules/contexts/SearchContext";
import { makePathToPublic } from "../../../utils/makePathToPublic";
import classes from "./ClearFilter.module.css";

export const ClearFilter = ({ users, setUsers }) => {
  const { setSearch } = useContext(SearchContext);
  const clearFiltering = () => {
    setSearch("");
    setUsers(users.sort((prev, next) => prev.id - next.id));
  };
  return (
    <div className={classes.clearWrapper}>
      <img src={makePathToPublic("/images/clearIcon.png")} alt="Clear Icon"></img>
      <p onClick={clearFiltering}>Очистить фильтр</p>
    </div>
  );
};
