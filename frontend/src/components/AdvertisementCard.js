import React from 'react';
import './AdvertisementCard.css';

function AdvertisementCard() {
  return (
    <div className="advertisement-card">
      <a href="https://mamaearth.in/product/me-aqua-eau-de-parfum-for-a-wave-of-freshness-50-ml" target="_blank" rel="noopener noreferrer">
        <div className="advertisement-content">
        <img src="https://images.mamaearth.in/PDPoffer4Aug.gif" alt="Mamaearth Offer" className="advertisement-image" />
          <h2 className="advertisement-title">Available Offers</h2>
          <ul className="advertisement-offers-list">
            <li>Get 10% off on ME Aqua Eau de Parfum</li>
            <li>Free shipping on orders above Rs. 399</li>
          </ul>
          <button className="advertisement-button">Shop Now</button>
        </div>
      </a>
    </div>
  );
}

export default AdvertisementCard;
