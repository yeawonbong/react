import { Outlet } from "react-router-dom"

const Event = () => {
	return (
	  <div className="container">
		<h2>오늘의 이벤트</h2>
		<Outlet></Outlet>
	  </div>  
	)
  }

  export default Event