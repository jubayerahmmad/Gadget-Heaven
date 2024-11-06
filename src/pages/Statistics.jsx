import { Helmet } from "react-helmet-async";

const Statistics = () => {
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
            View detailed analytics and insights about your shopping activities
            and preferences
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-5xl text-center text-purple-500 font-bold mt-16">
          No Statistics To Show
        </h1>
      </div>
    </div>
  );
};

export default Statistics;
