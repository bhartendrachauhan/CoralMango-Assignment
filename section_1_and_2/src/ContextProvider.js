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
