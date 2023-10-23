import React from 'react'

const Card = props => {
  return (
    <div className="meal-item">{props.children}</div>
  )
}

export default Card