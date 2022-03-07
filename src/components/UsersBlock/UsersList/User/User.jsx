import classes from "./User.module.css";
import deleteIcon from "../../../../images/delete.png";
import { useState } from "react";
import { ConfirmationWindow } from "../../../ConfirmationWindow";

export const User = ({ user, setUsers, filteredUsers }) => {
  const registrationDate = new Date(user.registration_date);
  const [display, setDisplay] = useState("none");

  const deleteUser = () => {
    const userIndex = filteredUsers.indexOf(user);
    if (userIndex > -1) filteredUsers.splice(userIndex, 1);
    setUsers(filteredUsers);
  };

  return (
    <div className={classes.user}>
      <p className={classes.userName}>{user.username}</p>
      <p>{user.email}</p>
      <p>{registrationDate.toLocaleDateString()}</p>
      <p className={classes.rate}>
        {user.rating}
        <img onClick={() => setDisplay("flex")} src={deleteIcon} alt="deleteIcon" />
        <ConfirmationWindow deleteUser={deleteUser} display={display} setDisplay={setDisplay} />
      </p>
    </div>
  );
};
