import { FormEvent, useState } from "react";


const LogIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <>
        <div className="flex items-center justify-center h-screen w-screen ">
            <form onSubmit={(e) =>{
              handleSubmit(e)
            }} className="bg-[#25282b9d] shadow-md rounded-2xl flex flex-col items-center justify-center p-8" >
                <input value={email} onChange={(e)=>{
                  setEmail(e.target.value)
                }} required type="email" placeholder="Email " className=" m-6 mb-2 p-4 w-full border border-[#5649a5] rounded-xl text-lg outline-0 "/>
                <input  value={password} onChange={(e)=>{
                  setPassword(e.target.value)
                }} required className=" m-10 mt-2 p-4 w-full border border-[#5649a5] rounded-xl text-lg outline-0 " type="password"  placeholder="Password"/>
                <button className=" bg-[#5649a5] py-4 px-8 w-full rounded-2xl font-bold cursor-pointer">Log In</button>
            </form>
        </div>
    </>
  )
}

export default LogIn