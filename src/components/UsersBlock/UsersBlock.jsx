import { UsersList } from "./UsersList";
import classes from "./UsersBlock.module.css";

export const UsersBlock = () => {
  return (
    <div className={classes.usersBlock}>
      <div className={classes.description}>
        <p className={classes.sort}>Сортировка: </p>
        <p className={classes.date}>Дата регистрации</p>
        <p className={classes.rate}>Рейтинг</p>
      </div>
      <UsersList />
    </div>
  );
};
