import React from 'react'
import MovieCard from '../movieCard/MovieCard'
import './MovieList.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'


const MovieList = ({movies}) => {
  const navigate=useNavigate();

  return (
    <div className='list'>
        {
        movies.map((mov)=><MovieCard mov={mov}></MovieCard>)}
    {/* <Link to    onClick={()=>{navigate('/Description/${el.id}')}}>see more</Link>
     <Link to = {'/Description/${el.id}'}><Button variant="light">See More</Button></Link>*/}
             
    </div>
  )
}
export default MovieList
