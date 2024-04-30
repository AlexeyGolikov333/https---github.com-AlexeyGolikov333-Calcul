import React from 'react';
import './AddProductBox.css';

function AddProductBox({ setModalBox, setMessage }) {

  function AddProduct() {
    const header = document.getElementById('header').value
    const price = document.getElementById('price').value
    
    const validPrice= price.match(/^\d+$/)

    let message

    if (!validPrice || header.length === 0) {
      document.getElementById('addProductError').innerText = "Вы ввели данные неправильно!"
      return
    }

    const data = {
      header: header,
      price: price
    }

    // console.debug(data)

    const api = 'http://127.0.0.1:9001/products/add'

    fetch (api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((result) => result.json())
      .then((result) => message = result.message)

    setTimeout(() => {
      setMessage(message)
      setModalBox('MessageBox')
    }, 100)
  }

  return (
    <div className="AddProductBox">
      <h3>Добавление калькулятора:</h3>
      <input id='header' placeholder='Наименование калькулятора' type='text' />
      <input id='price' placeholder='Процентная ставка' type='text' />
      <button id='send' onClick={() => AddProduct()}>Добавить</button>
      <p id='addProductError'></p>
    </div>
  );
}

export default AddProductBox;