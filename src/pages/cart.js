import React, { useState } from 'react';
import CartItem from './CartItem';
import { useCart } from '../context/CartContext';
import './cart.css';

const Cart = () => {
  const { cartItems } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    date: '',
    time: '',
    phoneNumber: ''
  });
  const [formErrors, setFormErrors] = useState({
    fullName: '',
    date: '',
    time: '',
    phoneNumber: ''
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {};
    const phoneRegex = /^[+]?[\d\s\-()]{10,15}$/;

    if (!formData.fullName) {
      errors.fullName = 'Поле ФИО обязательно для заполнения';
    }

    if (!formData.date) {
      errors.date = 'Поле Дата обязательно для заполнения';
    }

    if (!formData.time) {
      errors.time = 'Поле Время обязательно для заполнения';
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Поле Номер телефона обязательно для заполнения';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Номер телефона должен быть в правильном формате';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowOrderForm(false);
      setOrderConfirmed(true);
    }
  };

  return (
    <div className="cart-container">
      <h1>Корзина</h1>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))
        ) : (
          <div>Корзина пуста</div>
        )}
      </div>
      <div className="cart-footer">
        {cartItems.length > 0 && (
          <button className="order-button" onClick={() => setShowOrderForm(true)}>
            Перейти к оформлению
          </button>
        )}
      </div>

      {showOrderForm && (
        <div className="order-form-modal">
          <div className="order-form-container">
            <h2>Оформление заказа</h2>
            <form onSubmit={handleSubmit}>
              <label>
                ФИО:
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.fullName && <span className="error">{formErrors.fullName}</span>}
              </label>
              <label>
                Дата:
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.date && <span className="error">{formErrors.date}</span>}
              </label>
              <label>
                Время:
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.time && <span className="error">{formErrors.time}</span>}
              </label>
              <label>
                Номер телефона:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  pattern="[\d\+\(\)\-\s]{10,15}"
                  required
                />
                {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
              </label>
              <button type="submit" className="submit-button">Оформить заказ</button>
            </form>
            <button onClick={() => setShowOrderForm(false)} className="close-button">
              Закрыть
            </button>
          </div>
        </div>
      )}

      {orderConfirmed && (
        <div className="order-confirmation-modal">
          <div className="order-confirmation-container">
            <h2>Заказ оформлен!</h2>
            <p>Спасибо за ваш заказ!</p>
            <p>Ваши данные:</p>
            <p>ФИО: {formData.fullName}</p>
            <p>Дата: {formData.date}</p>
            <p>Время: {formData.time}</p>
            <p>Телефон: {formData.phoneNumber}</p>
            <button onClick={() => setOrderConfirmed(false)} className="close-confirmation-button">
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
