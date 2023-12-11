import { createContext, useContext, useEffect, useState } from "react";

import { baseUrl, taskEnd } from "../assets/dbUrl";
import AuthContexts from "./AuthContexts";

const TaskContexts = createContext();

export const TaskProvider = ({children}) => {
    const {setMessage, user} = useContext(AuthContexts);
    const [allTasks, setAllTasks] = useState(null);
    const [newTasks, setNewTasks] = useState(null);
    const [oldTasks, setOldTasks] = useState(null);
    const [isUpdate , setIsUpdate] = useState(false)



    // post task
    const createTask = async(formData) =>{
        const object = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(formData)
        }
        const response = await fetch(`${baseUrl}/${taskEnd}`, object);
        if(response.ok){
            
                setMessage('Task Created!')
                setIsUpdate(true);
        }
        else{
            setMessage('Task not created!')
        }
    }

    // all tasks
    const getAllTasks = async() => {
        let response = await fetch(`${baseUrl}/${taskEnd}?userId=${user.id}`, {method: 'GET'});
        if (response.ok) {
            let allTasks = await response.json();
            setAllTasks(allTasks);
            let latest = await allTasks[allTasks.length -1];
            setNewTasks(latest);
            let recent = await allTasks.slice(-3);
            setOldTasks(recent);
        } else {
            alert('task error')
        }
    }

    //update Task
    const updateTask = async(formData) => {
        const object = {
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(formData)
        }
  
        
    const response = await fetch(`${baseUrl}/${taskEnd}/${formData.id}` , object);
    if(response.ok){
        let newData = await response.json();
        setAllTasks(newData);
        setMessage('Task Updated!');
        setIsUpdate(true)
    }
    else{
        setMessage('Task Not Updated!')
    }
}

const deleteTask =async(id)=>{
try{
    const response =await fetch(`${baseUrl}/${taskEnd}/${id}`, {method : 'DELETE'});
    if (response.ok){
        setMessage('Task Deleted !');
        getAllTasks();
       setTimeout(()=>{
        setMessage('')
       },2000);
    }
    
    
    else{
        setMessage('Please try agian');
    }
    }catch(err){
    console.log(err);
    }
}
    useEffect(()=>{
        if(user){
            getAllTasks()
        }
    },[user])

    return(
        <TaskContexts.Provider value={{
            createTask,
            setMessage,
            allTasks,
            oldTasks,
            newTasks,
            isUpdate,
            updateTask,
            deleteTask
        }}>
            {children}
        </TaskContexts.Provider>
    )
}
export default TaskContexts;