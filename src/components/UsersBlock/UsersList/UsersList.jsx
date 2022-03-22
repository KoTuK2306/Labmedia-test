import { useContext, useState } from "react";
import { User } from "./User";
import { Pagination } from "../../Pagination/Pagination";
import { usersPerPage } from "../../../constants/usersPerPage";
import { FilteringContext } from "../../../App";
import classes from "./UsersList.module.css";

export const UsersList = ({ users, setUsers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const contextValues = useContext(FilteringContext);

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredUsersBeforePagination = users.filter((user) => {
    return (
      user.username.toLowerCase().includes(contextValues.filtering.toLowerCase()) ||
      user.email.toLowerCase().includes(contextValues.filtering.toLowerCase())
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
        itemsPerPage={usersPerPage}
        totalItems={contextValues.filtering === "" ? users.length : filteredUsersBeforePagination.length}
      />
    </div>
  );
};
