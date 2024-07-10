import { useState } from "react";
import AddTaskModal from "../AddATaskModal/AddATaskModal";
import SearchTask from "../SearchTask/SearchTask";
import TaskAction from "../TaskAction/TaskAction";
import TaskList from "../TaskList/TaskList";

const TaskBoard = () => {
  const defaultTask = {
    id: Crypto.randomUUID,
    title: "Learning React",
    description:
      "I want to learn react such that I can treat it like my slave and make it do whatever i want to do",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: false,
  };
  const [tasks, setTask] = useState([defaultTask]);
  const [showAddModel, setShowAddModel] = useState(false);
  function handleAddTask(newTask) {
    setTask(...tasks, newTask);
    setShowAddModel(false);
  }
  return (
    <div>
      <section className="mb-20" id="tasks">
        {showAddModel && <AddTaskModal onSave={handleAddTask} />}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask></SearchTask>
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction onAddClick={() => setShowAddModel(true)}></TaskAction>
            <TaskList tasks={tasks}></TaskList>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
