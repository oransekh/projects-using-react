import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [form, setForm] = useState({
    taskTitle: "",
    taskDate: "",
    assignedTo: "",
    category: "",
    taskDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(userData.employees);

  const handelForm = (e) => {
    e.preventDefault();

    const newTask = {
      ...form,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    let assigned = false; // track if any match found

    const updatedEmployees = userData.employees.map((elem) => {
      if (form.assignedTo.toLowerCase() === elem.firstName.toLowerCase()) {
        assigned = true;
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1,
          },
        };
      }
      return elem;
    });

    if (assigned) {
      setUserData({ ...userData, employees: updatedEmployees });
      alert(`✅ Task assigned to ${form.assignedTo} successfully!`);
    } else {
      alert(`⚠️ Employee '${form.assignedTo}' not found!`);
    }

    setForm({
      taskTitle: "",
      taskDate: "",
      assignedTo: "",
      category: "",
      taskDescription: "",
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
                value={form.taskTitle}
                name="taskTitle"
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
                value={form.taskDate}
                name="taskDate"
                type="date"
                className="w-full p-2 rounded-md bg-[#2b2b2b] text-gray-100 border border-gray-600 focus:outline-none focus:border-[#43baff] transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-300">
                Assigned To
              </label>
              <select
                onChange={handleChange}
                value={form.assignedTo}
                name="assignedTo"
                className="w-full p-2 rounded-md bg-[#2b2b2b] text-gray-100 border border-gray-600 focus:outline-none focus:border-[#43baff] transition"
              >
                <option value="">-- Select Employee --</option>
                {userData.employees.map((emp, index) => (
                  <option key={index} value={emp.firstName}>
                    {emp.firstName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-300">
                Category
              </label>
              <input
                required
                onChange={handleChange}
                value={form.category}
                name="category"
                type="text"
                className="w-full p-2 rounded-md bg-[#2b2b2b] text-gray-100 border border-gray-600 focus:outline-none focus:border-[#43baff] transition"
                placeholder="e.g. Development"
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
              value={form.taskDescription}
              name="taskDescription"
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
