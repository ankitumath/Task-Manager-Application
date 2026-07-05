import { FaTasks, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-700 shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="flex items-center gap-3">

          <FaTasks size={30} />

          <h1 className="text-2xl font-bold text-white">
            Task Manager
          </h1>

        </div>

        <div className="flex items-center gap-5 text-white">

          <div className="flex items-center gap-2">
            <FaUserCircle size={28}/>
            <span>{user?.name}</span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;