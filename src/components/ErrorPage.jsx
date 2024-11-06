import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Helmet>
        <title>Error 404 | Gadget Heaven</title>
      </Helmet>
      <div className="text-center space-y-4 my-4">
        <h1 className="text-5xl text-center">404 Not Found</h1>
        <button
          onClick={goHome}
          className="btn rounded-full text-purple-500 border border-purple-500 font-bold text-center"
        >
          Go To Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
