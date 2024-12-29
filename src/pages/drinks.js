import React from 'react';
import Block from './components/Block';
import cocacola from './images/cocacola.jpg';
import lipton from './images/lipton.jpg';
import mors from './images/mors.jpg';
import sok from './images/sok.jpg';

import './drinks.css'

const drinks = () => {
  const foodItems = [
    { 
      title: 'Coca-cola', 
      description: 'Идеально освежающий газированный напиток с насыщенным вкусом. Создан для тех, кто ценит традиции и наслаждается классикой.', 
      image: cocacola, 
      price: '150₽', 
      isSeasonHit: true 
    },
    { 
      title: 'Черный чай Lipton', 
      description: 'Классический черный чай с ярким ароматом и приятным вкусом. Идеальный выбор для теплых встреч и коротких перерывов.', 
      image: lipton, 
      price: '150₽', 
      isSeasonHit: false 
    },
    { 
      title: 'Морс клюквенный', 
      description: 'Натуральный напиток с насыщенным вкусом и ароматом клюквы. Освежает и заряжает энергией в любое время года.', 
      image: mors, 
      price: '80₽', 
      isSeasonHit: true 
    },
    { 
      title: 'Сок', 
      description: 'Свежевыжатый сок с богатым вкусом и насыщенным ароматом. Идеально подходит для перекуса и полноценного обеда. ', 
      image: sok, 
      price: '100₽', 
      isSeasonHit: false 
    },
  ];
  

  return (
    <div className="drinks-page">
      <h1>Напитки</h1>
      <div className="block-container">
        {foodItems.map((item, index) => (
          <Block
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
            isSeasonHit={item.isSeasonHit}
          />
        ))}
      </div>
    </div>
  );
};

export default drinks;
