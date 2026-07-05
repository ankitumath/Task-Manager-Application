import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import { ClipLoader } from "react-spinners";

function TaskList({
  search = "",
  statusFilter = "All",
  priorityFilter = "All",
}) {

  const { tasks, loading } = useTasks();

  if (loading) {
  return (
    <div className="flex justify-center items-center py-10">
      <ClipLoader size={40} color="#2563eb" />
    </div>
  );
}

  const filteredTasks = tasks.filter((task) => {

  const matchesSearch =
    task.title.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    statusFilter === "All" ||
    task.status === statusFilter;

  const matchesPriority =
    priorityFilter === "All" ||
    task.priority === priorityFilter;

  return (
    matchesSearch &&
    matchesStatus &&
    matchesPriority
  );
});

  if (filteredTasks.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h2 className="text-lg font-semibold">
          No Tasks Found
        </h2>

        <p className="text-gray-500 mt-2">
          Create your first task or try a different search.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {filteredTasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
        />
      ))}
    </div>
  );
}

export default TaskList;