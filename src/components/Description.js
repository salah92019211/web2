import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
const videoEnded=()=>{
  alert('la video est terminée')
}



const Description = ({movies}) => {
  const {id} = useParams()
  const movie=movies.find(mov =>mov.id==id)
console.log(movie)
  return (
    <div style={{
      resizeMode: 'cover',
      height: 200,
      width: 1300,
    }}>
      <h1 style={{ color:'rosybrown'}}>{id}</h1>
      <h1 style={{ color:'blueviolet'}}>{movie.title }</h1>
      <h1>{movie.description}</h1>  
      <ReactPlayer url={movie.url}
      controls
      playing
      muted
      height="200%"
      width="100%"
      className="player_video"
      onEnded={videoEnded}
       />

    </div>
  )
}

export default Description