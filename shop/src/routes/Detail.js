import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
// import styled from "styled-components";

// let YellowBtn = styled.button`
//   background : ${ props => props.bg };
//   color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
//   padding : 10px; 
// `

const Detail = (props) => {

  const [alert, setAlert] = useState(true)
  const [text, setText] = useState(true)
  let { id } = useParams();
  const imgsrc = `https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });

  useEffect(() => {
    let timer = setTimeout(() => { setAlert(false) }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (isNaN(Number(text))){
      window.alert("숫자를 입력해주세요")
    }
    else
      console.log(Number(text))

  }, [text])

	return (
	  <div className="container">
      {
        alert == true ?
          <div className="alert alert-warning">
            2초이내 구매시 할인
          </div>
        : null
      }
      <input onChange={ (e) => {setText(e.nativeEvent.data); console.log(e.nativeEvent.data)} }></input>
      <div className="row">
        <div className="col-md-6">
        <img src={imgsrc} alt="shoe" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.content}</p>
        <p>{찾은상품.price}</p>
        <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
	  </div>  
	)
  }

  export default Detail