import React, { useState } from 'react';

const PizzaMenu = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const pizzas = [
    { id: 1, name: 'Margherita', price: 8, image: 'src/images.jpg/margherita.jpg' },
    { id: 2, name: 'Pepperoni', price: 10, image: 'src/images.jpg/pepperoni.jpg' },
    { id: 3, name: 'Vegetarian', price: 9, image: 'src/images.jpg/vegetarian.jpg' },
  ];

  return (
    <div>
      <h2>Pizza Menu</h2>
      <ul>
        {pizzas.map(pizza => {
      return (
          <li key={pizza.id}>
            <img src={pizza.image} alt={pizza.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
            {pizza.name} - ${pizza.price}
            <button onClick={() => addToCart(pizza)}>Add to Cart</button>
          </li>
        )   
        }
        )}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => {
          return (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        )
        }
        )}
      </ul>
    </div>
  );
};

export default PizzaMenu;
