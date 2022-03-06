import classes from "./Search.module.css";
import React from "react";

export const Search = ({ setFiltering, setText, text }) => {
  const inputedText = (text) => {
    setFiltering(text.target.value);
    setText(text.target.value);
  };
  return (
    <input
      onChange={(text) => inputedText(text)}
      placeholder="Поиск по имени или e-mail"
      type="text"
      className={classes.Search}
      value={text}
    ></input>
  );
};
