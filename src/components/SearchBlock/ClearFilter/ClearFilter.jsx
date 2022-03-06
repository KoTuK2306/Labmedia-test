import classes from "./ClearFilter.module.css";
import clearIcon from "../../../images/clearIcon.png";

export const ClearFilter = ({ setFiltering, setText }) => {
  const clearFiltering = () => {
    setFiltering("");
    setText("");
  };
  return (
    <div className={classes.clearWrapper}>
      <img src={clearIcon} alt="Clear Icon"></img>
      <p onClick={() => clearFiltering()}>Очистить фильтр</p>
    </div>
  );
};
