import React from 'react'
import HoverVideoPlayer from 'react-hover-video-player'



export const Cards = (props) => {




  return (
    
    <div className="card">
        <div className='card_body'>
          <h2 className='card_title'>{props.title}</h2>
          <HoverVideoPlayer
          videoSrc={props.vid}
          restartOnPaused
          muted
          loop
          style={{width:"400px",height:"250px",padding:'0 .5rem'}}
          
          />
          
          <p className="card_description">{props.description}</p>               
        </div>
  </div>
  )
}

