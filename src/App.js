import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React,{useState, useEffect} from 'react';



function App() {
 const [items, setItems]=useState([]);
 const [cartItems, setCartItems]=useState([]);
 const [cartOpened, setCartOpened]=useState(false);


 useEffect(()=> {fetch('https://61e7df23e32cd90017acbe2b.mockapi.io/items').then(response =>{
  return response.json();
}).then(json =>{
  setItems(json);
} );
}, []);

const onAddToCard = (obj) =>{
  setCartItems([...cartItems,obj]);

}
 
  return (
    
    <div className="wrapper clear">
      
      
     {cartOpened ? <Drawer items={cartItems} onClose ={()=> setCartOpened(false)} /> : null}
      <Header onClickCart = {()=> setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item)=>(
          <Card 
          title={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          onClickFavorite ={()=> console.log('Add to favorites')}
          onPlus={(obj)=> onAddToCard(obj)}/>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;