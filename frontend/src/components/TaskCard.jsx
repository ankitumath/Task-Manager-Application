function TaskCard() {

  return (

    <div className="bg-white shadow rounded p-5">

      <h2 className="text-xl font-bold">
        Learn React
      </h2>

      <p className="text-gray-600 mt-2">
        Complete React Hooks
      </p>

      <div className="flex justify-between mt-5">

        <span className="bg-yellow-200 px-3 py-1 rounded">
          Pending
        </span>

        <span className="bg-red-200 px-3 py-1 rounded">
          High
        </span>

      </div>

      <div className="flex gap-3 mt-5">

        <button className="bg-blue-500 text-white px-3 py-2 rounded">
          Edit
        </button>

        <button className="bg-red-500 text-white px-3 py-2 rounded">
          Delete
        </button>

      </div>

    </div>

  );
}

export default TaskCard;