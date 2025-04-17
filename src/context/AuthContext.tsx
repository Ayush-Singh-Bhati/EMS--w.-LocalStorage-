import { createContext, useEffect, useState } from "react";
import { adminType, employeesType, getData, setData } from "../utils/localStorage";



export const AuthContext = createContext<{ employeesData: employeesType[]; adminData: adminType[] } | null>(null);

interface AuthProviderProps {
    children: React.ReactNode;  
}



export const AuthProvider = ({children} : AuthProviderProps ) =>{

  const [authData, setAuthData] = useState<{ employeesData: employeesType[]; adminData: adminType[] } | null>(null);

    useEffect(() => {
        setData(); // Initialize data in local storage
      const { employeesData, adminData } = getData();
      setAuthData({ employeesData, adminData });
    }, []);
     
   
  return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
}