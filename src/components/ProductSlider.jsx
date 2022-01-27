import React, { useEffect, useState } from 'react'
import { Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import ModalSlider from './ModalSlider'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'

// Images
import image1 from '../images/anastasia-anastasia-nlQFycTD04M-unsplash.jpg'
import image2 from '../images/angelica-echeverry-mI82mfLu538-unsplash 1.jpg'
import image3 from '../images/bulbul-ahmed-QFWGnLHnBNQ-unsplash.jpg'
import image4 from '../images/cat-han-BJ3grTerqY4-unsplash.jpg'
import image5 from '../images/joeyy-lee-3TnDfD2hIxg-unsplash.jpg'

const ProductSlider = () => {
  const [slideAmount, setSlideAmount] = useState(1)
  const [selectedSlide, setSelectedSlide] = useState(1)
  const [modalOpen, setModalOpen] = useState(false)

  const checkWindowSize = () => {
    if (window.innerWidth >= 1300) setSlideAmount(3)
    else if (window.innerWidth < 1300 && window.innerWidth >= 1008)
      setSlideAmount(2)
    else setSlideAmount(1)
  }

  useEffect(() => {
    checkWindowSize()
  }, [])

  window.addEventListener('resize', () => checkWindowSize())

  const slideContentContainerStyle = {
    height: window.innerWidth > 451 ? '600px' : '450px',
    width: window.innerWidth > 451 ? '400px' : '300px',
    position: 'relative',
  }

  const slideImageStyles = {
    height: window.innerWidth > 451 ? '600px' : '450px',
    width: window.innerWidth > 451 ? '400px' : '300px',
    objectFit: 'cover',
    objectPosition: 'center',
  }

  const slides = [
    <SwiperSlide key={0}>
      <div
        style={slideContentContainerStyle}
        onClick={() => {
          setModalOpen(true)
          setSelectedSlide(1)
        }}
      >
        <img src={image1} alt="" style={slideImageStyles} />
      </div>
    </SwiperSlide>,
    <SwiperSlide key={1}>
      <div
        style={slideContentContainerStyle}
        onClick={() => {
          setModalOpen(true)
          setSelectedSlide(2)
        }}
      >
        <img src={image2} alt="" style={slideImageStyles} />
        <div className="slider-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={2}>
      <div
        style={slideContentContainerStyle}
        onClick={() => {
          setModalOpen(true)
          setSelectedSlide(3)
        }}
      >
        <img src={image3} alt="" style={slideImageStyles} />
      </div>
    </SwiperSlide>,
    <SwiperSlide key={3}>
      <div
        style={slideContentContainerStyle}
        onClick={() => {
          setModalOpen(true)
          setSelectedSlide(4)
        }}
      >
        <img src={image4} alt="" style={slideImageStyles} />
      </div>
    </SwiperSlide>,
    <SwiperSlide key={4}>
      <div
        style={slideContentContainerStyle}
        onClick={() => {
          setModalOpen(true)
          setSelectedSlide(5)
        }}
      >
        <img src={image5} alt="" style={slideImageStyles} />
        <div className="slider-text slider-text--right">
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </SwiperSlide>,
  ]

  return (
    <>
      <div className="main-slider">
        <Swiper modules={[Navigation]} slidesPerView={slideAmount} navigation>
          {slides}
        </Swiper>
      </div>

      <ModalSlider
        selectedSlide={selectedSlide}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
    </>
  )
}

export default ProductSlider
