import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useLocation } from "react-router-dom";

const Book = () => {
  const context = useContext(UserContext);
  const { state } = useLocation();

  const checkBasket = context.sepet.find(
    (item) => item.id === state.urundata.id
  );

  console.log(checkBasket)

  return (
    <div>
      <div className="Book">
        <div className="divİmg">
          <img src={state.urundata.image} alt="" />
        </div>
        <div className="bilgiler">
          <h4>kitap adi: {state.urundata.Name}</h4>
          <h4>kitap fiyati: {state.urundata.Price}</h4>
          <h4> yazar: {state.urundata.author}</h4>
          <button
            onClick={() => {
              context.sepettenAzalt(state.urundata);
            }}
          >
            -
          </button>
          <span style={{ margin: "10px" }}>
            adet:{(checkBasket && checkBasket.count) || 0}{" "}
          </span>
          <button
            onClick={() => {
              context.addToCart(state.urundata);
            }}
          >
            +
          </button>

          <button
            style={{ display: "block" }}
            onClick={() => context.sepettenCikart(state.urundata)}
          >
            sepetten çıkar
          </button>
          <h4>
            toplam tutar:
            {(checkBasket &&
              (checkBasket.count * state.urundata.Price).toFixed(2)) ||
              0}
          </h4>
          <h4>Hanım aga kitap evi</h4>
        </div>
      </div>
    </div>
  );
};

export default Book;
