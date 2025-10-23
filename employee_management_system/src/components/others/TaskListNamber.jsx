import React from "react";

const TaskListNamber = (data) => {
  const userData = data.data.taskCounts;
 
  return (
    <section className="flex px-24 py-10 gap-10 screen">
      <div className="rounded w-[45%] bg-yellow-500 flex justify-start p-5 items-center">
        <h1 className="text-white font-semibold text-2xl">
          {userData.active} <br /> <span>Active</span>
        </h1>
      </div>
      ;{/* 2 */}
      <div className="rounded w-[45%] bg-blue-500 flex justify-start p-5 items-center">
        <h1 className="text-white font-semibold text-2xl">
          {userData.newTask}  <br /> <span>New</span>
        </h1>
      </div>
      ;{/* 3 */}
      <div className="rounded w-[45%] bg-green-500 flex justify-start p-5 items-center">
        <h1 className="text-white font-semibold text-2xl">
          {userData.completed} <br /> <span>Complete</span>
        </h1>
      </div>
      ;{/* 4 */}
      <div className="rounded w-[45%] bg-red-500 flex justify-start p-5 items-center">
        <h1 className="text-white font-semibold text-2xl">
           {userData.failed} <br /> <span>Fail</span>
        </h1>
      </div>
    </section>
  );
};

export default TaskListNamber;
