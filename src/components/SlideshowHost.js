import React from 'react'

export default function SlideshowHost(props) {
  return (
    <div className='host'>
        <h3>{props.name}</h3>
        <img src={props.host} alt="" />
    </div>
  )
}
