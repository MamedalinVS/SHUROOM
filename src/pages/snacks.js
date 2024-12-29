import React from 'react';
import Block from './components/Block';
import friedPotato from './images/fried.jpg';
import onion from './images/onion.jpg';
import naggetsy from './images/naggetsy.jpg';
import cheburek from './images/cheburek.jpg';
import barbequ from './images/barbequ.jpg';
import cheeseSause from './images/cheeseSause.jpg';
import chili from './images/chili.jpg';
import gorchica from './images/gorchica.jpg';
import './snacks.css'

const snacks = () => {
  const foodItems = [
    { 
      title: 'Картофель фри', 
      description: 'Хрустящий картофель, жареный до золотистой корочки, с легким вкусом соли. Отличный выбор для любителей классических закусок.',
      image: friedPotato, 
      price: '120₽', 
      isSeasonHit: true 
    },
    { 
      title: 'Луковые кольца', 
      description: 'Нежные кольца лука в хрустящей панировке. Отлично сочетаются с соусами и идеально подходят для тех, кто ценит легкие и ароматные закуски.',
      image: onion, 
      price: '170₽', 
      isSeasonHit: false 
    },
    { 
      title: 'Нагетсы', 
      description: 'Хрустящие нагетсы с нежной курицей внутри, идеальны в сочетании с любимым соусом. Отличная закуска для ценителей аппетитных угощений.',
      image: naggetsy, 
      price: '150₽', 
      isSeasonHit: false 
    },
    { 
      title: 'Чебурек', 
      description: 'Тонкое тесто с сочной начинкой из мяса и пряных специй, придающих пикантность. Эта закуска идеально подойдет для любителей чего-то острого и насыщенного.',
      image: cheburek, 
      price: '80₽', 
      isSeasonHit: true 
    },
    { 
      title: 'Соус барбекю', 
      image: barbequ, 
      price: '40₽', 
      isSeasonHit: false 
    },
    { 
      title: 'Соус горчичный', 
      image: gorchica, 
      price: '40₽', 
      isSeasonHit: false 
    },
    { 
      title: 'Соус чили', 
      image: chili, 
      price: '40₽', 
      isSeasonHit: true 
    },
    { 
      title: 'Соус сырный', 
      image: cheeseSause, 
      price: '80₽', 
      isSeasonHit: true 
    },
  ];
  

  return (
    <div className="snacks-page">
      <h1>Закуски</h1>
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

export default snacks;
