import React from "react";

import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/sneaker1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imageUrl: "/img/sneakers/sneaker2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 13600,
    imageUrl: "/img/sneakers/sneaker3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 11600,
    imageUrl: "/img/sneakers/sneaker4.jpg",
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 14600,
    imageUrl: "/img/sneakers/sneaker5.png",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 17600,
    imageUrl: "/img/sneakers/sneaker6.png",
  },
  {
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 8600,
    imageUrl: "/img/sneakers/sneaker7.png",
  },
  {
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: 9600,
    imageUrl: "/img/sneakers/sneaker8.png",
  },
  {
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    price: 10600,
    imageUrl: "/img/sneakers/sneaker9.png",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: 17600,
    imageUrl: "/img/sneakers/sneaker10.png",
  },
];

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const onAddToCart = (obj) => {
    console.log(1111111);
    console.log(obj);
    setCartItems([...cartItems, obj]);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="upContent">
          <h1 className="allSneakers">Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="Search" />
            <input className="searchInput" placeholder="Поиск ..." />
          </div>
        </div>
        <div className="sneakers">
          {arr.map((obj) => (
            <Card
              key={obj.title}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log("gvdvvcjh")}
              onPlus={() => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
