import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <Stats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

          <div>
            <TaskForm />
          </div>

          <div className="lg:col-span-2">
            <TaskList />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;