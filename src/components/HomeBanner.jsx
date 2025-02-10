import { Link } from "react-router-dom";
import bannerImg from "../assets/banner.jpg";

const HomeBanner = () => {
  return (
    <div>
      <div className="bg-purple-600 h-[500px] lg:h-[750px] rounded-3xl w-11/12 mx-auto -mt-24 mb-40 lg:mb-96 flex flex-col items-center justify-center relative">
        <div className="text-center space-y-8 ">
          <h1 className="text-3xl lg:text-6xl font-bold  text-white px-4">
            Upgrade Your Tech Accessories with Gadget Heaven Accessories
          </h1>
          <p className="text-gray-300 lg:text-lg px-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to="/dashboard/cart">
            <button className="btn rounded-full border border-purple-400 text-lg font-bold mt-4 text-purple-500">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute left-1/2 top-[480px] lg:top-[580px] -translate-x-1/2 w-fit mx-auto p-4 rounded-xl border-2 border-white bg-transparent backdrop-blur-lg">
        <img
          className="mx-auto rounded-xl lg:h-[500px]"
          src={bannerImg}
          alt="banner img"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
