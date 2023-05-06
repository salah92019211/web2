import React from 'react'
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Description from '../Description';



const RestoCard = ({ mov }) => {


  const navigate=useNavigate();

  return (
  <Card style={{ width: '22rem' }}>
    <Link to={`/Description/${mov.id}`}>
    <Card.Img variant="top" src={mov.img} style={{
            resizeMode: 'cover',
            height: 200,
            width: 300,
          }}/></Link>
    <Card.Body>
    <Link to={`/Description/${mov.id}`}>
      <Card.Title style={{ color:'blueviolet'}}>{mov.title}</Card.Title></Link>
      <Card.Text>{mov.description}</Card.Text>
      <StarRatingComponent
    name={"star"} /* name of the radio input, it is required */
    value={mov.rate} /* number of selected icon (`0` - none, `1` - first) */
    editing={false} /* is component available for editing, default `true` */
/>
{/* <button >see More
<Link to onClick={()=>{navigate('/Description/{mov.id}')}} > </Link>
</button> */}


    {/* <Link to    onClick={()=>{navigate('/Description/${el.id}')}}>see more</Link>*/}

    </Card.Body>
  </Card>
  )
}

export default RestoCard