import Categories from "./Categories";
import Products from "./Products";

const AnaSayfa = () => {
  return (
    <div style={{ display: "flex", marginRight: "10%", marginLeft: "10%" }}>
      <div style={{ width: "25%" }}>
        <Categories></Categories>
      </div>
      <div style={{ width: "75%"}}>
        <Products></Products>
      </div>
    </div>
  );
};

export default AnaSayfa;
