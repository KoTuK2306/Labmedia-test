import { useState } from "react";
import { UsersList } from "./UsersList";
import { SortButton } from "./SortButton/SortButton";
import { ASC, DESC } from "../../constants/sortMethods";
import classes from "./UsersBlock.module.css";

export const UsersBlock = ({ users, setUsers }) => {
  const [currentSort, setCurrentSort] = useState("");
  const [sortMethod, setSortMethod] = useState(DESC);
  const toggleSortMethod = () => (sortMethod === ASC ? setSortMethod(DESC) : setSortMethod(ASC));

  const setClass = (currentSorting) => {
    return currentSort === currentSorting ? `${classes.sorting} ${classes.current}` : classes.sorting;
  };

  const sort = (option, howSort) => {
    toggleSortMethod();
    if (sortMethod !== DESC) {
      toggleSortMethod();
    }
    howSort();
    setCurrentSort(option);
  };

  const sortByRating = () => {
    if (sortMethod === ASC) {
      users.sort((prev, next) => prev.rating - next.rating);
    } else {
      users.sort((prev, next) => next.rating - prev.rating);
    }
  };

  const sortByDate = () => {
    if (sortMethod === ASC) {
      users.sort((prev, next) => (prev.registration_date > next.registration_date ? -1 : 1));
    } else {
      users.sort((prev, next) => (prev.registration_date > next.registration_date ? 1 : -1));
    }
  };

  return (
    <div className={classes.usersBlock}>
      <div className={classes.description}>
        <p className={classes.sort}>Сортировка: </p>
        <SortButton onClick={() => sort("byRegistrationDate", sortByDate)} className={setClass("byRegistrationDate")}>
          Дата регистрации
        </SortButton>
        <SortButton onClick={() => sort("byRate", sortByRating)} className={setClass("byRate")}>
          Рейтинг
        </SortButton>
      </div>
      <UsersList users={users} setUsers={setUsers} />
    </div>
  );
};
