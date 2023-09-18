function Drawer({ onClose, items }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="buscet">Корзина</h2>
        <img
          onClick={onClose}
          className="remoteBtn"
          src="/img/remoteBtn.svg"
          alt="Close"
        />
        <div className="items">
          {items &&
            items.map((obj) => (
              <div className="cartItem">
                <img
                  className="sneakerInCart"
                  width={70}
                  height={70}
                  src={obj.imageUrl}
                  alt="Sneakers"
                />
                <div>
                  <p className="descriptionInCart">{obj.title}</p>
                  <b className="priceInCart">{obj.price}</b>
                </div>
              </div>
            ))}
        </div>

        <button className="confirmPay">Оформить Заказ</button>
      </div>
      <div></div>
    </div>
  );
}
export default Drawer;
