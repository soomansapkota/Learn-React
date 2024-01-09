import React from 'react'
import PropTypes from 'prop-types'

const Gallery = ({title,image,description,githubLink}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer">
      <div className="px-6 py-4">
      <div className='h-12 w-12'><img src={image}></img></div>
        <div className="font-bold text-xl mb-2">{title}</div>
        
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {title}
        </a>
      </div>

    </div>
  )
}

<Gallery
title="Hostel Management System"
description="Here, Owner store all the information of the students"
image="src/images/logo.png"
githubLink="https://github.com/soomansapkota/Hostel-Management-System"
/>
export default Gallery
