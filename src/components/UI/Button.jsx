import React from 'react'

const Button = ({ children, textOnly, className, ...props }) => {
  const btnClasses = textOnly ? `text-button ${className}` : 'button'

  return (
    <button className={btnClasses} {...props}>
        {children}
    </button>
  )
}

export default Button