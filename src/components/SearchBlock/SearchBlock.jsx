import { Search } from "./Search";
import { ClearFilter } from "./ClearFilter";
import classes from "./SearchBlock.module.css";

export const SearchBlock = ({ users, setUsers }) => {
  return (
    <div className={classes.searchBlock}>
      <Search placeholder="Поиск по имени или e-mail" />
      <ClearFilter users={users} setUsers={setUsers} />
    </div>
  );
};
