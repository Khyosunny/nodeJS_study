import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { auth } from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null) {
  //null => 아무나 출입이 가능한 페이지
  //true => 로그인한 유저만 출입가능한 페이지
  //false => 로그인한 유저는 출입불가능한 페이지

  const AuthenticationCheck = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
      dispatch(auth()).then(response => {
        console.log(response)
        // 로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            history.push('/login')
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !response.payload.isAdmin) {
            history.push('/')
          } else {
            if (option === false) {
              history.push('/')
            }
          }
        }
      })
    }, [])

    return <SpecificComponent />
  }

  return AuthenticationCheck
}
