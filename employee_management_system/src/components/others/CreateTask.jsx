import React, { useState } from "react";

const CreateTask = () => {
  const [form, setForm] = useState({
    title: "",
    deadline: "",
    assignedTo: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handelForm = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({
      title: "",
      deadline: "",
      assignedTo: "",
      description: "",
    });
  };

  return (
    <div className="flex justify-center items-center mx-24 mt-10">
      <form
        onSubmit={handelForm}
        className="bg-[#1e1e1e] w-full  shadow-lg p-8 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side - Inputs */}
          <div className="space-y-5">
            <div>
              <label className="block mb-2 font-medium text-gray-300">
                Task Title
              </label>
              <input
                required
                onChange={handleChange}
                value={form.title}
                name="title"
                type="text"
                className="w-full p-2 rounded-md bg-[#2b2b2b] text-gray-100 border border-gray-600 focus:outline-none focus:border-[#43baff] transition"
                placeholder="e.g. Make a UI Design"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-300">
                Deadline
              </label>
              <input
                required
                onChange={handleChange}
                value={form.deadline}
                name="deadline"
                type="date"
                className="w-full p-2 rounded-md bg-[#2b2b2b] text-gray-100 border border-gray-600 focus:outline-none focus:border-[#43baff] transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-300">
                Assigned To
              </label>
              <input
                required
                onChange={handleChange}
                value={form.assignedTo}
                name="assignedTo"
                type="text"
                className="w-full p-2 rounded-md bg-[#2b2b2b] text-gray-100 border border-gray-600 focus:outline-none focus:border-[#43baff] transition"
                placeholder="e.g. John Doe"
              />
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="flex flex-col">
            <label className="block mb-2 font-medium text-gray-300">
              Description
            </label>
            <textarea
              required
              onChange={handleChange}
              value={form.description}
              name="description"
              rows="5"
              className="w-full p-3 rounded-md bg-[#2b2b2b] text-gray-100 border border-gray-600 focus:outline-none focus:border-[#43baff] transition resize-none"
              placeholder="Enter task description here..."
            ></textarea>

            {/* Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="px-8 py-3 bg-[#43baff] hover:bg-[#2b90e2] text-white font-semibold rounded-md transition duration-300"
              >
                Create Task
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
