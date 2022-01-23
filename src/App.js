import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    fetch("https://61e7df23e32cd90017acbe2b.mockapi.io/items")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setItems(json);
      });
      axios.get("https://61e7df23e32cd90017acbe2b.mockapi.io/items").then(res =>{
        setItems(res.data);
      });
      axios.get("https://61e7df23e32cd90017acbe2b.mockapi.io/cart").then(res =>{
        setCartItems(res.data);
      });
  }, []);

  const onAddToCard = (obj) => {
    axios.post("https://61e7df23e32cd90017acbe2b.mockapi.io/cart",obj);
    setCartItems([...cartItems, obj]);
  };

  const onAddToFavorites = (favor) => {
    axios.post("https://61e7df23e32cd90017acbe2b.mockapi.io/favorites",favor);
    setFavoriteItems((prev)=>[...prev,favor]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61e7df23e32cd90017acbe2b.mockapi.io/cart/${id}`);
   setCartItems((prev)=> prev.filter(item => item.id !== id));
  };
  const onChangeSearchInput = (event) => {
    //console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Search in ${searchValue}` : "All sneakers"}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.name.includes(searchValue))
            .map((item) => (
              <Card
                key={item.name}
                title={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(favor) => onAddToFavorites(favor)}
                onPlus={(obj) => onAddToCard(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
