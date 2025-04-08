import TaskList from "../TaskList/TaskList"
import Header from "./Header"


const EmployerDashboard = () => {

    const taskTabs = [ "New Task" , "Accepted Task" , "Completed Task" , "Failed Task" ]

      return (
    <>
        <Header/> 

        <div className="flex justify-around items-center w-full my-8 gap-3" >
        {taskTabs.map((tab : string , tabIndex : number) =>{
            return(
              
                <div className= {"w-[20%] p-8 rounded-xl cursor-pointer " + ( tabIndex == 0 ? "bg-blue-500" : tabIndex == 1 ? " bg-amber-500" : tabIndex == 2 ? " bg-green-500" : "bg-red-500") } key={tabIndex}>
                    <h1 className="text-3xl font-semibold">0</h1>
                    <h3 className="text-xl my-4 ">{tab}</h3>
                </div>
               
            )
        })}
         </div>

         <TaskList/>
    </>
  )
}

export default EmployerDashboard