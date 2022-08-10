import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../store/store";
function Cart() {

  let states = useSelector((state) => {return state})
  let dispatch = useDispatch()
  console.log()

  return (
    <div>
      {states.user.name}
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
                    <td>{i}</td>
                    <td>{states.cart[i].name}</td>
                    <td>{states.cart[i].count}</td>
                    <td><button onClick={() => {
                      dispatch(addCount(i))
                    }}>+</button></td>
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