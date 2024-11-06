import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
} from "recharts";

const Statistics = () => {
  const products = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      <div className="h-48 w-full bg-purple-600">
        <div className="p-8 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-white text-center">
            Statistics
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 text-center">
            View detailed analytics and insights about products.
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto p-4">
        <h1 className="text-2xl font-bold my-12">Statistics</h1>

        <div className="lg:p-12 p-2 border-2 rounded-2xl">
          <ResponsiveContainer height={650}>
            <BarChart data={products}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product_title" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend></Legend>

              <Bar dataKey="product_title" fill="#2F4F4F" />
              <Bar dataKey="price" fill="#8a2be4" />
              {/* Fill color set to purple */}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
