import Card from "../components/Card";

function Favorites({ items, onAddToFavorite }) {
  if (!items) {
    return null;
  }
  return (
    <div className="content">
      <div className="upContent">
        <h1>Мои Закладки</h1>
      </div>
      <div className="sneakers">
        {items.map((obj) => (
          <Card
            key={obj.id}
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            favorited={true}
            onFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
