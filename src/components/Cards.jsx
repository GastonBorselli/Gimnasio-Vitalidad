import React, {useState} from 'react'



export const Cards = (props) => {

const [isHovering,setIsHovering] = useState(false);



  return (
    <div className="card">
        <div className='card_body'>
          <h2 className='card_title'>{props.title}</h2>
          <video className={isHovering? "isHovering":"card_video"} src={props.vid} onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)} loop muted speed={1.2} width="400px" height="250px" style={{padding:'0 .5rem'}}/>               
          <p className="card_description">{props.description}</p>
        </div>
  </div>
  )
}

