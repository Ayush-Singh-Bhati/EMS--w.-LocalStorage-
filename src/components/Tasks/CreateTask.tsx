const CreateTask = () => {
  return (
    <>
    <h1 className="text-center text-4xl font-bold m-6"> Create Task</h1>
    <form className="w-full px-14 flex justify-between items-start">
      <div className="w-1/2 ">
        <div className="my-3">
          <h3 className="my-2 text-xl ">Task Title</h3>
          <input
            type="text"
            placeholder="Create a Project of..."
            className="w-full py-2 px-4 text-lg border border-gray-500 text-gray-300 rounded-lg"
          />
        </div>
        <div className="my-3">
          <h3 className="my-2 text-xl ">Task Description</h3>
          <textarea
            placeholder="Description"
            className="w-full h-75 py-2 px-4 text-lg border border-gray-500 text-gray-300 rounded-lg"
          ></textarea>
        </div>
      </div>
      <div className="w-1/3 ">
        <div className="my-3">
          <h3 className="my-2 text-xl ">Date</h3>
          <input
            type="date"
            placeholder="Select Date"
            className="w-full py-2 px-4 text-lg border border-gray-500 rounded-lg"
          />
        </div>
        <div className="my-3">
          <h3 className="my-2 text-xl ">Assign To</h3>
          <input
            type="text"
            placeholder="Employer Name"
            className="w-full py-2 px-4 text-lg border border-gray-500 text-gray-300 rounded-lg"
          />
        </div>
        <div className="my-3">
          <h3 className="my-2 text-xl ">Category</h3>
          <select
            name=""
            id=""
            className="w-full py-2 px-4 text-lg border bg-[#202122] border-gray-500 rounded-lg"
          >
            <option value="">--Select--</option>
           
              <option value="dev">Developer</option>
              <option value="design">Design</option>
              <option value="sales">Sales & Marketing</option>
              <option value="customer">Customer Service</option>
              <option value="other">Other</option>
            
          </select>
        </div>
        <div className="my-3">
          <h3 className="my-2 text-xl ">Priority</h3>
          <select
            name=""
            id=""
             className="w-full py-2 px-4 text-lg border bg-[#202122] border-gray-500 rounded-lg"
          >
            <option value="">--Select--</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <button className="w-full my-3 bg-green-400 text-black text-xl font-semibold py-2 px-4 rounded-lg cursor-pointer">Create Task</button>
      </div>
    </form>
    </>
  );
};

export default CreateTask;
