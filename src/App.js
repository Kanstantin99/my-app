import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

import { Routes, Route } from "react-router-dom";
const arr = [
  {
    id: "1",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/sneaker1.jpg",
  },
  {
    id: "2",
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imageUrl: "/img/sneakers/sneaker2.jpg",
  },
  {
    id: "3",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 13600,
    imageUrl: "/img/sneakers/sneaker3.jpg",
  },
  {
    id: "4",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 11600,
    imageUrl: "/img/sneakers/sneaker4.jpg",
  },
  {
    id: "5",
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 14600,
    imageUrl: "/img/sneakers/sneaker5.png",
  },
  {
    id: "6",
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 17600,
    imageUrl: "/img/sneakers/sneaker6.png",
  },
  {
    id: "7",
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 8600,
    imageUrl: "/img/sneakers/sneaker7.png",
  },
  {
    id: "8",
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: 9600,
    imageUrl: "/img/sneakers/sneaker8.png",
  },
  {
    id: "9",
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    price: 10600,
    imageUrl: "/img/sneakers/sneaker9.png",
  },
  {
    id: "10",
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: 17600,
    imageUrl: "/img/sneakers/sneaker10.png",
  },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
    setTotalPrice(totalPrice + obj.price);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const [favorites, setFavorites] = React.useState([]);
  const onAddToFavorite = (obj) => {
    setFavorites([...favorites, obj]);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <Carousel showThumbs={false} showStatus={false}>
        <div>
          <img src="/img/carousel1.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="/img/carousel2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="/img/carousel3.jpg" alt="Image 3" />
        </div>
      </Carousel>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              arr={arr}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/favorites"
          exact
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
