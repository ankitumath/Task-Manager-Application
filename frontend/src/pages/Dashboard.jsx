import { useState } from "react";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import SortBar from "../components/SortBar";

function Dashboard() {
const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState("All");
const [priorityFilter, setPriorityFilter] = useState("All");
const [sortBy, setSortBy] = useState("Newest");

<FilterBar
    statusFilter={statusFilter}
    setStatusFilter={setStatusFilter}
    priorityFilter={priorityFilter}
    setPriorityFilter={setPriorityFilter}
/>



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <Stats />

          <div className="mt-6">
    <SearchBar onSearch={setSearch} />

  </div>

  <div className="flex flex-col md:flex-row gap-4 mt-4">

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="border rounded-lg p-3"
  >
    <option value="All">All Status</option>
    <option value="Pending">Pending</option>
    <option value="Completed">Completed</option>
  </select>

  <select
    value={priorityFilter}
    onChange={(e) => setPriorityFilter(e.target.value)}
    className="border rounded-lg p-3"
  >
    <option value="All">All Priority</option>
    <option value="High">High</option>
    <option value="Medium">Medium</option>
    <option value="Low">Low</option>
  </select>

</div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

          <div>
            <TaskForm />
          </div>

          <div className="lg:col-span-2">
         <TaskList
    search={search}
    statusFilter={statusFilter}
    priorityFilter={priorityFilter}
    sortBy={sortBy}
/>
          </div>

        </div>

      </div>

       <footer className="text-center py-6 text-gray-500">
    Built with ❤️ using React + Express + MongoDB
  </footer>
  
    </div>
  );
}

export default Dashboard;