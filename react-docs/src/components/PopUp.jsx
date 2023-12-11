import React, { useContext, useRef } from 'react';
import TaskForm from './TaskForm';
import { dateFormat } from '../assets/dataFormat';
import TaskContexts from '../contexts/TaskContexts';
import AuthContexts from '../contexts/AuthContexts';


function PopUp(props) {
  const {option} = props;
  const {type , data} =option;

  const{deleteTask} =useContext(TaskContexts);
  const {message} = useContext(AuthContexts);
  const closeButton = useRef(null);
  
  const onDelete = () =>{
    deleteTask(data.id);
  };

    return (
        
            <div className="modal" tabIndex="-1" id='task-modal'>
  <div className="modal-dialog modal-dialog-centered mw-100 w-50 ">
    <div className="modal-content bg-primary">
    <div className="modal-header">
    <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeButton}
            ></button>
      
              <div className="modal-body">
        {
          type === 'view'? (
          <div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            
            <div>
            <p>
              Modified On : {dateFormat(data.ModifiedOn)} 
            </p>
            <p>Due Date : {dateFormat(data.localDate)}</p>
            </div>
            
          </div> 
          ) :
            type === 'update' ? (
            <div className='p-5' data-bs-theme='dark'>
              <TaskForm className='bg-info-subtle rounded '
               isEdit={true} 
               data={data}
                btnRef={closeButton} 
                isPopup={true}/> 
            </div> 
           ) : (
            <div className='text-white w-100'>
              <p>
                  {
                  message !== "" ? message : 
                  "Are you sure you want to delete this task?"
                  }
                </p>
              <div className="d-flex">
              <button className="btn btn-danger ms-auto" onClick={onDelete}>Yes</button>
              <button className='btn btn-secondary ms-2' data-bs-dismiss='modal'
      aria-label='Close'>No</button>
              </div>
            </div>
           )
          }
      </div>
     
    </div>
  </div>
</div>
</div>
        
    );
}

export default PopUp;