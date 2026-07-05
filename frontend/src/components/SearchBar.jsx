import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  return (
    <div className="relative">

      <FaSearch className="absolute left-4 top-4 text-gray-400" />

      <input
        type="text"
        placeholder="Search Tasks..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full border rounded-xl p-3 pl-12 shadow"
      />

    </div>
  );
}

export default SearchBar;