import React, { createContext, useEffect, useReducer } from 'react'

const Context = createContext()

const initialState = {
  data:[],
  isLoggedIn:false
}

let initialData = []

const reducer = (state,action)=>{
  switch(action.type){
    case 'SET_DATA': return {
      ...state,
      data: action.payload
    }
    default: return state
  }
}

const ContextProvider = (props) => {
  const [state,dispatch] = useReducer(reducer,initialState)
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = async ()=>{
    const api = await fetch('https://coralmango.com/api/react-test')
    const response = await api.json()
    dispatch({type:"SET_DATA",payload:response})
    initialData = response
  }
  return (
    <Context.Provider value={{
      state,
      dispatch
    }}>
      {props.children}
    </Context.Provider>
  )
}

export  {ContextProvider, Context}
