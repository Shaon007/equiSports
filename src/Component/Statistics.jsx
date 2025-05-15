import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const lineData = [
  { month: 'Jan', value: 40 },
  { month: 'Feb', value: 60 },
  { month: 'Mar', value: 30 },
  { month: 'Apr', value: 80 },
  { month: 'May', value: 45 },
  { month: 'Jun', value: 75 },
];

const barData = [
  { name: 'Product A', sales: 2400 },
  { name: 'Product B', sales: 1398 },
  { name: 'Product C', sales: 9800 },
  { name: 'Product D', sales: 3908 },
];

const Statistics = () => {
  return (
    <div className="md:p-8 bg-gray-100  font-sans">

      {/* Stat Grid */}
      <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-sm text-gray-500 mb-2">Total Users</h3>
          <p className="text-2xl font-semibold text-indigo-600">1,245</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-sm text-gray-500 mb-2">Monthly Revenue</h3>
          <p className="text-2xl font-semibold text-green-600">$24,580</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-sm text-gray-500 mb-2">New Products</h3>
          <p className="text-2xl font-semibold text-blue-600">68</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-sm text-gray-500 mb-2">Orders Today</h3>
          <p className="text-2xl font-semibold text-yellow-600">214</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Monthly Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Product Sales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
