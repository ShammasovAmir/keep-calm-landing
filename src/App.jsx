import { useState } from 'react'
import Footer from './components/Footer'
import Information from './components/Information'
import Nav from './components/Nav'
import logo from './logo.svg'
import Home from './pages/Home'
import Accordion from './pages/Accordion'

const App = () => {
  const [currentTab, setCurrentTab] = useState(1)

  const pageRouter = () => {
    switch (currentTab) {
      case 1:
        return <Home />
      case 2:
        return <Accordion />

      default:
        return <Home />
    }
  }

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
      {/* Router */}
      {pageRouter()}
      <Footer />
    </>
  )
}

export default App
