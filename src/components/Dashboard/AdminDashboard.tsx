import { adminType } from "../../utils/localStorage"
import AllTask from "../Tasks/AllTask"
import CreateTask from "../Tasks/CreateTask"
import Header from "./Header"

interface AdminDashboardProps {
  globalData : adminType[],
  handleLogout: () => void
}

const AdminDashboard = ({globalData , handleLogout} : AdminDashboardProps) => {
  return (
    <> 
    <Header globalData={globalData} handleLogout={handleLogout}/>
    <CreateTask/>
    <AllTask/>
    </>
  )
}

export default AdminDashboard