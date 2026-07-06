
function SortBar({ sortBy, setSortBy }) {
  return (
    <div className="mt-4">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border rounded-lg p-3"
      >
        <option>Newest</option>
        <option>Oldest</option>
        <option>Priority</option>
        <option>Due Date</option>
      </select>
    </div>
  );
}

export default SortBar;
