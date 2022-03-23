import axios from "axios";
import { useState, useEffect } from "react";
import { Title } from "./components/Title";
import { SearchBlock } from "./components";
import { UsersBlock } from "./components/UsersBlock";
import { SearchContext } from "./modules/contexts/SearchContext";

export const App = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users");
      setUsers(result.data);
    };
    fetchdata();
  }, []);

  return (
    <>
      <Title />
      <SearchContext.Provider value={{ search, setSearch }}>
        <SearchBlock users={users} setUsers={setUsers} />
        <UsersBlock users={users} setUsers={setUsers} />
      </SearchContext.Provider>
    </>
  );
};
