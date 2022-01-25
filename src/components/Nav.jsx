import React from 'react'
import logoUrl from '../images/logo.svg'
import iconUrl from '../images/phone-icon.svg'

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__container">
          <div className="nav__logo">
            <img src={logoUrl} alt="" />
          </div>
          <div className="nav__phone-number">+7 (495) 495-49-54</div>
          <div className="nav__phone-icon">
            <img src={iconUrl} alt="" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
