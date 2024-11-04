import { Link } from "react-router-dom";
const Card = ({ product }) => {
  return (
    <div>
      <div className="card bg-base-100 border shadow-md">
        <div className="rounded-xl border m-4">
          <img
            className="h-80 w-96 rounded-2xl p-2"
            src={product.product_image}
            alt="Shoes"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{product.product_title}</h2>
          <p>Price: ${product.price}</p>
          <div className="card-actions">
            <Link to="/details">
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
