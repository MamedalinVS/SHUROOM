import React, { useState } from 'react';
import './CartItem.css';
import { useCart } from '../context/CartContext'; 

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { removeFromCart, addToCart } = useCart();

  const decreaseQuantity = () => {
    if (quantity === 1) {
      removeFromCart(item.title); 
    } else {
      setQuantity(quantity - 1);
      updateCartItem(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    updateCartItem(quantity + 1);
  };

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    if (value >= 1 && value <= 999) {
      setQuantity(Number(value));
      updateCartItem(Number(value));
    }
  };

  const updateCartItem = (newQuantity) => {
    const updatedItem = { ...item, quantity: newQuantity };
    addToCart(updatedItem);
  };

  const handleDelete = () => {
    removeFromCart(item.title); 
  };

  const displayPrice = () => {
    let finalPrice = Number(item.price.replace(/[^\d.-]/g, ''));
    return `${finalPrice * quantity}₽`;
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-image" />
      <h3 className="cart-title">{item.title}</h3>
      <div className="cart-price">{displayPrice()}</div>

      <div className="cart-actions">
        <div className="cart-quantity">
          <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
          <input
            type="number"
            className="quantity-input"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="999"
          />
          <button className="quantity-btn" onClick={increaseQuantity}>+</button>
        </div>
          <button className="delete-btn" onClick={handleDelete}>
            Удалить
          </button>

      </div>
    </div>
  );
};

export default CartItem;
