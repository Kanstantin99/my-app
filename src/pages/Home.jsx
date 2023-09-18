import Card from "../components/Card";

function Home({
  arr,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content">
      <div className="upContent">
        <h1 className="allSneakers">
          {searchValue ? `Поиск по запросу '${searchValue}'` : "Все кроссовки"}
        </h1>
        <div className="searchBlock">
          <img src="/img/search.svg" alt="Search" />
          <input
            onChange={onChangeSearchInput}
            className="searchInput"
            placeholder="Поиск ..."
          />
        </div>
      </div>
      <div className="sneakers">
        {arr
          .filter((obj) =>
            obj.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj) => (
            <Card
              key={obj.id}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus={() => onAddToCart(obj)}
              onFavorite={() => onAddToFavorite(obj)}
            />
          ))}
      </div>
    </div>
  );
}
export default Home;
