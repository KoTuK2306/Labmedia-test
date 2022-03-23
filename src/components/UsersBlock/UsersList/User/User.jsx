import { makePathToPublic } from "../../../../utils/makePathToPublic";
import { useModal } from "../../../../modules/contexts/ModalContext";
import classes from "./User.module.css";

export const User = ({ user, setUserId }) => {
  const registrationDate = new Date(user.registration_date);

  const { openModal } = useModal();

  return (
    <div className={classes.user}>
      <p className={classes.userName}>{user.username}</p>
      <p>{user.email}</p>
      <p>{registrationDate.toLocaleDateString()}</p>
      <span className={classes.rate}>
        {user.rating}
        <img
          onClick={() => {
            openModal();
            setUserId(user.id);
          }}
          src={makePathToPublic("/images/delete.png")}
          alt="deleteIcon"
        />
      </span>
    </div>
  );
};
