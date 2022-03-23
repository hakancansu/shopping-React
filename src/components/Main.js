import { Routes, Route } from "react-router-dom";
import Book from "./Book";
import AnaSayfa from "./AnaSayfa";
import Sepet from "./Sepet";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<AnaSayfa />} />
        <Route path="/book" element={<Book />} />
        <Route path="/sepet" element={<Sepet />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
