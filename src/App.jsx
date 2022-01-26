import { useState } from 'react'
import Footer from './components/Footer'
import Information from './components/Information'
import Nav from './components/Nav'
import logo from './logo.svg'

const App = () => {
  const [currentTab, setCurrentTab] = useState(1)

  return (
    <>
      <Nav />
      <div className="container">
        <div className="tabs">
          <div
            className={`tab ${currentTab === 1 ? 'tab--active' : ''}`}
            onClick={() => setCurrentTab(1)}
          >
            Lorem
          </div>
          <div
            className={`tab ${currentTab === 2 ? 'tab--active' : ''}`}
            onClick={() => setCurrentTab(2)}
          >
            Ipsum
          </div>
        </div>
      </div>
      <div className="container-right">
        <h1 className="information__title">Lorem ipsum dolor sit amet</h1>
        <Information />
      </div>
      <Footer />
    </>
  )
}

export default App
