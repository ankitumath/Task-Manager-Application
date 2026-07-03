function Stats() {

  return (

    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

      <div className="bg-white p-6 rounded shadow">
        <h2>Total</h2>
        <h1 className="text-3xl font-bold">0</h1>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2>Pending</h2>
        <h1 className="text-3xl font-bold">0</h1>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2>Completed</h2>
        <h1 className="text-3xl font-bold">0</h1>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2>High Priority</h2>
        <h1 className="text-3xl font-bold">0</h1>
      </div>

    </div>

  );
}

export default Stats;