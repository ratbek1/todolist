import React, { useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

const HomeList = ({ el, task, setTask }) => {
  const [newValue, SetNewValue] = useState("");
  const [rename, setRename] = useState(false);
  const DelTask = (id) => {
    const Del = task.filter((el) => el.id !== id);
    setTask(Del);
    localStorage.setItem("list", JSON.stringify(Del));
  };
  return (
    <ul className=" text-white">
      <div className="bg-blue-500 w-[400px] rounded-lg my-2 h-[50px] flex items-center justify-between py-2 px-5">
        <li>
          {rename ? (
            <input
              defaultValue={el.title}
              onChange={(e) => SetNewValue(e.target.value)}
              type="text"
              className="w-[200px] text-black rounded-md px-2 outline-none"
            />
          ) : (
            (el.title = newValue || el.title)
          )}
        </li>
        <div>
          <button
            className="bg-yellow-500 py-[6.5px] px-4 text-white rounded-md mx-2"
            onClick={() => {
              setRename(!rename);
              if (rename) {
                const updatedTasks = task.map((item) => {
                  if (item.id === el.id) {
                    return { ...item, title: newValue || el.title };
                  }
                  return item;
                });
                setTask(updatedTasks);
                localStorage.setItem("list", JSON.stringify(updatedTasks));
              }
            }}
          >
            {rename ? <FaCheck /> : <AiTwotoneEdit />}
          </button>
          <button
            onClick={() => DelTask(el.id)}
            className="bg-red-500 py-1 px-4 text-white rounded-md"
          >
            delete
          </button>
        </div>
      </div>
    </ul>
  );
};

export default HomeList;
