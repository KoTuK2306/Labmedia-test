import classes from "./UsersList.module.css";
import { User } from "./User";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "../../Pagination/Pagination";

export const UsersList = ({ filtering }) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users");
      setUsers(result.data);
    };
    fetchdata();
  }, []);

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredUsersBeforePagination = users.filter((user) => {
    return (
      user.username.toLowerCase().includes(filtering.toLowerCase()) ||
      user.email.toLowerCase().includes(filtering.toLowerCase())
    );
  });

  const filteredUsers = filteredUsersBeforePagination.slice(firstUserIndex, lastUserIndex);

  return (
    <div className={classes.usersList}>
      <div className={classes.title}>
        <p>Имя пользователя</p>
        <p>E-mail</p>
        <p>Дата регистрации</p>
        <p>Рейтинг</p>
      </div>
      {filteredUsers.map((user) => (
        <User key={user.id} setUsers={setUsers} user={user} users={users} filteredUsers={filteredUsers} />
      ))}
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        usersPerPage={usersPerPage}
        totalUsers={filtering === "" ? users.length : filteredUsersBeforePagination.length}
      />
    </div>
  );
};
