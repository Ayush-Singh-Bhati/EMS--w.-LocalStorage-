import {  useState } from "react";
import { TaskStatusType } from "./TaskList";



const CompleteTask = ({task} : TaskStatusType) => {



  const [isCompleted, setIsCompleted] = useState(task.complete);


  const handleClick=()=>{
    if (!task.complete) {
      setIsCompleted(!task.complete)
    }
     
    
  }
  return <div>
    <button onClick={()=>handleClick()} className={"py-2 px-4 text-sm m-3 cursor-pointer " + (task ? 'bg-green-500' : 'bg-green-300 text-black')}>
        {isCompleted ? "Completed" : "Mark as Completed"}
    </button>
  </div>;
};

export default CompleteTask;
