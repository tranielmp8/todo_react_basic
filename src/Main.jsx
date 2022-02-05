import React, {useState} from 'react';

export default function Main() {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])
  const addTask = () =>{
    setTaskList([...taskList, task])
  }
  const taskListContent = taskList.map((taskItem, index)=>{
    return (
      <div className="list-item justify-content-center ">
        <p>{taskItem}</p>
        <i class="fas fa-trash-alt delete" onClick={deleteTask(index)} ></i>
      </div>
    )
  })

  function deleteTask(index){
    const newArray = [...taskList]
    newArray.splice(index, 1)
    setTaskList(newArray)
  }


  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded wrapper">
          <h1>React TODO List</h1>
          <div className="input-form">
          <input type="text" placeholder="Enter Task!" className="form-control" value={task} onChange={(e)=>{setTask(e.target.value)}} />
          <button className="btn btn-success" onClick={addTask} >Add Task</button>
          </div>
          <br />
          {taskListContent}
        </div>
        
      </div>
    </div>
  )
}

//shadow-lg p-3 mb-5 bg-white rounded