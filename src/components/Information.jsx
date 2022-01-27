import React from 'react'
import imageUrl1 from '../images/julia-d-FlNTu2Bj4Dg-unsplash.jpg'
import imageUrl2 from '../images/taisiia-stupak-viq7xx1boxo-unsplash 1.jpg'

const Information = () => {
  return (
    <div className="information">
      <div className="row">
        <div className="col-md-5" style={{ verticalAlign: 'top' }}>
          <div className="information__article-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div className="information__article-text">
            <p>
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <br />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum/ Incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat.
            </p>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <img src={imageUrl1} alt="" className="information__img" />
        </div>
      </div>
      <div className="information__container">
        <div className="col-md-5">
          <img src={imageUrl2} alt="" className="information__img" />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6" style={{ verticalAlign: 'top' }}>
          <div className="information__article-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div className="information__article-text">
            <p>
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <br />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information
