import React, { useContext, useReducer, useState } from 'react';

import TaskContexts from '../contexts/TaskContexts';
import { dateFormat } from '../assets/dataFormat';
import PopUp from '../components/PopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { truncateText } from '../assets/text';
import { Link } from 'react-router-dom';


function usereducer (state, action) {
    switch (action.type) {
        case 'view':
            return {type : 'view' , data : action.payload};
            break;
            case 'update':
                return {type : 'update' , data : action.payload};
                break;
                case 'delete':
                    return {type : 'delete' , data : action.payload};
                    break;
    
        default:
            return state
            break;
    }
}

function TaskList(props) {
    const {allTasks} = useContext(TaskContexts);
    const [state, dispatch] = useReducer(usereducer , 0);
    const [search, setSearch] = useState('')

    const handleSearch=(e)=>{
        let text = e.target.value;
        setSearch(text);
    }
    
    let filterTask = allTasks?.filter(task => task.title.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className="container rounded bg-secondary p-3">
            <div className="d-flex p-3">
                <h1>Task Lists</h1>
            </div>
            <Link className='btn btn-outline-info float-end' to='/createTask'>createTask</Link>
            <input type="text" className='form-control my-3 w-50' placeholder='Search title' onChange={handleSearch} />
            <p>{search}</p>
            <table className="table table-dark"  >
                <thead >
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>DueDate</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allTasks?
                        filterTask.map((tasks)=>{
                            // let tasks = items.reverse();
                            return(
                                <tr key={tasks.id}>
                                    <td>{tasks.id}</td>
                                    <td>{tasks.title}</td>
                                    <td>{truncateText( tasks.description, 50)}</td>
                                    <td>{dateFormat(tasks.localDate)}</td>
                                    <td>
                                        <span className='px-2 ' data-bs-toggle="modal" data-bs-target="#task-modal" onClick={()=>{dispatch({type : 'view' , payload : tasks})}}>
                                        <FontAwesomeIcon icon={faEye} fade style={{color: "#ced0d4",}} />
                                        </span>
                                        <span className='px-2 ' data-bs-toggle="modal" data-bs-target='#task-modal' onClick={()=>{dispatch({type : 'update' , payload : tasks})}}>
                                        <FontAwesomeIcon icon={faPenToSquare}  style={{color: "#ced0d4",}} />
                                        </span>
                                        <span className='px-2 ' data-bs-toggle="modal" data-bs-target='#task-modal' onClick={()=>{dispatch({type : 'delete' , payload : tasks})}}>
                                        <FontAwesomeIcon icon={faTrashCan}  style={{color: "#ced0d4",}} />
                                        </span>
                                        
                                    </td>
                                    
                                </tr>
                                
                            )
                        }) : <tr><td>'No Tasks'</td></tr>
                    }
                </tbody>
            </table>
                    <PopUp option={state}  /> 
        </div>
    );
}

export default TaskList;