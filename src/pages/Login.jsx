import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  //logic
const history = useNavigate()

const goToHome = () => {
  history('/');
};

  return (
    <div style={{ backgroundColor: "blue"}}>
      <h2>Login</h2>
      {/* <button type="button" onClick={goToHome}>
        Hom화면으로 이동
      </button> */}
      <Link to={"/home"} style={{ color: "#fff"}}>Home화면으로 이동</Link>
    </div>
  )
}

export default Login
