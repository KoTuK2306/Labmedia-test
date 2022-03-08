import { Title } from "./components/Title";
import { SearchBlock } from "./components";
import { UsersBlock } from "./components/UsersBlock";
import { useState, useEffect } from "react";
import axios from "axios";

export const App = () => {
  const [filtering, setFiltering] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users");
      setUsers(result.data);
    };
    fetchdata();
  }, []);

  return (
    <div>
      <Title />
      <SearchBlock users={users} setUsers={setUsers} setFiltering={setFiltering} />
      <UsersBlock users={users} setUsers={setUsers} filtering={filtering} />
    </div>
  );
};
