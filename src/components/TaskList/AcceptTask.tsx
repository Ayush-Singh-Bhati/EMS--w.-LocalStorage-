import { useState } from "react";
import { TaskStatusType } from "./TaskList";



const AcceptTask = ({ task }: TaskStatusType) => {

const [isAccepted, setIsAccepted] = useState(task.active);

  const handleClick = () =>{
      if (!task.active) setIsAccepted(!task.active)
      }

  return <div>
    <button onClick={() => handleClick()} className={"py-2 px-4 text-sm m-3 cursor-pointer " + (task ? 'bg-yellow-600' : 'bg-yellow-300 text-black')}>
             {!isAccepted ? 'Mark as Accepted' : 'Accepted'}
    </button>
  </div>;
};

export default AcceptTask;
