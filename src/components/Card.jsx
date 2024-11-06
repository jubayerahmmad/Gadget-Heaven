import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div>
      <div className="rounded-xl flex flex-col bg-base-100 border border-purple-300 shadow-md">
        <div className="rounded-xl border border-purple-200 m-4">
          <img
            className="h-80 w-96 rounded-2xl p-2"
            src={product.product_image}
            alt="product"
          />
        </div>
        <div className="p-8 space-y-2">
          <div className="flex-grow">
            <h2 className="font-bold text-xl">{product.product_title}</h2>
            <p>Price: ${product.price}</p>
          </div>
          <div>
            <Link to={`/details/${product.product_id}`}>
              <button className="btn rounded-full text-purple-500 font-bold border border-purple-500">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
