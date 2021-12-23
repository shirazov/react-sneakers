import React from 'react';
import styles from './Card.module.scss';
console.log(styles);

function Card({onFavorite, imgUrl, title, price, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, imgUrl, price});
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({title, imgUrl, price});
        setIsFavorite(!isFavorite);
    };
    

    return (
        <div className={styles.card}>
            <div className="favorite">
                <img 
                onClick={onClickFavorite} 
                className="cu-p"  
                src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} 
                alt="Unliked"/>
            </div>
            
            <img className="m-10" width={134}  src={imgUrl} alt="1" />
            
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>

                <img 
                className={styles.plus} 
                onClick={onClickPlus} 
                src={isAdded ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"} 
                alt="Plus" 
                />
                
            </div>
        </div>
    );
}

export default Card;