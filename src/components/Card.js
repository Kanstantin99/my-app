import React from "react";

function Card({ onFavorite, imageUrl, title, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className="card">
      <div className="like" onClick={onFavorite}>
        <img src="/img/heartUnliked.svg" alt="heart" />
      </div>
      <img width={133} height={112} src={imageUrl} />
      <h5 className="description">{title}</h5>
      <div className="cardBottom">
        <div>
          <span className="price">Цена : </span>
          <b className="priceNumber">{price}</b>
        </div>
        <button className="button" onClick={onClickPlus}>
          <img
            width={11}
            height={11}
            src={
              isAdded ? "/img/buttonChecked.svg" : "/img/buttonUnchecked.svg"
            }
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
