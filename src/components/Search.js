import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Search = () => {
  const context = useContext(UserContext);

  return (
    <div className="Search">
      <input style={{backgroundColor: "#F8F8FF",border:"2px solid #e3f2fd",borderRadius:"5px"}}
        name="serch"
        placeholder="search..."
        value={context.search}
        onChange={context.handleChange}
        type="text"
      ></input>
    </div>
  );
};

export default Search;
