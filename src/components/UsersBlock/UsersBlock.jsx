import { useState } from "react";
import { UsersList } from "./UsersList";
import { SortButton } from "./SortButton/SortButton";
import { ASC, DESC } from "../../constants/sortMethods";
import { BY_REGISTRATION_DATE, BY_RATE } from "../../constants/sortBy";
import classes from "./UsersBlock.module.css";

export const UsersBlock = ({ users, setUsers }) => {
  const [currentSort, setCurrentSort] = useState("");
  const [order, setOrder] = useState(DESC);
  const toggleOrder = () => (order === ASC ? setOrder(DESC) : setOrder(ASC));

  const sort = (option, sorting) => {
    toggleOrder();
    if (order !== DESC) {
      toggleOrder();
    }
    sorting();
    setCurrentSort(option);
  };

  const sortByRating = () => {
    if (order === ASC) {
      users.sort((prev, next) => prev.rating - next.rating);
      return;
    }
    users.sort((prev, next) => next.rating - prev.rating);
  };

  const sortByDate = () => {
    if (order === ASC) {
      users.sort((prev, next) => (prev.registration_date > next.registration_date ? -1 : 1));
      return;
    }
    users.sort((prev, next) => (prev.registration_date > next.registration_date ? 1 : -1));
  };

  return (
    <div className={classes.usersBlock}>
      <div className={classes.description}>
        <p className={classes.sort}>Сортировка: </p>
        <SortButton
          onClick={() => sort(BY_REGISTRATION_DATE, sortByDate)}
          className={`${classes.sorting} ${currentSort === BY_REGISTRATION_DATE ? classes.sorting_active : ""}`}
        >
          Дата регистрации
        </SortButton>
        <SortButton
          onClick={() => sort(BY_RATE, sortByRating)}
          className={`${classes.sorting} ${currentSort === BY_RATE ? classes.sorting_active : ""}`}
        >
          Рейтинг
        </SortButton>
      </div>
      <UsersList users={users} setUsers={setUsers} />
    </div>
  );
};
