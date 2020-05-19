import React from 'react'
import PropTypes from 'prop-types'

import HeaderContainer from '../components/Header/HeaderContainer'

import '../css/main.css'

const Main = ({ children }) => {
  return (
    <div className="layout layout--main">
      <HeaderContainer />
      <main className="main">
        {children}
      </main>
      <footer className="footer">
        An example website using{` `}
        <a href="https://portway.app" target="_blank" rel="noopener noreferrer">
          Portway
        </a>
      </footer>
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
