import { useContext, useEffect } from "react";
import React, { useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Categories = () => {
  const [kategoriler, setKategoriler] = useState([]);
  const context = useContext(UserContext);

  useEffect(() => {
    kategoriGetir();
  }, []);

  const kategoriGetir = () => {
    fetch("http://localhost:3000/categories")
      .then((responsive) => responsive.json())
      .then((responsive) => setKategoriler(responsive));
  };

  return (
    <div>
      <div className="kategoriler">
        <h4>Hanımağa kitap evi</h4>
        <img
          className="resim"
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
        <h4 onClick={() => context.anaSayfayaDon()}>Ana sayfa</h4>
        <Link to={"/sepet"}>
          <h5>sepet</h5>
        </Link>
        {kategoriler.map((kategori) => (
          <div onClick={() => context.kategoriDegistir(kategori)}>
            {kategori.categoryName}
          </div>
        ))}
        <h4>hakan cansu</h4>
      </div>
    </div>
  );
};

export default Categories;
