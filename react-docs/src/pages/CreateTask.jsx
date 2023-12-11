import { useContext, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskContexts from '../contexts/TaskContexts';
import { dateFormat } from '../assets/dataFormat';
import { Link } from 'react-router-dom';


function CreateTask(props) {
      const {newTasks , oldTasks} = useContext(TaskContexts);
      const [edit , setEdit] = useState(false);
    
    const EditTask = (e) => {
        e.preventDefault()
        setEdit(true)
    }
    
    
    return (
        <div className='container-fluid h-100'>
            <div className="row h-100">
                <div className="col-lg-5 d-flex flex-column p-5 align-items-center justify-content-center h-100" data-bs-theme="dark">
                    <TaskForm isEdit={edit} data={newTasks} setIsEdit={setEdit}/>
                </div>


                <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center h-100" data-bs-theme="dark">
                <div className="container w-75 m-5 bg-primary-subtle p-4 rounded-5 opacity-75">
                <div className="card rounded-5 m-2" >
  <div className="card-body">
    
    <div className="d-flex p-3">
        <h4>Latest Task</h4>
        
  <button className="btn btn-outline-info ms-auto w-25" onClick={EditTask} >Edit</button>
  </div>
  
        <div>{ newTasks ?
        <>
        <h5 className="card-title text-success-emphasis p-3 fs-4">Title : {newTasks?.title} </h5>
    <h6 className="card-subtitle mb-2 text-primary-emphasis p-3"> <p className='fs-5'>Description :</p> {newTasks?.description}</h6>
        <div className=" text-warning p-3">
            <p className="mb-0">Updated On : {dateFormat(newTasks?.ModifiedOn)}</p>
            <p className="mb-0">Due Date : {dateFormat(newTasks?.localDate)}</p>
        </div> 
        </>
        :
        ""
        }
        </div>

  </div>
</div>
                </div>


                <div className="container w-75 m-5 bg-primary-subtle p-4 rounded-5 opacity-75">
                <div className="card rounded-5 m-2" >
  <div className="card-body">
    <div className="d-flex p-3">
        <h4>Recent Tasks</h4>
        </div>
        <div>
            {
                oldTasks?
                oldTasks?.map((task)=>{
                    return(
                    <div className='d-flex p-1 m-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-4 '>
                        <p>{task.title}</p>
                        <span className='ms-auto'> {dateFormat(task.localDate)}</span>
                        
                    </div>
                    )
                })
                : 
                'no data'
            }
            <Link className='d-flex float-end text-decoration-none' to={'/tasklist'}>Read More...</Link>
        </div>
  
        </div>
  </div>
</div>
                
                </div>
               </div>
            </div>

            

            
        
    );
}

export default CreateTask;