import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { lazy, Suspense, useEffect, useState } from 'react';
import data from './data'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Main from './routes/Main'
import About from './routes/About'
import Event from './routes/Event'


const Detail = lazy(() => import('./routes/Detail.js'))
const Cart = lazy(() => import('./routes/Cart.js'))

function App() {

  let obj = {name : 'kim'}
  localStorage.setItem('data', JSON.stringify(obj)) 
  let json = localStorage.getItem('data')
  console.log("JSON.parse(json).name")
  console.log(JSON.parse(json).name)

  let [shoes] = useState(data)
  let navigate = useNavigate()
  console.log(shoes[0].title)

  useEffect(() => {
    if (localStorage.getItem('watched') === null) {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  })
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')} href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')} href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link onClick={() => navigate('/cart')} href="">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}
      <Suspense fallback={<div>로드중</div>}>
        <Routes>
          <Route path="/" element={<Main shoes={shoes}/>}/>
          <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
          <Route path="/cart" element={<Cart/>}/>
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
      </Suspense>
    
    </div>
  );
}

export default App;
