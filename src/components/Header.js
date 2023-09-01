function Header(props) {
  return (
    <header className="header">
      <div className="headerLeft">
        <img className="logo" width={40} height={40} src="/img/logo.png" />
        <div className="headerInfo">
          <h3 className="reactSneakers">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li onClick={props.onClickCart} className="info">
          <img width={18} height={18} src="/img/cart.svg" />
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
