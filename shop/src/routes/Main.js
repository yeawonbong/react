import { Col, Container, Row } from 'react-bootstrap'
import bg from '../img/bg.png'

const Card = (props) => {
	return (
	<Col sm>
	<img src={`https://codingapple1.github.io/shop/shoes${props.idx + 1}.jpg`} alt={`shoes${props.idx + 1}`} width="80%"/>
	<h4>{props.shoes.title}</h4>
	<p>{props.shoes.price}</p>
	</Col>
	)
  }

const Main = (props) => {
	return (
	  <div>
	  <div className='main-bg' style={{ backgroundImage : `url(${bg})` }}></div>
	  <Container>
		<Row>
		  {
			props.shoes.map((shoe, i) => {
			  return <Card shoes={shoe} idx={i}/>
			})
		  }
		</Row>
	  </Container>
	  </div>
	)
  }

export default Main
  
  