import { Search } from "./Search";
import classes from "./SearchBlock.module.css";

export const SearchBlock = () => {
  return (
    <div className={classes.SearchBlock}>
      <Search />
    </div>
  );
};
