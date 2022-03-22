import { useContext } from "react";
import { FilteringContext } from "../../../App";
import classes from "./Search.module.css";

export const Search = ({ setText, text, placeholder }) => {
  const contextValues = useContext(FilteringContext);
  const inputedText = (event) => {
    contextValues.setFiltering(event.target.value);
    setText(event.target.value);
  };
  return (
    <input
      onChange={(event) => inputedText(event)}
      placeholder={placeholder}
      type="text"
      className={classes.Search}
      value={text}
    ></input>
  );
};
