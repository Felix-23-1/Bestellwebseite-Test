import React from 'react';

const ShoppingCard = ({ items }) => {
  return (
    <div className="shopping-card">
      <h2>Warenkorb</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.amount} x {item.name} - {item.price}€
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCard;
