import React, { useState } from "react";
import HomeList from "./HomeList";
const local = JSON.parse(localStorage.getItem("list"));

const Home = () => {
  const [task, setTask] = useState(local || []);
  const [value, SetValue] = useState("");
  localStorage.setItem("list", JSON.stringify(task));
  const getTask = () => {
    if (value === "") {
      alert("Заполните полю!!!");
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: value,
      };
      setTask([...task, newTask]);
      SetValue("");
    }
  };

  return (
    <div>
      <div className="flex justify-center pt-20">
        <div className="flex ">
          <input
            value={value}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                getTask();
              }
            }}
            onChange={(e) => SetValue(e.target.value)}
            type="text"
            class="block outline-none w-[400px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Text"
            required
          />
          <button
            onClick={getTask}
            class="text-white mx-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            add
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-20 mr-24">
        {task.map((el) => (
          <HomeList el={el} task={task} setTask={setTask} local={local} />
        ))}
      </div>
    </div>
  );
};

export default Home;
