import React from 'react';
import './redmiProduct.css';
import photo1 from '../../assets/photo1.webp';
import photo2 from '../../assets/photo2.png';
import photo3 from '../../assets/photo3.webp';


export function RedmiProducts() {
  const products = [
    {
      id: 1,
      title: "Redmi Note 14",
      subtitle: "5G",
      description: "Une expérience exceptionnelle",
      features: ["Processeur 5G 6 nm"],
      priceRange: "949 TND - 1049 TND",
      image: photo1
    },
    {
      id: 2,
      title: "Redmi Note 14",
      subtitle: "Pro",
      description: "Caméra IA de 200 MP",
      features: ["Résistance à toute épreuve"],
      priceRange: "1169 TND - 1399 TND",
      image: photo2
    },
    {
      id: 3,
      title: "Redmi Note 14",
      subtitle: "Pro+ 5G",
      description: "Caméra 200 MP avec stabilisateur",
      features: ["Snapdragon® 7s Gen 3"],
      priceRange: "1749 TND - 1999 TND",
      image: photo3
    }
  ];

  return (
    <div className="redmi-products-section">
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* Section texte - NON COMMENTÉE */}
            <div className="product-header">
              <h2 className="product-title">{product.title}</h2>
              <h3 className="product-subtitle">{product.subtitle}</h3>
            </div>
            
            <p className="product-description">{product.description}</p>
            
            <ul className="product-features">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <p className="product-price">{product.priceRange}</p>
            
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={`${product.title} ${product.subtitle}`}
                onError={(e) => {
                  e.target.src = defaultImage;
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}