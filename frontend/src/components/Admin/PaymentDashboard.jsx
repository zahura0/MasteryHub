import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { Users, Package, DollarSign, Clock } from "lucide-react";

// Simple Card replacement
const Card = ({ children, className }) => (
  <div className={`bg-white rounded-2xl shadow ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const data = Array.from({ length: 60 }, (_, i) => ({
  name: `${(i + 1) * 1000}`,
  value: Math.floor(Math.random() * 100),
}));

const PaymentDetails = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Payments Summary</h2>

      {/* Filter Section */}
      <div className="flex gap-4 bg-white p-4 rounded-2xl shadow mb-6">
        <div className="flex items-center gap-2">
          <span className="font-medium">Filter by:</span>
          <select className="bg-[#C4C4C4]/15 rounded-lg px-3 py-1 text-black focus:outline-none">
            <option>workshops</option>
            <option>courses</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="CID : C0001"
          className="bg-[#C4C4C4]/15 rounded-lg px-3 py-1 text-black focus:outline-none"
        />
        <input
          type="text"
          placeholder="Month : June"
          className="bg-[#C4C4C4]/15 rounded-lg px-3 py-1 text-black focus:outline-none"
        />
        <input
          type="text"
          placeholder="Year : 2025"
          className="bg-[#C4C4C4]/15 rounded-lg px-3 py-1 text-black focus:outline-none"
        />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="mx-auto mb-2 text-purple-500" />
            <h3 className="text-xl font-bold">40,689</h3>
            <p className="text-gray-600">Total User</p>
            <p className="text-green-600 text-sm mt-2">
              ⬆ 8.5% Up from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Package className="mx-auto mb-2 text-yellow-500" />
            <h3 className="text-xl font-bold">10,293</h3>
            <p className="text-gray-600">Total Order</p>
            <p className="text-green-600 text-sm mt-2">
              ⬆ 1.3% Up from past week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <DollarSign className="mx-auto mb-2 text-green-500" />
            <h3 className="text-xl font-bold">$89,000</h3>
            <p className="text-gray-600">Total Sales</p>
            <p className="text-red-600 text-sm mt-2">
              ⬇ 4.3% Down from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="mx-auto mb-2 text-orange-500" />
            <h3 className="text-xl font-bold">2040</h3>
            <p className="text-gray-600">Total Pending</p>
            <p className="text-green-600 text-sm mt-2">
              ⬆ 1.8% Up from yesterday
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Sales Details */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Sales Details</h3>
            <select className="border rounded-lg px-2 py-1 text-sm">
              <option>October</option>
              <option>September</option>
              <option>August</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#5A4FCF"
                fillOpacity={1}
                fill="url(#colorValue)"
              />
              <Line type="monotone" dataKey="value" stroke="#5A4FCF" dot />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentDetails;
