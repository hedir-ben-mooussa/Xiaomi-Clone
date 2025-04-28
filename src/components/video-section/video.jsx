import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';  // Importation de la navigation
import { Navigation } from 'swiper/modules';  // Utilisation du module de navigation

import './video.css';

export function VideoList() {
  const videos = [
    {
      id: 1,
      title: "Video 1",
      url: "https://www.youtube.com/embed/aZel-ombYhs" // Lien d'intégration
    },
    {
      id: 2,
      title: "Video 2",
      url: "https://www.youtube.com/embed/jjV9Gcx3zX8" // Lien d'intégration
    },
    {
      id: 3,
      title: "Video 3",
      url: "https://www.youtube.com/embed/HlGZUAB2DZw" // Lien d'intégration
    },
    {
      id: 4,
      title: "Video 4",
      url: "https://www.youtube.com/embed/jjV9Gcx3zX8" // Lien d'intégration
    },
  ];

  return (
    <div className="video-list">
      <h2 className='flex flex-row justify-center' style={{color:"#191919",fontSize:"50px",padding:"10px"}}>Vidéos</h2>
      <Swiper
        modules={[Navigation]}  // Ajout du module de navigation
        spaceBetween={30}        // Espacement entre les vidéos
        slidesPerView={3}        // Nombre de vidéos visibles
        loop={true}              // Permet le défilement en boucle
        navigation={true}        // Activation des flèches de navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <iframe
              width="560"
              height="315"
              src={video.url}
              title={video.title}
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
