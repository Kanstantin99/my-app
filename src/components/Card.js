import React from "react";

function Card({
  onFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <div className="like" onClick={onClickFavorite}>
        <img
          src={isFavorite ? "/img/heartLiked.svg" : "/img/heartUnliked.svg"}
        />
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
