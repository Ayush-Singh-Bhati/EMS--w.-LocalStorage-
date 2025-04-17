import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const AllTask = () => {

    const userData = useContext(AuthContext)

  return (
    <>
      <h1 className=" text-4xl font-bold my-6 mx-14">All Employees w. Task Count</h1>
      <div id="alltask"className="mx-14 mb-2.5 bg-[#313435] p-6" >
        <div className="flex justify-between items-center w-full mb-4 bg-indigo-400 py-4 rounded-md text-black font-semibold">
          <h3 className=" w-1/5 text-2xl text-center ">Employee</h3>
          <h3 className=" w-1/5 text-2xl text-center">New Task</h3>
          <h3 className=" w-1/5 text-2xl text-center">Accepted</h3>
          <h3 className=" w-1/5 text-2xl text-center">Completed</h3>
          <h3 className=" w-1/5 text-2xl text-center">Failed</h3>
        </div>
        {userData?.employeesData.map((employee , index)=>{
            return(
                <div key={index} className="flex justify-between items-center w-full mb-4 border-2 border-indigo-500 py-4 rounded-md font-semibold">
                <h3 className=" w-1/5 text-lg text-center text-emerald-400">{employee.name}</h3>
                <h3 className=" w-1/5 text-lg text-center text-blue-400">{employee.taskNumber.newTask}</h3>
                <h3 className=" w-1/5 text-lg text-center text-yellow-300">{employee.taskNumber.active}</h3>
                <h3 className=" w-1/5 text-lg text-center text-green-600">{employee.taskNumber.complete}</h3>
                <h3 className=" w-1/5 text-lg text-center text-red-500">{employee.taskNumber.failed}</h3>
              </div>
            )
        })}
      </div>
    </>
  );
};

export default AllTask;
