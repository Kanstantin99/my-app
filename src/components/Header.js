import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header({ onClickCart, cartItems }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartItems) {
      const calculateTotalPrice = () => {
        let total = 0;
        cartItems.forEach((obj) => {
          total += obj.price * obj.quantity;
        });
        return total;
      };

      setTotalPrice(calculateTotalPrice());
    }
  }, [cartItems]);
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="headerLeft">
          <img className="logo" width={40} height={40} src="/img/logo.png" />
          <div className="headerInfo">
            <h3 className="reactSneakers">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="headerRight">
        <li onClick={onClickCart} className="info">
          <img width={18} height={18} src="/img/cart.svg" />
          <span> {totalPrice}</span>
        </li>

        <li className="info">
          <Link to="/favorites">
            <img width={18} height={18} src="/img/favorite.svg" />
          </Link>

          <span></span>
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
