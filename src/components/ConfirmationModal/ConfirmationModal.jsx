import { useContext } from "react";
import { isOpenContext } from "../UsersBlock/UsersList/User/User";
import classes from "./ConfirmationModal.module.css";

export const ConfirmationModal = ({ deleteUser }) => {
  const contextValues = useContext(isOpenContext);
  console.log(contextValues);

  return (
    <div className={`${contextValues.openWindow ? classes.window_open : classes.window_closed} ${classes.window}`}>
      <div className={classes.ConfirmationModal}>
        <p>Вы уверены, что хотите удалить пользователя?</p>
        <button
          onClick={() => {
            deleteUser();
            contextValues.setOpenWindow(false);
          }}
          className={classes.buttonSuccess}
        >
          Да
        </button>
        <button
          onClick={() => contextValues.setOpenWindow(false)}
          className={`${classes.falseButton} ${classes.buttonSuccess}`}
        >
          Нет
        </button>
      </div>
    </div>
  );
};
