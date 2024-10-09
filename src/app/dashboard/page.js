// src/app/dashboard/page.js


const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-gray-800 text-white p-5">
        <h2 className="text-2xl font-bold mb-5">Admin Dashboard</h2>
        <ul>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Home</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Charities</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Donations</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Users</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Settings</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Logout</button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Data Cards */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold">Total Charities</h2>
            <p className="text-5xl mt-2">25</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold">Total Donations</h2>
            <p className="text-5xl mt-2">$12,500</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold">Active Users</h2>
            <p className="text-5xl mt-2">150</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold">Pending Requests</h2>
            <p className="text-5xl mt-2">5</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold">New Charities This Month</h2>
            <p className="text-5xl mt-2">8</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold">Total Campaigns</h2>
            <p className="text-5xl mt-2">14</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
