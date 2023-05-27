import React, { useContext } from 'react'
import './Table.css'
import { Context } from '../../ContextProvider'

const Table = () => {
    const context = useContext(Context) 
  return (
    <div className='table-container'>
      <table>
        <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
        </thead>
        <tbody>
            {context.state.data.map(each=>{
                return (
                    <tr>
                        <td>{each.name}</td>
                        <td>{each.age}</td>
                        <td>{each.occupation}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
