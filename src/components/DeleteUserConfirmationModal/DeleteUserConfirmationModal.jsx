import { useModal } from "../../modules/contexts/ModalContext";
import classes from "./DeleteUserConfirmationModal.module.css";

export const DeleteUserConfirmationModal = ({ deleteUser }) => {
  const { closeModal, isOpened } = useModal();

  return (
    <div className={`${isOpened ? classes.modal_open : classes.modal_closed} ${classes.window}`}>
      <div className={classes.confirmationModal}>
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
