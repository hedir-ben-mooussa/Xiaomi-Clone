import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import wifi from '../../assets/wifi.jpg';
import redmi14c from '../../assets/REDMI14C.jpg';
import montre from '../../assets/MontreConnectée.jpg';
import airfryer from '../../assets/airfryer.webp';
import cam from '../../assets/camera.png';
import './ProductList.css';

export function ProductList() {
  const products = [
    { id: 1, name: "Mi Wi-Fi RangeExtender Pro", price: "59 TND", priceRange: null, image: wifi },
    { id: 2, name: "Redmi 14C", price: "469 TND", priceRange: "469 TND - 549 TND", image: redmi14c },
    { id: 3, name: "Redmi Watch 5 Lite", price: "199 TND", priceRange: null, image: montre },
    { id: 4, name: "Xiaomi Smart Air Fryer 6.5L", price: "479 TND", priceRange: null, image: airfryer },
    { id: 5, name: "Xiaomi Smart Camera C300", price: "199 TND", priceRange: null, image: cam },
    { id: 6, name: "Xiaomi Power Bank", price: "89 TND", priceRange: null, image: cam },
    { id: 7, name: "Xiaomi Smart Band", price: "129 TND", priceRange: null, image: cam },
    { id: 8, name: "Xiaomi Electric Scooter", price: "899 TND", priceRange: null, image: cam }
  ];

  return (
    <div className="product-list-container">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.priceRange || product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
