import React from 'react'
import { useParams } from 'react-router-dom'

const Career = () => {
    const {id} = useParams()
  return (
    <div>
      Career : {id}
    </div>
  )
}

export default Career
