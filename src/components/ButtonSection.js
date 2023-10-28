import React from 'react'
import './ButtonSection.css'

const ButtonSection = ({ Icon, title, selected }) => {
  return (
    <div className='section'>
      <div className="section__Icon" >
        <Icon />
        <p>{title}</p>
      </div>
    </div>
  )
}


export default ButtonSection;
