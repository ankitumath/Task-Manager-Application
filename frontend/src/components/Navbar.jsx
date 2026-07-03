import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-blue-600">
          Task Manager
        </h1>

        <div className="flex items-center gap-5">

          <span>
            Welcome, {user?.name}
          </span>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;