import { Title } from "./components/Title";
import { SearchBlock } from "./components";
import { UsersBlock } from "./components/UsersBlock";

export const App = () => {
  return (
    <div>
      <Title />
      <SearchBlock />
      <UsersBlock />
    </div>
  );
};
