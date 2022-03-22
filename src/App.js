import React, { useState, useEffect } from "react";
import axios from "axios";
import { Title } from "./components/Title";
import { SearchBlock } from "./components";
import { UsersBlock } from "./components/UsersBlock";

export const FilteringContext = React.createContext({});

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
      <FilteringContext.Provider value={{ filtering: filtering, setFiltering: setFiltering }}>
        <SearchBlock users={users} />
        <UsersBlock users={users} setUsers={setUsers} />
      </FilteringContext.Provider>
    </div>
  );
};
