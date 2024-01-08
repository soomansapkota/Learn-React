import React from 'react'
// import PropTypes from 'prop-types'

const Gallery = ({title,description,githubLink}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View on GitHub
        </a>
      </div>
    </div>
  )
}


export default Gallery
