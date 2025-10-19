import React from "react";

const TaskListNamber = () => {
  return (
    <section className="flex px-24 py-10 gap-10 screen">
      <div className="rounded w-[45%] bg-green-500 flex justify-start p-5 items-center">
        <h1 className="text-white font-semibold text-2xl">
          0 <br /> <span>task</span>
        </h1>
      </div>
      {/* 2 */}
      <div className="rounded w-[45%] bg-red-500 flex justify-start p-5 items-center">
        <h1 className="text-white font-semibold text-2xl">
          0 <br /> <span>task</span>
        </h1>
      </div>
      {/* 3 */}
      <div className="rounded w-[45%] bg-blue-500 flex justify-start p-5 items-center">
        <h1 className="text-white font-semibold text-2xl">
          0 <br /> <span>task</span>
        </h1>
      </div>
      {/* 4 */}
      <div className="rounded w-[45%] bg-yellow-500 flex justify-start p-5 items-center">
        <h1 className="text-white font-semibold text-2xl">
          0 <br /> <span>task</span>
        </h1>
      </div>
    </section>
  );
};

export default TaskListNamber;
