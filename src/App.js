import Main from "./components/Main";
import Search from "./components/Search";

import { UserProvider } from "./context/UserContext";

import "./styles.css";


function App() {
  return (
    <UserProvider>
      <Search></Search>
      <Main></Main>
      
      
      
    </UserProvider>
  );
}

export default App;
