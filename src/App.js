import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Slayder from './components/Slayder/';




function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://61c18b869dbcca0017c81f57.mockapi.io/items').then((res) => {
      setItems(res.data)
    });
    axios.get('https://61c18b869dbcca0017c81f57.mockapi.io/cart').then((res) => {
      setCartItems(res.data)
    });
  }, []);

  // пригодится для создания админки и заполнение новым товаром
  const onAddToCart = (obj) => {
    axios.post('https://61c18b869dbcca0017c81f57.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);

  };


  const onAddToFavorite = (obj) => {
    axios.post('https://61c18b869dbcca0017c81f57.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61c18b869dbcca0017c81f57.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
    //alert(id)
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };




  return (

    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <Slayder/>
      

      <div className="content p-40">

        <div className="d-flex justify-between align-center mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все наушники'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p"
                src="img/btn-remove.svg"
                alt="Clear"
              />)}
            <input value={searchValue} onChange={onChangeSearchInput} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap ">


          {items
            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imgUrl={item.imgUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}


        </div>
      </div>
    </div>

  );
}

export default App;
