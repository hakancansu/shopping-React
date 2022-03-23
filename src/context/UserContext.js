import React, { useState, createContext, useEffect } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [urunler, setUrunler] = useState([]);
  const [sepet, setSepet] = useState([]);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const handleChange = (event) => setSearch(event.target.value);

  

  const addToCart = (book) => {
    // console.log(book);
    // setSepet({
    //   ...sepet,
    //   sepet: sepet.find((cartItem) => cartItem.id === book.id)
    //     ? sepet.map((cartItem) =>
    //         cartItem.id === book.id
    //           ? { ...cartItem, count: cartItem.count + 1 }
    //           : cartItem
    //       )
    //     : [...sepet, { ...book, count: 1 }],
    // });
    const checkBasket = sepet.find((item) => item.id === book.id);

    if (checkBasket) {
      checkBasket.count += 1;
      setSepet([...sepet.filter((item) => item.id !== book.id), checkBasket]);
    } else {
      setSepet([...sepet, { ...book, count: 1 }]);
    }
  };

  const sepettenAzalt = (book) => {
    const checkBasket = sepet.find((item) => item.id === book.id);

    if (checkBasket.count > 0) {
      checkBasket.count -= 1;
      setSepet([...sepet.filter((item) => item.id !== book.id), checkBasket]);
    }
  };

  const sepettenCikart = (book) => {
    const checkBasket = sepet.find((item) => item.id === book.id);
    if (checkBasket) {
      checkBasket.count = 0;
      setSepet([...sepet.filter((item) => item.id !== book.id)]);
    }
  };

  useEffect(() => {
    urunGetir();
  }, []);

  const urunGetir = (kategoriId) => {
    let url = "http://localhost:3000/products";

    if (kategoriId) {
      url = url + "?kategoriId=" + kategoriId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setUrunler(response);
      });
  };

  const kategoriDegistir = (kategori) => {
    urunGetir(kategori.id);
  };

  const anaSayfayaDon = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((response) => {
        setUrunler(response);
      });
  };

  return (
    <UserContext.Provider
      value={{
        search,
        anaSayfayaDon,
        handleChange,
        urunler,
        setUrunler,
        kategoriDegistir,
        addToCart,
        sepet,
        sepettenAzalt,
        sepettenCikart,
        total,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
