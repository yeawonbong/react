import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import bg from '../img/bg.png'
import axios from 'axios'
import { useState } from 'react'

const Card = (props) => {
  let navigate = useNavigate()

  return (
    <Col sm>
      <img src={`https://codingapple1.github.io/shop/shoes${props.idx + 1}.jpg`} alt={`shoes${props.idx + 1}`} onClick={() => navigate(`/Detail/${props.idx}`)} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  )
}

const Main = (props) => {
  let [shoes, setShoes] = useState([...props.shoes])
  let [cnt, setCnt] = useState(2)
  let loading = false
  // console.log(props.shoes)

  return (
    <div>
      <div className='main-bg' style={{ backgroundImage: `url(${bg})` }}></div>
      <Container>
        <Row>
          {
            shoes.map((shoe, i) => {
              return (
                <Col sm='4'>
                  <Card shoes={shoe} idx={i} key={i} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
      {
        cnt < 4 ? 
        <button onClick={() => {
          loading = true
          setCnt(cnt + 1)
          console.log(cnt)
          axios.get(`https://codingapple1.github.io/shop/data${cnt}.json`)
            .then((data) => {
              setShoes([...shoes, ...data.data])
              console.log(shoes)
              loading = false
            })
            .catch(() => {
              console.log('실패')
              loading = false
            })
        }}>{loading == false ? "더보기" : "loading..."}</button>
        : null
      }
    </div>
  )
}

export default Main

