import React from 'react'

const Modal = ({isOpen, onClose, children}) => {
 
    //Modal que pregunta al usuario si esta seguro de borrar la tarea
 
    return (
    <>
   <div  className='modal-container' style={{display: isOpen ? "grid" : "none"}}>
          <div className='modal-body'>
          <button  className='modal-close' onClick={onClose}>❌</button>
          {children}


           </div>
   </div>





    </>
  )
}

export default Modal