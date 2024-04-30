import React, {useState, useEffect} from 'react';
import './Main.css';
import Product from '../components/Propuct1';
import image from '../images/product1.jpg';





function Main({ setBasket, setBasketPrice, setBasketQty, basket, setMessage, setModalBox, token }) {

  const[products, setProducts] = useState([]) 

  useEffect(() => {
    
    const api = 'http://localhost:9001/products'

    fetch(api)
    .then(result => result.json())
    .then((result) => {
          console.log(result)
          setProducts(result.data)
    })

  }, [])

  

  function AddProduct() {
    if (token !== null) {
      return (
        <>
          <button className='addProduct' onClick={() => setModalBox('AddProductBox')}>Добавить калькулятор</button>
        </>
      )
    }
  }

  
  return (
    <div className="Main">
      <AddProduct/>
     { products.map((item) => <Product key={item._id} id={item._id} header={item.header} image={image} price={item.price}
        setBasket={setBasket} setBasketPrice={setBasketPrice} setBasketQty={setBasketQty}
        basket={basket} setMessage={setMessage} setModalBox={setModalBox} token={token}
      />)} 
      
    </div>
  );
}

export default Main;