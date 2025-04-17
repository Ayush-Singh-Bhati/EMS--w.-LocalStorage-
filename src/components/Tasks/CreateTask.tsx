import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TaskType } from "../../utils/localStorage";

const CreateTask = () => {
  const userData = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask : TaskType={
      taskTitle,
      taskDescription,
      date,
      assignTo,
      category,
      priority,
      active: true,
      complete: false,
      newTask: true,
      failed: false,
    }
   
    console.log("Form submitted", newTask);

    userData?.employeesData.forEach((employee) => {
      if (employee.name == assignTo) {
        employee.tasks.push(newTask);
        employee.taskNumber.newTask += 1;
        employee.taskNumber.active += 1;
        localStorage.setItem("employees", JSON.stringify(userData.employeesData));
      }      
    });
    console.log(userData?.employeesData);
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold m-6"> Create Task</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="w-full px-14 flex justify-between items-start"
      >
        <div className="w-1/2 ">
          <div className="my-3">
            <h3 className="my-2 text-xl ">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Create a Project of..."
              className="w-full py-2 px-4 text-lg border border-gray-500 text-gray-300 rounded-lg"
            />
          </div>
          <div className="my-3">
            <h3 className="my-2 text-xl ">Task Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Description"
              className="w-full h-75 py-2 px-4 text-lg border border-gray-500 text-gray-300 rounded-lg"
            ></textarea>
          </div>
        </div>
        <div className="w-1/3 ">
          <div className="my-3">
            <h3 className="my-2 text-xl ">Date</h3>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              placeholder="Select Date"
              className="w-full py-2 px-4 text-lg border border-gray-500 rounded-lg"
            />
          </div>
          <div className="my-3">
            <h3 className="my-2 text-xl ">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              placeholder="Employer Name"
              className="w-full py-2 px-4 text-lg border border-gray-500 text-gray-300 rounded-lg"
            />
          </div>
          <div className="my-3">
            <h3 className="my-2 text-xl ">Category</h3>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name=""
              id=""
              className="w-full py-2 px-4 text-lg border bg-[#202122] border-gray-500 rounded-lg"
            >
              <option value="">--Select--</option>

              <option value="dev">Developer</option>
              <option value="design">Design</option>
              <option value="sales">Sales & Marketing</option>
              <option value="customer">Customer Service</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="my-3">
            <h3 className="my-2 text-xl ">Priority</h3>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              name=""
              id=""
              className="w-full py-2 px-4 text-lg border bg-[#202122] border-gray-500 rounded-lg"
            >
              <option value="">--Select--</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <button className="w-full my-3 bg-green-400 text-black text-xl font-semibold py-2 px-4 rounded-lg cursor-pointer">
            Create Task
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTask;
