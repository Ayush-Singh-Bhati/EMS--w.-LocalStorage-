import { useContext, useState, useEffect } from "react";
import LogIn from "./components/Auth/LogIn";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployerDashboard from "./components/Dashboard/EmployerDashboard";
import { adminType, employeesType } from "./utils/localStorage";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  // const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<employeesType | adminType | null>(null);
  const [globalData, setGlobalData] = useState<employeesType[] | adminType[] | null>(null);
  const userData = useContext(AuthContext);

  const handleLogin = (email: string, password: string) => {
    if (!userData) {
      console.log("No user data found");
      return;
    }

    const employees = userData?.employeesData || [];
    const admin = userData?.adminData || [];

    const foundUser = [...employees, ...admin].find(
      (e) => e.email == email && e.password == password
    );

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("userRole", JSON.stringify(foundUser.role));
      localStorage.setItem("userId", JSON.stringify(foundUser.id));
      console.log("Login successful:", foundUser);
      if ( foundUser.role === "employee" && "tasks" in foundUser && "taskNumber" in foundUser) {
        // console.log(foundUser.tasks);
        const finalEmployee = employees.filter((e) => e.id == foundUser.id);
        setGlobalData(finalEmployee);
        localStorage.setItem("loggedInUser", JSON.stringify(finalEmployee))
      } else if (foundUser.role === "admin") {
        const finalAdmin = admin.filter((e) => e.id == foundUser.id);
        setGlobalData(finalAdmin);
        localStorage.setItem("loggedInUser", JSON.stringify(finalAdmin))
      }
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout=()=>{
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    localStorage.removeItem("loggedInUser");
    setUser(null)
    setGlobalData(null)
  }

 // 👇 persist login even after refresh
  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const id = localStorage.getItem("userId");

    if (role && id && userData) {
      const parsedRole = JSON.parse(role);
      const parsedId = JSON.parse(id);

      const employees = userData?.employeesData || [];
      const admin = userData?.adminData || [];

      let foundUser: employeesType | adminType | undefined;

      if (parsedRole === "employee") {
        foundUser = employees.find((e) => e.id === parsedId);
        if (foundUser) {
          setUser(foundUser);
          const finalEmployee = employees.filter((e) => e.id === parsedId);
          setGlobalData(finalEmployee);
        }
      } else if (parsedRole === "admin") {
        foundUser = admin.find((e) => e.id === parsedId);
        if (foundUser) {
          setUser(foundUser);
          const finalAdmin = admin.filter((e) => e.id === parsedId);
          setGlobalData(finalAdmin);
        }
      }
    }
    // setLoading(false)
  }, [userData]);

  // console.log(globalData);

  // if (loading && !user) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //     <h1 className="text-3xl font-semibold">Loading...</h1>
  //   </div>
  //   )
  // }
  
  return (
    <>
      { !user ? <LogIn handleLogin={handleLogin} /> :
      user?.role == "employee" ? (
        <EmployerDashboard globalData={globalData as employeesType[]} handleLogout={handleLogout} />
      ) : user?.role == "admin" ? (
        <AdminDashboard globalData={globalData as adminType[]} handleLogout={handleLogout}/>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
