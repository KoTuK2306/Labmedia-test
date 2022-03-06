import { Title } from "./components/Title";
import { SearchBlock } from "./components";
import { UsersBlock } from "./components/UsersBlock";
import { useState } from "react";

export const App = () => {
  const [filtering, setFiltering] = useState("");
  return (
    <div>
      <Title />
      <SearchBlock setFiltering={setFiltering} />
      <UsersBlock filtering={filtering} />
    </div>
  );
};
