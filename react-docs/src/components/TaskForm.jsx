import React, { useContext, useEffect, useState } from 'react';
import TaskContexts from '../contexts/TaskContexts';
import AuthContexts from '../contexts/AuthContexts';

function TaskForm(props) {
    const { createTask , isUpdate, updateTask } = useContext(TaskContexts);
    const { message, setMessage , user  } = useContext(AuthContexts);
    const [formData, setFormData] = useState('');
    const {isEdit, data , setIsEdit ,btnRef, isPopup} = props;
    

    const init = {
        title : '',
        description : '',
        localDate : ''
    }
    useEffect(()=>{
        setMessage('')
        if(data && isEdit){
            setFormData(data)
        }
    },[data , isEdit])
    

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => (
            { ...prev, 
                [name]: value,
                userId : user.id,
                ModifiedOn : Date()
            }
        ))
    }
    //create task function
    const Create = (e) => {
        e.preventDefault();
        createTask(formData);
        setTimeout(() => {
            setMessage('')
        }, 3000);
        
    }
    //update task function
    const Update = (e) => {
        e.preventDefault();
        updateTask(formData);
            setMessage('')
    }

    const Cancel = (e) =>{
        e.preventDefault();
        setFormData(init);
        if (!isPopup) {
            setIsEdit(false)
        }else{
            btnRef.current.click();
        }
    }

    useEffect(()=>{
        if(isUpdate){
            setFormData(init)
        }
    },[isUpdate])

    return (
        <div className="container bg-primary-subtle p-5  rounded-5 opacity-75">
            <div className='fs-2 my-3'>{isEdit ? "Update-Task" : "Create-Task"}</div>
            <div className="mb-3">
                <label className="form-label fs-5">Title :</label>
                <input type="text" className="form-control" name='title' value={formData.title} required onChange={handleChange} />
            </div>lorem80
            <div className="mb-3">
                <label className="form-label fs-5">Description : </label>
                <textarea className="form-control" name='description' value={formData.description} required onChange={handleChange} rows="10"></textarea>
                <div>
                <div className="mb-3">
                <label className="form-label fs-5">Date : </label>
                </div>
                <input type="datetime-local" name='localDate'  onChange={handleChange} value={formData.localDate} required className="form-control w-50" />
                    {message ?
                        <p>{message}
                            <div class="spinner-border spinner-border-sm p-2" role="status">
                            </div></p> : ""}</div>
                <div >
                    {
                        isEdit ? 
                        <>
                        <button type="submit" className="btn btn-outline-info m-2" onClick={Update}>Update</button>
                        <button type="button" className="btn btn-outline-danger m-2" onClick={Cancel} >Cancel</button>
                        </> :
                        <button type="submit" className="btn btn-outline-info m-2" onClick={Create}>Create</button>
                    }
                    
                </div>
            </div>
        </div>

    );
}

export default TaskForm;