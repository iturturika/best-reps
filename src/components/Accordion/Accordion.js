'use client'
import React from 'react'
import './Accordion.scss'
import Image from 'next/image'
import arrowImg from '../../assets/img/arrow.png'
const Accordion = ({label, text}) => {
    const [onClickAccordion, setOnClickAccordion] = React.useState(false);
  return (
    <div className='accordion-block' style={onClickAccordion ? {height: 'auto', paddingBottom: '20px'} : null}>
      <div className='accordion-wrap'>
        <h2 className='accordion-label' onClick={() => {setOnClickAccordion(!onClickAccordion)}}>{label}</h2>
        <Image
            src={arrowImg}
            alt="Picture of the author"
            className='accordion-icon'
            priority
            onClick={() => {setOnClickAccordion(!onClickAccordion)}}
            style={onClickAccordion ? {transform: 'rotate(180deg)'} : null}
        />
      </div>
      <div className='accordion-info' style={onClickAccordion ? {display: 'flex'} : null}>
        {text}
      </div>
    </div>
  )
}

export default Accordion
