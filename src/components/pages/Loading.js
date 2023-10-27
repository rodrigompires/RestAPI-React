import React from 'react'
import './Loading.css';



const Loading = () => {
  return (
    <div className='containerLoading'>
        <div className='ring'></div>
        <div className='ring'></div>
        <div className='ring'></div>
        <span className='textLoading'>Loading...</span>
    </div>
  )
}

export default Loading
