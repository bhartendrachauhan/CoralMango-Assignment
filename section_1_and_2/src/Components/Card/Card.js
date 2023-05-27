import React, { useContext } from 'react'
import './Card.css'
import { Context } from '../../ContextProvider'

const Card = () => {
    const context = useContext(Context)
  return (
    <div className='card-container'>
      {context.state.data.map(each=>{
        return (
            <div className='each-card-container'>
                <i class="fa-solid fa-user fa-4x"></i>
                <span>{each.name}</span>
                <span>{each.occupation}</span>
                <span>{each.age} years</span>
            </div>
        )
      })}
    </div>
  )
}

export default Card
