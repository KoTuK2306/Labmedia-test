import { Search } from "./Search";
import { ClearFilter } from "./ClearFilter";
import { useState } from "react";
import classes from "./SearchBlock.module.css";

export const SearchBlock = ({ setFiltering, users, setUsers }) => {
  const [text, setText] = useState("");
  return (
    <div className={classes.SearchBlock}>
      <Search setFiltering={setFiltering} setText={setText} text={text} />
      <ClearFilter users={users} setUsers={setUsers} setFiltering={setFiltering} setText={setText} />
    </div>
  );
};
