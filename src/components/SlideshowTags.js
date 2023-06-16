import React from 'react'

export default function SlideshowTags(props) {
  return (
    <div className='tags'>
        <ul>
            {props.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
            ))}
        </ul>
    </div>
  )
}
