import React from 'react'
import PropTypes from 'prop-types'
import '../App.js'

function Header({text, bgColor, textColor}) {
const styles={
  backgroundColor: bgColor,
  color: textColor,
}
  return (
    <header style={styles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps={
    text:'Naveen Singh',
    bgColor:'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propTypes={
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}
export default Header