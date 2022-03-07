import classes from "./User.module.css";
import deleteIcon from "../../../../images/delete.png";

export const User = ({ user }) => {
  const registrationDate = new Date(user.registration_date);
  return (
    <div className={classes.user}>
      <p className={classes.userName}>{user.username}</p>
      <p>{user.email}</p>
      <p>{registrationDate.toLocaleDateString()}</p>
      <p className={classes.rate}>
        {user.rating}
        <img src={deleteIcon} alt="deleteIcon" />
      </p>
    </div>
  );
};
