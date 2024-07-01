import { useState } from "react";
import SearchTask from "../SearchTask/SearchTask";
import TaskAction from "../TaskAction/TaskAction";
import TaskList from "../TaskList/TaskList";

const TaskBoard = () => {
  const [task, setTask] = useState([]);

  const defaultTask = {
    id: Crypto.randomUUID(),
  };
  return (
    <div>
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask></SearchTask>
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction></TaskAction>
            <TaskList></TaskList>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
