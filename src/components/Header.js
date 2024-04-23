import React from 'react'
import "../css/header.css"

const Header = ({title}) => {
  return (
    <div className='header'>{title}</div>
  )
}

export default Header