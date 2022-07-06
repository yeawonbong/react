import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import data from './data'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail'
import Main from './routes/Main'

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate()
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')} href="#home">Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')} href="#features">Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Routes>
        <Route path="/" element={<Main shoes={shoes}/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="*" element={<div>404페이지</div>}/>
      </Routes>
    
    </div>
  );
}

export default App;
