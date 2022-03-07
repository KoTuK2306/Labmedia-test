import classes from "./ConfirmationWindow.module.css";

export const ConfirmationWindow = ({ display, setDisplay, deleteUser }) => {
  return (
    <div className={classes.window} style={{ display: display }}>
      <div className={classes.confirmationWindow}>
        <p>Вы уверены, что хотите удалить пользователя?</p>
        <button
          onClick={() => {
            deleteUser();
            setDisplay("none");
          }}
          className={classes.trueButton}
        >
          Да
        </button>
        <button onClick={() => setDisplay("none")} className={classes.falseButton + " " + classes.trueButton}>
          Нет
        </button>
      </div>
    </div>
  );
};
