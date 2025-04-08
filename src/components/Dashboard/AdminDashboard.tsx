import AllTask from "../Tasks/AllTask"
import CreateTask from "../Tasks/CreateTask"
import Header from "./Header"

const AdminDashboard = () => {
  return (
    <> 
    <Header/>
    <CreateTask/>
    <AllTask/>
    </>
  )
}

export default AdminDashboard