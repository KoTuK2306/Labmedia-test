import classes from "./UsersList.module.css";
import { User } from "./User";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const UsersList = ({ filtering }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users");
      setUsers(result.data);
    };
    fetchdata();
  }, []);
  const filteredUsers = users.filter((user) => {
    return user.username.toLowerCase().includes(filtering) || user.email.toLowerCase().includes(filtering);
  });
  return (
    <div className={classes.usersList}>
      <div className={classes.title}>
        <p>Имя пользователя</p>
        <p>E-mail</p>
        <p>Дата регистрации</p>
        <p>Рейтинг</p>
      </div>
      {filteredUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
