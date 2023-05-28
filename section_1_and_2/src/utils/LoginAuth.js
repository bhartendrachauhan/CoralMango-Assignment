import React, { useContext } from 'react'
import { Context } from '../ContextProvider'
import { Navigate } from 'react-router-dom'

const LoginAuth = ({children}) => {
  const context = useContext(Context)
  if(context.state.isLoggedIn){
    return (children)
  }
  else{
    return <Navigate to={'/login'}/>
  }
}

export default LoginAuth
