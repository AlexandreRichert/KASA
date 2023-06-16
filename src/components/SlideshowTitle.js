import React from 'react'

export default function SlideshowTitle(props) {
  return (
    <div className='title'>
        <h2>{props.title}</h2>
        <h3>{props.location}</h3>
    </div>
  )
}
