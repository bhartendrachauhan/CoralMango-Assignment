import React, { createContext, useEffect, useReducer } from 'react'

const Context = createContext()

const initialState = {
  data:[],
  isLoggedIn:false
}

let initialData = []

const reducer = (state,action)=>{
  switch(action.type){
    case 'SET_DATA': {
      initialData = action.payload
      return {
      ...state,
      data: action.payload
    }}
    case 'DATA_RESET': return {
      ...state,
      data:initialData
    }
    case 'SORT': {
      switch(action.payload){
        case 'Name': {
          let arr = state.data
          arr.sort((a,b)=> {
            const nameA = a.name.replaceAll(' ','').toUpperCase()
            const nameB = b.name.replaceAll(' ','').toUpperCase()
            if(nameA<nameB){
              return -1
            }
            if(nameA>nameB){
              return 1
            }
            if(nameA==nameB){
              return 0
            }
          })
          return {
            ...state,data:arr
          }
        }
        case 'Age': {
          let arr = state.data
          arr.sort((a,b)=> a.age-b.age)
          return {
            ...state,data:arr
          }
        }
      }
    }
    case 'SEARCH': {
      const searchString = action.payload
      const regex = new RegExp(searchString,"ig")
      const searchedData = initialData.filter(each=>{
        if(each.name.match(regex)){
          return true;
        }
        else{
          return false;
        }
      })
      return {
        ...state,
        data:searchedData
      }
    }
    case 'LOGIN': return {
      ...state,
      isLoggedIn:true
    }
    case 'LOGOUT': return {
      ...state,
      isLoggedIn:false
    }
    default: return state
  }
}

const ContextProvider = (props) => {
  const [state,dispatch] = useReducer(reducer,initialState)
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
