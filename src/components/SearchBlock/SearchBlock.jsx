import { useState } from "react";
import { Search } from "./Search";
import { ClearFilter } from "./ClearFilter";
import classes from "./SearchBlock.module.css";

export const SearchBlock = ({ users, setUsers }) => {
  const [text, setText] = useState("");
  return (
    <div className={classes.SearchBlock}>
      <Search setText={setText} text={text} placeholder="Поиск по имени или e-mail" />
      <ClearFilter users={users} setUsers={setUsers} setText={setText} />
    </div>
  );
};
