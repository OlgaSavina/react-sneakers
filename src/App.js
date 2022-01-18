import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React,{useState} from 'react';


const arr= [
{name:"aaaaa", price:123, imageUrl:"/img/sneakers/1.jpg"},
{name:"bbbbb", price:456, imageUrl:"/img/sneakers/2.jpg"},
{name:"ccccc", price:789, imageUrl:"/img/sneakers/3.jpg"},
{name:"ddddd", price:712, imageUrl:"/img/sneakers/4.jpg"},
{name:"eeeee", price:234, imageUrl:"/img/sneakers/5.jpg"},
{name:"fffff", price:456, imageUrl:"/img/sneakers/6.jpg"},
];

function App() {
 const [cartOpened, setCartOpened]=useState(false);
  return (
    
    <div className="wrapper clear">
      
      
     {cartOpened ? <Drawer onClose ={()=> setCartOpened(false)} /> : null}
      <Header onClickCart = {()=> setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj)=>(
          <Card 
          title={obj.name}
          price={obj.price}
          imageUrl={obj.imageUrl}
          onClickFavorite ={()=> console.log('Add to favorites')}
          onClickPlus={()=> console.log(obj)}/>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;