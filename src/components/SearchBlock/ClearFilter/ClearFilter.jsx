import classes from "./ClearFilter.module.css";
import clearIcon from "../../../images/clearIcon.png";

export const ClearFilter = () => {
  return (
    <div className={classes.clearWrapper}>
      <img src={clearIcon} alt="Clear Icon"></img>
      <p>Очистить фильтр</p>
    </div>
  );
};
