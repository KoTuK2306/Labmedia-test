import React, { useState } from "react";
import { difference } from "lodash";
import { ConfirmationModal } from "../../../ConfirmationModal";
import classes from "./User.module.css";

export const isOpenContext = React.createContext({});

export const User = ({ user, setUsers, filteredUsers, users }) => {
  const registrationDate = new Date(user.registration_date);
  const [openWindow, setOpenWindow] = useState(false);

  const deleteUser = () => {
    const userIndex = filteredUsers.indexOf(user);
    if (userIndex > -1) {
      setUsers(difference(users, filteredUsers.splice(userIndex, 1)));
    }
  };

  return (
    <div className={classes.user}>
      <p className={classes.userName}>{user.username}</p>
      <p>{user.email}</p>
      <p>{registrationDate.toLocaleDateString()}</p>
      <span className={classes.rate}>
        {user.rating}
        <isOpenContext.Provider value={{ openWindow, setOpenWindow }}>
          <img
            onClick={() => {
              setOpenWindow(true);
              console.log(openWindow);
            }}
            src={process.env.PUBLIC_URL + "/images/delete.png"}
            alt="deleteIcon"
          />
          <ConfirmationModal deleteUser={deleteUser} />
        </isOpenContext.Provider>
      </span>
    </div>
  );
};
