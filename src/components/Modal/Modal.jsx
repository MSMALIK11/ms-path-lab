import React from 'react'

const Modal = ({open,setOpen,children}) => {
  return (
    <div className={`modal-wraper ${open?"show":''}`}>
        <div className="modal-header">
            <h3>Sample List</h3>
          <span className='close' onClick={()=>setOpen(false)}></span>
        </div>
        <div className="modal-body">
            {children}
   

        </div>
        
        </div>
  )
}

export default Modal