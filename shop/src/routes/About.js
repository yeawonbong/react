import { Outlet } from "react-router-dom"

const Event = () => {
	return (
	  <div className="container">
		<h4>회사정보임</h4>
		<Outlet></Outlet>
	  </div>  
	)
  }

  export default Event