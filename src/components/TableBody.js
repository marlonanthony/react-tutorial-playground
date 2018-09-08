import React from 'react'
import '../styles/TableBody.css'

export default (props) => {
  const rows = props.characterData.map((row, i) => {
    return (
      <tr key={i}>
        <td className='tbody'>{row.name}</td>
        <td className='tbody'>{row.job}</td>
        <td><button onClick={() => props.removeCharacter(i)}>Delete</button></td>
      </tr>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
}
