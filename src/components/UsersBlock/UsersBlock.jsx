import { useState } from "react";
import { UsersList } from "./UsersList";
import { ASC, DESC } from "../../constants/sortMethods";
import classes from "./UsersBlock.module.css";

export const UsersBlock = ({ users, setUsers }) => {
  const [currentSort, setCurrentSort] = useState("");
  const [sortMethod, setSortMethod] = useState(DESC);
  const toggleSortMethod = () => {
    if (sortMethod === ASC) setSortMethod(DESC);
    else setSortMethod(ASC);
  };

  const setClass = (currentSorting) => {
    return currentSort === currentSorting ? `${classes.sorting} ${classes.current}` : classes.sorting;
  };

  const sortByRating = (option) => {
    toggleSortMethod();
    if (sortMethod !== DESC) toggleSortMethod();
    if (sortMethod === ASC) {
      users.sort((prev, next) => prev.rating - next.rating);
    } else {
      users.sort((prev, next) => next.rating - prev.rating);
    }
    setCurrentSort(option);
  };

  const sortByDate = (option) => {
    toggleSortMethod();
    if (sortMethod !== DESC) toggleSortMethod();
    if (sortMethod === ASC) {
      users.sort((prev, next) => (prev.registration_date > next.registration_date ? -1 : 1));
    } else {
      users.sort((prev, next) => (prev.registration_date > next.registration_date ? 1 : -1));
    }
    setCurrentSort(option);
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
      <UsersList users={users} setUsers={setUsers} />
    </div>
  );
};
