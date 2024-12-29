  import React, { useState } from 'react';
  import './Block.css';
  import cartIcon from './images/cart.png';
  import { useCart } from '../../context/CartContext';

  const Block = ({ title, description, image, price, isSeasonHit }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const decreaseQuantity = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };

    const handleQuantityChange = (event) => {
      const value = event.target.value;
      if (value >= 1 && value <= 999) {
        setQuantity(Number(value));
      }
    };

    const displayPrice = () => {
      let finalPrice = Number(price.replace(/[^\d.-]/g, ''));
      return `${finalPrice * quantity}₽`;
    };

    const handleAddToCart = () => {
      const item = { title, description, image, price, quantity };
      addToCart(item);
    };

    return (
      <div className="block">
        {isSeasonHit && <div className="block-header">Хит продаж</div>}
        <img src={image} alt={title} className="block-image" />
        <h3 className="block-title">{title}</h3>
        <p className="block-description">{description}</p>
        <div className="block-price">{displayPrice()}</div>

        <div className="block-actions">
          <div className="block-quantity">
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
          <button className="buy-btn" onClick={handleAddToCart}>
            <img src={cartIcon} alt="Корзина" className="cart-icon" />
          </button>
        </div>
      </div>
    );
  };

  export default Block;
