import React from 'react'
import InputField from '../components/InputField'
import LoginButton from '../components/LoginButton'

const Login = () => {
  //logic
// const history = useNavigate()

// const goToHome = () => {
//   history('/');
// };

  return (
    <div>
      {/* <h2>Login</h2> */}
      {/* <button type="button" onClick={goToHome}>
        Hom화면으로 이동
      </button> */}
      {/* <Link to={"/"} style={{ color: "#fff"}}>Home화면으로 이동</Link> */}
      <h1>
        <img src='./images/logo.svg' alt='churead로고' />
      </h1>
      <h3>Churead에서 소통해보세요</h3>
      <InputField />
      <InputField />
      <LoginButton />
      <LoginButton />
    </div>
  )
}

export default Login
