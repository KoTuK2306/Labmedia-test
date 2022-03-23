import { useContext, useState } from "react";
import { User } from "./User";
import { Pagination } from "../../Pagination/Pagination";
import { SearchContext } from "../../../modules/contexts/SearchContext";
import { usersPerPage } from "../../../constants/usersPerPage";
import { ModalProvider } from "../../../modules/providers/ModalProvider";
import { ConfirmationModal } from "../../ConfirmationModal";
import classes from "./UsersList.module.css";

export const UsersList = ({ users, setUsers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userId, setUserId] = useState(null);
  const { search } = useContext(SearchContext);

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredUsersBeforePagination = users.filter(({ username, email }) => {
    return username.toLowerCase().includes(search.toLowerCase()) || email.toLowerCase().includes(search.toLowerCase());
  });

  const deleteUser = () => {
    const filteredUsers = users.filter((user) => user.id !== userId);

    setUsers(filteredUsers);
    setUserId(null);
  };

  const filteredUsers = filteredUsersBeforePagination.slice(firstUserIndex, lastUserIndex);
  return (
    <ModalProvider>
      <div className={classes.usersList}>
        <div className={classes.title}>
          <p>Имя пользователя</p>
          <p>E-mail</p>
          <p>Дата регистрации</p>
          <p>Рейтинг</p>
        </div>
        {filteredUsers.map((user) => (
          <User key={user.id} setUserId={setUserId} user={user} />
        ))}
        <Pagination
          currentPage={currentPage}
          paginate={paginate}
          itemsPerPage={usersPerPage}
          totalItems={search === "" ? users.length : filteredUsersBeforePagination.length}
        />
      </div>
      <ConfirmationModal deleteUser={deleteUser} />
    </ModalProvider>
  );
};
