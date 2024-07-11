import { useState } from "react";
import AddTaskModal from "../AddATaskModal/AddATaskModal";
import NotFoundTask from "../NotFoundTask/NotFoundTask";
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
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      setTask([...tasks, newTask]);
    } else {
      setTask(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModel(false);
  }
  function handleAddEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModel(true);
  }
  function handleCloseClick() {
    setShowAddModel(false);
    setTaskToUpdate(null);
  }
  function handleDeleteTask(taskId) {
    const tasksAfterDelete = tasks.filter((task) => task.id != taskId);
    setTask(tasksAfterDelete);
  }
  function handleDeleteAllClick() {
    tasks.length = 0;
    setTask([...tasks]);
  }
  function handleFavorite(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTask(newTasks);
  }
  function handleSearch(searchTerm) {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTask([...filtered]);
  }
  return (
    <div>
      <section className="mb-20" id="tasks">
        {showAddModel && (
          <AddTaskModal
            onSave={handleAddTask}
            taskToUpdate={taskToUpdate}
            onCloseClick={handleCloseClick}
          />
        )}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask onSearch={handleSearch}></SearchTask>
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              onAddClick={() => setShowAddModel(true)}
              onDeleteAllClick={handleDeleteAllClick}
            ></TaskAction>
            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                onEdit={handleAddEditTask}
                onDelete={handleDeleteTask}
                onFav={handleFavorite}
              >
                {" "}
              </TaskList>
            ) : (
              <NotFoundTask></NotFoundTask>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
