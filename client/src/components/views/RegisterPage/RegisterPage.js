import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_action'

function RegisterPage() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [Email, setEmail] = useState('')
  const [Name, setName] = useState('')
  const [Password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')

  const onEmailHandler = e => {
    setEmail(e.currentTarget.value)
  }
  const onNameHandler = e => {
    setName(e.currentTarget.value)
  }
  const onPasswordHandler = e => {
    setPassword(e.currentTarget.value)
  }
  const onConfirmPassword = e => {
    setConfirmPassword(e.currentTarget.value)
  }
  const onSubmitHandler = e => {
    e.preventDefault()
    if (Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
    }
    dispatch(registerUser(body)).then(response => {
      if (response.payload.success) {
        history.push('/login')
      } else {
        alert('Failed to sign up')
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

        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPassword}
        />

        <br />
        <button type="submit">회원 가입</button>
      </form>
    </div>
  )
}

export default RegisterPage
