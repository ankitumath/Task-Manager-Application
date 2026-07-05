import {
FaTasks,
FaClock,
FaCheckCircle,
FaFire
} from "react-icons/fa";
import { useTasks } from "../context/TaskContext";

function Stats() {

  const { tasks } = useTasks();

  const total = tasks.length;

  const completed = tasks.filter(
    task => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    task => task.status !== "Completed"
  ).length;

  const highPriority = tasks.filter(
    task => task.priority === "High"
  ).length;

  const cards = [
    {
      title: "Total Tasks",
      value: total,
      color: "bg-blue-500",
    },
    {
      title: "Pending",
      value: pending,
      color: "bg-yellow-500",
    },
    {
      title: "Completed",
      value: completed,
      color: "bg-green-500",
    },
    {
      title: "High Priority",
      value: highPriority,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`${card.color} text-white rounded-xl p-6 shadow`}
        >

          <h3 className="text-lg">
            {card.title}
          </h3>

          <p className="text-4xl font-bold mt-2">
            {card.value}
          </p>

        </div>

      ))}

    </div>
  );
}

export default Stats;