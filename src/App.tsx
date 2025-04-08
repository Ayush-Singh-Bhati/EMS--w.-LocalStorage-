import LogIn from "./components/Auth/LogIn"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployerDashboard from "./components/Dashboard/EmployerDashboard"


const App = () => {
  return (
    <>
      <LogIn/>
      <EmployerDashboard/>
      <AdminDashboard/>
    </>
  )
}

export default App