import { UsersList } from "./UsersList";
import { useState } from "react";
import classes from "./UsersBlock.module.css";

export const UsersBlock = ({ filtering }) => {
  const [color_1, setColor_1] = useState("");
  const [color_2, setColor_2] = useState("");

  return (
    <div className={classes.usersBlock}>
      <div className={classes.description}>
        <p className={classes.sort}>Сортировка: </p>
        <p
          style={{ color: color_1, borderBottom: `1px dashed ${color_1}` }}
          onClick={() => {
            setColor_2("");
            setColor_1("#333333");
          }}
          className={classes.sorting}
        >
          Дата регистрации
        </p>
        <p
          style={{ color: color_2, borderBottom: `1px dashed ${color_2}` }}
          onClick={() => {
            setColor_1("");
            setColor_2("#333333");
          }}
          className={classes.sorting}
        >
          Рейтинг
        </p>
      </div>
      <UsersList filtering={filtering} />
    </div>
  );
};
