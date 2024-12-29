import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import locationIcon from './images/location.png';
import './nav.css';
import { useCart } from '../context/CartContext';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('г. Екатеринбург, ул. Готвальда, д. 6');
  const dropdownRef = useRef(null);
  const { getTotalItems, getTotalPrice } = useCart();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAddressChange = (address) => {
    setSelectedAddress(address);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="address-selector" ref={dropdownRef}>
          <div className="address-dropdown" onClick={toggleDropdown}>
            <img src={locationIcon} alt="Location" className="location-icon" />
            <span>{selectedAddress}</span>
            <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              <div className="dropdown-item" onClick={() => handleAddressChange('г. Екатеринбург, ул. Готвальда, д. 6')}>г. Екатеринбург, ул. Готвальда, д. 6</div>
              <div className="dropdown-item" onClick={() => handleAddressChange('г. Екатеринбург, ул. Академика-Сахарова, д. 12')}>г. Екатеринбург, ул. Академика-Сахарова, д. 12</div>
              <div className="dropdown-item" onClick={() => handleAddressChange('г. Екатеринбург, ул. Малышева, д. 18')}>г. Екатеринбург, ул. Малышева, д. 18</div>
              <div className="dropdown-item" onClick={() => handleAddressChange('г. Екатеринбург, ул. Мира, д. 24')}>г. Екатеринбург, ул. Мира, д. 24</div>
              <div className="dropdown-item" onClick={() => handleAddressChange('г. Екатеринбург, ул. Проспект-Космонавтов, д. 30')}>г. Екатеринбург, ул. Проспект-Космонавтов, д. 30</div>
            </div>
          </div>
        </div>
      </div>

      <nav className="menu">
        <Link to="/shawerma">Шаурма</Link>
        <Link to="/snacks">Закуски</Link>
        <Link to="/drinks">Напитки</Link>
        <Link to="/about">О нас</Link>
      </nav>

      <Link to="/cart" className="cart-button">
        <img src={require('./images/cart.png')} alt="Cart" className="cart-icon" />
        <span className="cart-total-price">{getTotalPrice()}₽</span>
      </Link>
    </div>
  );
}

export default Navbar;
