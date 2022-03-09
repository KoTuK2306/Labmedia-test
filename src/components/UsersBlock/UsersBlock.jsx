import { UsersList } from "./UsersList";
import { useState } from "react";
import classes from "./UsersBlock.module.css";

export const UsersBlock = ({ users, filtering, setUsers }) => {
  const [currentButton, setCurrentButton] = useState("");
  const [i, setI] = useState(0);

  const setClass = (currentSorting) => {
    return currentButton === currentSorting ? `${classes.sorting} ${classes.current}` : classes.sorting;
  };

  const sortByRating = (option) => {
    setI(i + 1);
    if (i % 2 !== 0) {
      users.sort((prev, next) => prev.rating - next.rating);
    } else {
      users.sort((prev, next) => next.rating - prev.rating);
    }
    setCurrentButton(option);
  };

  const sortByDate = (option) => {
    setI(i + 1);
    if (i % 2 !== 0) {
      users.sort((prev, next) => (prev.registration_date > next.registration_date ? -1 : 1));
    } else {
      users.sort((prev, next) => (prev.registration_date > next.registration_date ? 1 : -1));
    }
    setCurrentButton(option);
  };

  return (
    <div className={classes.usersBlock}>
      <div className={classes.description}>
        <p className={classes.sort}>Сортировка: </p>
        <p onClick={() => sortByDate("byRegistrationDate")} className={setClass("byRegistrationDate")}>
          Дата регистрации
        </p>
        <p onClick={() => sortByRating("byRate")} className={setClass("byRate")}>
          Рейтинг
        </p>
      </div>
      <UsersList users={users} setUsers={setUsers} filtering={filtering} />
    </div>
  );
};
