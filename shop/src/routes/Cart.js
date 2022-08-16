import { memo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, minusCount } from "../store/store";

let Child = memo(
  function() {
    console.log("재랜더링")
    return <div>자식이다</div>
  }) 

function Cart() {

  let states = useSelector((state) => {return state})
  let dispatch = useDispatch()
  let [count, setCount] = useState(0)

  return (
    <div>
      <Child></Child>
      <button onClick={() => { setCount(count+1) }}>재랜더링 버튼</button>
      {states.user.name}의 장바구니
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>제품</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
            { 
              states.cart.map((cart, i) => {
                return (
                  <tr>
                    <td>{states.cart[i].id}</td>
                    <td>{states.cart[i].name}</td>
                    <td>{states.cart[i].count}</td>
                    <td><button onClick={() => {
                      dispatch(addCount(states.cart[i].id))
                    }}>+</button>
                    <button onClick={() => {
                      dispatch(minusCount(states.cart[i].id))
                    }}>-</button></td>
                  </tr>
                )
              })
            }
        </tbody>
      </Table>
    </div>
  )
}

export default Cart