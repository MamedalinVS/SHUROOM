import React from 'react';
import Block from './components/Block';
import classicImage from './images/classic.jpg';
import mushromImage from './images/mushrom.jpg';
import cheeseImage from './images/cheese.jpg';
import pepperImage from './images/pepper.jpg';
import './shawerma.css'

const Shawerma = ({ addToCart }) => {
  const foodItems = [
    { 
      title: 'Шаурма классическая', 
      description: 'Классическая шаурма с куриным филе, овощами и фирменным соусом. Идеально для любителей традиционного вкуса.',
      image: classicImage, 
      price: '250₽', 
      isSeasonHit: true 
    },
    { 
      title: 'Шаурма грибная', 
      description: 'Легкая шаурма с ароматными грибами и свежими овощами, идеально сбалансированная с нежным соусом.',
      image: mushromImage, 
      price: '300₽', 
      isSeasonHit: false 
    },
    { 
      title: 'Шаурма сырная', 
      description: 'Шаурма с расплавленным сыром, куриным мясом и овощами. Сочетание вкусов, которое стоит попробовать.',
      image: cheeseImage, 
      price: '270₽', 
      isSeasonHit: true 
    },
    { 
      title: 'Шаурма острая', 
      description: 'Шаурма с остротой перца и пряными специями, которая понравится любителям острого.',
      image: pepperImage, 
      price: '260₽', 
      isSeasonHit: false 
    },
  ];

  return (
    <div className="shawerma-page">
      <h1>Шаурма</h1>
      <div className="block-container">
        {foodItems.map((item, index) => (
          <Block
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
            isSeasonHit={item.isSeasonHit}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Shawerma;
