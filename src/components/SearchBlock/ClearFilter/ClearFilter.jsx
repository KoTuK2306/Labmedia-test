import classes from "./ClearFilter.module.css";
import clearIcon from "../../../images/clearIcon.png";

export const ClearFilter = ({ users, setUsers, setFiltering, setText }) => {
  const clearFiltering = () => {
    setFiltering("");
    setText("");
    setUsers(users);
  };
  return (
    <div className={classes.clearWrapper}>
      <img src={clearIcon} alt="Clear Icon"></img>
      <p onClick={() => clearFiltering()}>Очистить фильтр</p>
    </div>
  );
};
