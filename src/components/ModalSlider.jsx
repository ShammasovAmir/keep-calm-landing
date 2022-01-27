import React from 'react'
import { Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// Images
import image1 from '../images/anastasia-anastasia-nlQFycTD04M-unsplash.jpg'
import image2 from '../images/angelica-echeverry-mI82mfLu538-unsplash 1.jpg'
import image3 from '../images/bulbul-ahmed-QFWGnLHnBNQ-unsplash.jpg'
import image4 from '../images/cat-han-BJ3grTerqY4-unsplash.jpg'
import image5 from '../images/joeyy-lee-3TnDfD2hIxg-unsplash.jpg'

const ModalSlider = ({ selectedSlide, setModalOpen, modalOpen }) => {
  const slidesData = [
    {
      id: 1,
      imagePath: image1,
      hasText: false,
    },
    {
      id: 2,
      imagePath: image2,
      hasText: true,
      text: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {
      id: 3,
      imagePath: image3,
      hasText: false,
    },
    {
      id: 4,
      imagePath: image4,
      hasText: false,
    },
    {
      id: 5,
      imagePath: image5,
      hasText: true,
      text: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
  ]

  const showSlides = () =>
    slidesData.map((slide) => (
      <SwiperSlide key={slide.id}>
        <img src={slide.imagePath} alt="" />
        {slide.hasText ? <p>{slide.text}</p> : ''}
      </SwiperSlide>
    ))

  return (
    <div className={`modal ${modalOpen ? 'modal--active' : ''}`}>
      <div className="modal__close-btn" onClick={() => setModalOpen(false)}>
        <i className="fas fa-times"></i>
      </div>
      <div className="modal__main-content">
        <div
          className="modal__backdrop"
          onClick={() => setModalOpen(false)}
        ></div>
        <div className="container">
          <Swiper modules={[Navigation]} slidesPerView={1} navigation>
            {showSlides()}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ModalSlider
