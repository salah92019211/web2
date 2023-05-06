import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function NavB(){
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/'><Nav>Home</Nav></Link>
            <Link to='/Contact'><Nav>Contact</Nav></Link>
            <Link to='/Profile'><Nav>Profile</Nav></Link>      
            <Link to='/movies'><Nav>movies</Nav></Link>             
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavB;