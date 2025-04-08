

const Header = () => {
  return (
    <>
    <div className="flex justify-between items-center py-8 px-14 w-screen">
        <h1 className=" text-xl font-medium"> Hello, <br /> <span className="text-3xl font-semibold">Ayush 👋</span></h1>
        <button className="bg-red-500 py-3 px-6 text-lg rounded-xl font-bold cursor-pointer">Log Out</button>
    </div>
    <hr className="mx-[15%] text-gray-400" />
    </>
  )
}

export default Header