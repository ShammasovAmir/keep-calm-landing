import React, { useState } from 'react'
import Information from '../components/Information'
import ProductSlider from '../components/ProductSlider'

const Accordion = () => {
  const [sliderOpen, setSliderOpen] = useState(false)
  const [informationOpen, setInformationOpen] = useState(false)

  return (
    <div className="accordion">
      <div>
        <div className="container">
          <div
            className="accordion__heading"
            onClick={() => setSliderOpen(!sliderOpen)}
          >
            <div className="accordion__title">Lorem ipsum dolor sit amet</div>
            <div
              className={`accordion__chevron ${
                sliderOpen ? 'accordion__chevron--active' : ''
              }`}
            >
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div
          className={`accordion__content ${
            sliderOpen ? 'accordion__content--active' : ''
          }`}
        >
          <div className="information__title" style={{ textAlign: 'center' }}>
            Lorem ipsum dolor sit amet
          </div>
          <ProductSlider />
        </div>
      </div>
      <div>
        <div className="container">
          <div
            className="accordion__heading"
            onClick={() => setInformationOpen(!informationOpen)}
          >
            <div className="accordion__title">Lorem ipsum dolor sit amet</div>
            <div
              className={`accordion__chevron ${
                informationOpen ? 'accordion__chevron--active' : ''
              }`}
            >
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div
          className={`accordion__content ${
            informationOpen ? 'accordion__content--active' : ''
          }`}
        >
          <div className="container-left">
            <Information />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
