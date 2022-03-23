import { useModal } from "../../modules/contexts/ModalContext";
import classes from "./ConfirmationModal.module.css";

export const ConfirmationModal = ({ deleteUser }) => {
  const { closeModal } = useModal();

  return (
    <div className={`${useModal().isOpened ? classes.window_open : classes.window_closed} ${classes.window}`}>
      <div className={classes.ConfirmationModal}>
        <p>Вы уверены, что хотите удалить пользователя?</p>
        <button
          onClick={() => {
            deleteUser();
            closeModal();
          }}
          className={classes.buttonSuccess}
        >
          Да
        </button>
        <button onClick={closeModal} className={`${classes.falseButton} ${classes.buttonSuccess}`}>
          Нет
        </button>
      </div>
    </div>
  );
};
