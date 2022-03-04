import { Search } from "./Search";
import { ClearFilter } from "./ClearFilter";
import classes from "./SearchBlock.module.css";

export const SearchBlock = () => {
  return (
    <div className={classes.SearchBlock}>
      <Search />
      <ClearFilter />
    </div>
  );
};
