import { useContext } from "react";
import { FilteringContext } from "../../../App";
import classes from "./ClearFilter.module.css";

export const ClearFilter = ({ users, setUsers, setText }) => {
  const contextValues = useContext(FilteringContext);
  const clearFiltering = () => {
    contextValues.setFiltering("");
    setText("");
    setUsers(users.sort((prev, next) => prev.id - next.id));
  };
  return (
    <div className={classes.clearWrapper}>
      <img src={process.env.PUBLIC_URL + "/images/clearIcon.png"} alt="Clear Icon"></img>
      <p onClick={clearFiltering}>Очистить фильтр</p>
    </div>
  );
};
