import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import data from './data'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Main from './routes/Main'
import Detail from './routes/Detail'
import About from './routes/About'
import Event from './routes/Event'

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate()
  console.log(shoes[0].title)
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')} href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')} href="#home">Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')} href="#features">Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}
      <Routes>
        <Route path="/" element={<Main shoes={shoes}/>}/>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치정보임</div>}/>
        </Route>
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
        <Route path="*" element={<div>404페이지</div>}/>
      </Routes>
    
    </div>
  );
}

export default App;
