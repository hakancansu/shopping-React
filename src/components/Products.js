import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Products = () => {
  const context = useContext(UserContext);
  console.log(context.Urunler);
  return (
    
        <div className="Urunler">
      
      {context.urunler
        .filter((urun) =>
          urun.Name.toLowerCase().includes(context.search.toLowerCase())
        )
        .map((urun) => (
          <Link to={"/book?="+urun.Name} state={{urundata:urun}} style={{textDecoration:"none"}} >
          <div>
            <img src={urun.image} alt="" />
            <h4>{urun.Name}</h4>
            <h4>{urun.Price}</h4>
            <h4>{urun.author}</h4>
          </div>
          </Link>
        ))}

     
    </div>

    
  );
};

export default Products;
