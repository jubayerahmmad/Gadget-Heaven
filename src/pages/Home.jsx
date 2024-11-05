import { Outlet, useLoaderData } from "react-router-dom";
import CategorySidebar from "../components/CategorySidebar";
import HomeBanner from "../components/HomeBanner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Home | Gadget Heaven</title>
      </Helmet>
      <HomeBanner></HomeBanner>
      <div className="my-12 w-10/12 mx-auto">
        <h1 className="text-center font-bold text-2xl lg:text-4xl my-4">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="lg:flex gap-6 my-12">
          <div className="lg:w-1/4">
            <CategorySidebar categories={categories}></CategorySidebar>
          </div>
          <div className="lg:w-3/4">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
