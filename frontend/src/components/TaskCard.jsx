import { useTasks } from "../context/TaskContext";
import { toast } from "react-toastify";

function TaskCard({ task }) {
  const { removeTask, setEditingTask } = useTasks();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await removeTask(task._id);
      toast.success("Task Deleted Successfully");
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };

  const priorityColor = {
    High: "bg-red-500",
    Medium: "bg-yellow-500",
    Low: "bg-green-500",
  };

  const statusColor = {
    Pending: "bg-orange-500",
    Completed: "bg-green-600",
  };

  const toggleStatus = async () => {
  const newStatus =
    task.status === "Pending"
      ? "Completed"
      : "Pending";

  await editTask(task._id, {
    ...task,
    status: newStatus,
  });
};

  return (
    <div className="
bg-white
rounded-2xl
shadow-lg
hover:shadow-2xl
hover:-translate-y-1
transition-all
duration-300
p-6
border
">

      <h2 className="text-2xl font-bold text-gray-800">
        {task.title}
      </h2>

      <p className="text-gray-600 mt-2">
        {task.description}
      </p>

      {task.dueDate && (
    <p className="text-sm text-gray-500 mt-3">
        📅 {new Date(task.dueDate).toLocaleDateString()}
    </p>
)}

      <div className="flex justify-between items-center mt-5">

        <button
  onClick={toggleStatus}
  className={`text-white px-3 py-1 rounded-full text-sm ${
    task.status === "Completed"
      ? "bg-green-600"
      : "bg-orange-500"
  }`}
>
  {task.status}
</button>

        <span
          className={`text-white px-3 py-1 rounded-full text-sm ${
            priorityColor[task.priority] || "bg-gray-500"
          }`}
        >
          {task.priority}
        </span>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() => setEditingTask(task)}
          className="flex-1 bg-gradient-to-r
from-blue-600
to-indigo-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="flex-1 bg-gradient-to-r
from-red-500
to-red-700 hover:bg-red-700 text-white py-2 rounded-lg transition"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;