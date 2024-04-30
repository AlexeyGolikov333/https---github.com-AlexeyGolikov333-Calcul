import React from 'react';
import './Product1.css';



function Product({ id, image, header, price, 
  setBasket, setBasketPrice, setBasketQty, basket,
   setMessage, setModalBox, token }) {

    const product = {
      id: id,
      image: image,
      header: header,
      price: price
    }
  
    function addToBasket() {
      const index = basket.findIndex(value => value.id === product.id)
      
      if (index === -1) {
        setBasket(prevState => [...prevState, product])
        setBasketPrice(current => current + product.price)
        setBasketQty(current => current + 1)
      } else {
        return
      }
  
      setTimeout(() => {
        setMessage('Калькулятор сохранено в "Моих калькуляторах"')
        setModalBox('MessageBox')
      }, 100)
    }
  
    function AddToBasketButton() {
      if (token !== null) {
        return (
          <>
            <button className='buy' onClick={() => addToBasket()}>Сохранить в "Мои калькуляторы"</button>
          </>
        )
      } else {
        return (
          <>
            <p>Для добавления товара в "Мои калькуляторы" авторизуйтесь!</p>
          </>
        )
      }
    }
   
    

    const monthlyRate = product.price / 12 / 100;

    const MMM = product.price;
      
    const uho = () => {       
      

     let i = 0;
      
     if (MMM === 9.6) i=0;
     if (MMM === 3.5) i=1;
     if (MMM === 14.5) i=2;
     if (MMM === 10.5) i=3;
     if (MMM === 16.8) i=4;
     if (MMM === 20.2) i=5;

     const lname = document.getElementsByName("name");
     const lnum = document.getElementsByName("num");
     const lnu = document.getElementsByName("nu");


      const n = parseInt(lname[i].value, 10);
      const p = parseInt(lnum[i].value, 10);
      const d = parseInt(lnu[i].value, 10);


   
      if (isNaN(n) || isNaN(p) || isNaN(d)) {
        alert("Заполните все поля");
        return;
      }    
      

      const sum = n - d;
      const rooy = Math.pow((1 + monthlyRate), p * 12);
      const payment = sum * monthlyRate * rooy / (rooy - 1);
      const income = payment * 2.5;
  
      
      const lsum = document.getElementsByName("sum");
      const lrooy = document.getElementsByName("rooy");
      const lpayment = document.getElementsByName("payment");
      const lincome = document.getElementsByName("income");
  
      
      lsum[i].value = sum.toFixed(0);;
      lrooy[i].value = rooy.toFixed(2);
      lpayment[i].value = payment.toFixed(0);
      lincome[i].value = income.toFixed(0);   

    };
  
    const sendDataByEmail = () => {
    
     
      const costOfHouse = document.getElementById("name").value;
      const loanDurationInYears = document.getElementById("num").value;
      const downPayment = document.getElementById('nu').value;
      const rooy = document.getElementById('rooy').value;
      const sum = document.getElementById('sum').value;
      const payment = document.getElementById('payment').value;
      const income = document.getElementById('income').value;
  
      const userInputs = { costOfHouse, loanDurationInYears, downPayment, sum, payment, rooy, income };
  
      const senderEmail = 'al_v_golikov@mail.ru';//1 Получение адреса электронной почты отправителя
      const recipientEmail = 'al_v_golikov@mail.ru';// 2. Получение адреса электронной почты получателя
      const emailBody = `Стоимость кредита: ${userInputs.costOfHouse}\nНа какой срок: ${userInputs.loanDurationInYears}\nПервоначальный взнос: ${userInputs.downPayment}\nСумма кредита: ${userInputs.sum}\nОбщая ставка: ${rooy}\nЕжемесячный платеж: ${payment}\nНеобходимый доход: ${income}\nОтправлено с почты: ${senderEmail}`;
  
      window.location.href = `mailto:${recipientEmail}?subject=Credit%20Calculator%20Results&body=${encodeURIComponent(emailBody)}`;
    };
  
 

return (
  <div className="Product">
    <h1>{product.header}</h1>
    <p>{product.price} %</p>         
    <div className="uho">
             
         
        <p>Введите стоимость кредита в руб.</p>
        <input type="number" id="name" name="name" required />
  
        <p>Введите срок кредитования в годах</p>
        <input type="number" id="num" name="num" required />
  
        <p>Первоначальный взнос в руб.</p>
        <input type="number" id="nu" name="nu" />
  
        <button onClick={uho}>Рассчитать</button>
  
        <h3>Итоговый расчет:</h3>
  
        <p>Сумма кредита, руб.</p>
        <input type="number" id="sum" name="sum" required />
  
        <p>Общая ставка</p>
        <input type="number" id="rooy" name="rooy" required />
  
        <p>Ежемесячный платеж, руб.</p>
        <input type="number" id="payment" name="payment" required />
  
        <p>Необходимый доход, руб.</p>
        <input type="number" id="income" name="income" />
  
        <button onClick={sendDataByEmail}>Отправить на e-mail</button>
      </div>
    
    <AddToBasketButton />
  </div>
);
};

export default Product;