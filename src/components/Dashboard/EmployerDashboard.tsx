import { employeesType } from "../../utils/localStorage"
import TaskList from "../TaskList/TaskList"
import Header from "./Header"

interface EmployerDashboardProps {
    globalData: employeesType[],
    handleLogout: () => void
}

const EmployerDashboard = ({globalData , handleLogout} : EmployerDashboardProps) => {

    const taskTabs = [ "New Task" , "Accepted Task" , "Completed Task" , "Failed Task" ]
    const taskNumber = globalData[0].taskNumber

      return (
    <>
        <Header globalData={globalData} handleLogout={handleLogout}/> 

        <div className="flex justify-around items-center w-full my-8 gap-3" >
        {taskTabs.map((tab : string , tabIndex : number) =>{
            return(
              
                <div className= {"w-[20%] p-8 rounded-xl cursor-pointer " + ( tabIndex == 0 ? "bg-blue-500" : tabIndex == 1 ? " bg-amber-500" : tabIndex == 2 ? " bg-green-500" : "bg-red-500") } key={tabIndex}>
                    <h1 className="text-3xl font-semibold">{ tabIndex == 0 ? taskNumber.newTask : tabIndex == 1 ? taskNumber.active : tabIndex == 2 ? taskNumber.complete : tabIndex == 3 ? taskNumber.failed : "N/A"}</h1>
                    <h3 className="text-xl my-4 ">{tab}</h3>
                </div>
               
            )
        })}
         </div>

         <TaskList globalData={globalData}/>
    </>
  )
}

export default EmployerDashboard