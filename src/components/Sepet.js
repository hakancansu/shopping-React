import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Sepet = () => {
  const context = useContext(UserContext);
  const money = context.sepet.reduce(
    (total, item) => total + item.Price * item.count,
    0
  );
  console.log(context.sepet.length);
  return (
    <div>
      {context.sepet.length > 0 ? (
        <div style={{ display: "flex" }}>
          <div className="Sepet">
            <div className="Bilgiler">
              <h6>urun</h6>
              <h6 className="Aaa">fiyat</h6>
              <h6 className="Aaa">adet</h6>
              <h6 className="Aaa">toplam</h6>
            </div>
            {context.sepet.map((item) => (
              <div className="sepetBook">
                <img style={{ width: "60px" }} src={item.image} alt="" />
                <h4>{item.Name}</h4>
                <h5>{item.Price}</h5>

                <h5>{item.count}</h5>

                <h5>{item.Price * item.count}</h5>

                <button
                  onClick={() => {
                    context.sepettenCikart(item);
                  }}
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <div className="sepetBilgiler" style={{}}>
            <h3>ürün çeşidi</h3>

            {context.sepet.length}
            <hr></hr>
            <h3>ürün tutari</h3>
            <h4>{money.toFixed(2)} TL</h4>
            <hr></hr>
            <button>satın al</button>
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>sepette ürün yok</h1>
      )}
    </div>
  );
};

export default Sepet;
