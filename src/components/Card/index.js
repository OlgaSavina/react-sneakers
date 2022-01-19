import React, {useState} from 'react';
import  styles from './Card.modules.scss';

function Card({onClickFavorite,onPlus,price,imageUrl,title}) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({price,imageUrl,title});
    setIsAdded(!isAdded);
  }
    return(
        <div className={styles.card}>
        <div className={styles.favorite}  onClick={onClickFavorite}>
          <img src="/img/unliked.svg" alt="Unliked" />
        </div>
        <img width={133} height={112} src={imageUrl} alt="Sneakers" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price}</b>
          </div>
          <button className="button" onClick={onClickPlus}>
            <img onClick={onClickPlus} width={11} height={11} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } alt="Plus" />
          </button>
        </div>
      </div>

    );
}

export default Card;