import { employeesType, TaskType } from "../../utils/localStorage";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";


interface TaskListProps {
  globalData: employeesType[];
}

export interface TaskStatusType{
  task : TaskType
}

const TaskList = ({ globalData }: TaskListProps) => {
  const tasks = globalData[0].tasks;
  const color = [
    "bg-pink-500",
    "bg-purple-500",
    "bg-indigo-500",
    "bg-cyan-500",
    "bg-teal-500",
    "bg-orange-500",
  ];

  return (
    <>
      <div
        id="tasklist"
        className="w-full my-6 px-6 overflow-x-auto flex justify-start items-center flex-nowrap gap-5"
      >
        {tasks.map((task, taskIndex) => {
          const randomColor = color[Math.floor(Math.random() * color.length)];
          return (
            <div
              key={taskIndex}
              className={
                "flex-shrink-0 w-[35%] h-80 py-8 px-4 rounded-xl relative overflow-hidden " +
                randomColor
              }
            >
              <div className="flex justify-between items-center mb-4">
                <p
                  className={
                    "px-2 py-1 text-sm rounded-3xl z-10 " +
                    (task.priority === "High"
                      ? "bg-red-700"
                      : task.priority === "Medium"
                      ? "bg-amber-600"
                      : "bg-green-600")
                  }
                >
                  {task.priority}
                </p>
                <p className="text-sm font-semibold">{task.date}</p>
              </div>
              <h2 className="text-2xl font-semibold my-3 text-center">
                {task.taskTitle} <span className="text-sm font-extralight bg-gray-600 p-1 rounded-lg">{task.category}</span>
              </h2>
              <p className="m-3 text-center">{task.taskDescription}</p>

                  <div className="flex justify-evenly items-center">
                   <AcceptTask task={task}/> 
                  <CompleteTask task={task}/> 
                  </div>
                  { task.newTask && <NewTask/>} 
                  { task.failed && <FailedTask/>} 

            </div>
          );
        })}
      </div>
    </>
  );
};

export default TaskList;
