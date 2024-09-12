import React from 'react'

function LoginButton() {
  return (
    <div>
      <button 
      type='button'
      className='block rounded-lg border'>Login</button>
      <p>계정이 없으신가요? <a href ='https://www.youtube.com/@teamsmart_korea'>가입하기</a></p>
    </div>
  )
}

export default LoginButton
