

const TaskList = () => {
  return (
    <>
           <div id="tasklist" className="w-full my-6 px-6 overflow-x-auto flex justify-start items-center flex-nowrap gap-5">
                <div className="flex-shrink-0 w-[35%] h-80 bg-purple-500 py-8 px-4 rounded-xl cursor-pointer ">
                    <div className="flex justify-between items-center mb-4">
                        <p className="bg-red-700 px-2 py-1 text-sm rounded-3xl ">High</p>
                        <p className="text-sm">05 04 2025</p>
                    </div>
                        <h2 className="text-2xl font-semibold my-3 text-center" >Create a project</h2>
                        <p className="m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro iure aliquid optio amet incidunt.</p>
                </div>
                
           </div>
    </>
  )
}

export default TaskList