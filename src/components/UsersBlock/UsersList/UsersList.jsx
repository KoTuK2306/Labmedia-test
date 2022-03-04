import classes from "./UsersList.module.css";

export const UsersList = () => {
  return (
    <div className={classes.usersList}>
      <div className={classes.title}>
        <p>Имя пользователя</p>
        <p>E-mail</p>
        <p>Дата регистрации</p>
        <p>Рейтинг</p>
      </div>
    </div>
  );
};
