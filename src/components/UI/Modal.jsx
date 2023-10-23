import React from 'react'

const Modal = props => {
    const modalClasses = `modal ${props.className}`
  return (
    <div className={modalClasses}>
        {props.children}
        {/* <div className="modal-actions">
        </div> */}
    </div>
  )
}

export default Modal