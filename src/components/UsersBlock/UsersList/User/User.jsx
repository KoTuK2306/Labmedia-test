import classes from "./User.module.css";
import deleteIcon from "../../../../images/delete.png";
import { useState } from "react";
import { ConfirmationWindow } from "../../../ConfirmationWindow";
var _ = require("lodash");

export const User = ({ user, setUsers, filteredUsers, users }) => {
  const registrationDate = new Date(user.registration_date);
  const [display, setDisplay] = useState("none");

  const deleteUser = () => {
    const userIndex = filteredUsers.indexOf(user);
    if (userIndex > -1) setUsers(_.difference(users, filteredUsers.splice(userIndex, 1)));
  };

  return (
    <div className={classes.user}>
      <p className={classes.userName}>{user.username}</p>
      <p>{user.email}</p>
      <p>{registrationDate.toLocaleDateString()}</p>
      <span className={classes.rate}>
        {user.rating}
        <img onClick={() => setDisplay("flex")} src={deleteIcon} alt="deleteIcon" />
        <ConfirmationWindow deleteUser={deleteUser} display={display} setDisplay={setDisplay} />
      </span>
    </div>
  );
};
