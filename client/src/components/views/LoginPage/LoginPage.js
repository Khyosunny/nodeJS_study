import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'

function LoginPage(props) {
  const dispatch = useDispatch()
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const history = useHistory()

  const onEmailHandler = e => {
    setEmail(e.currentTarget.value)
  }
  const onPasswordHandler = e => {
    setPassword(e.currentTarget.value)
  }
  const onSubmitHandler = e => {
    e.preventDefault()
    let body = {
      email: Email,
      password: Password,
    }
    dispatch(loginUser(body)).then(response => {
      if (response.payload.loginSuccess) {
        history.push('/')
      } else {
        alert('Error')
      }
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
