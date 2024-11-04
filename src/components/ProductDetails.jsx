import { useLoaderData, useParams } from "react-router-dom";
import DBanner from "./DBanner";
import { FaRegStar } from "react-icons/fa6";

const ProductDetails = () => {
  const { productId } = useParams();
  const products = useLoaderData();

  const detailedProduct = [...products].find(
    (product) => product.product_id === productId
  );
  // console.log(detailedProduct);
  const {
    product_image,
    product_title,
    category,
    price,
    specifications,
    description,
    rating,
    availability,
  } = detailedProduct;
  return (
    <div>
      <DBanner></DBanner>
      <div className="container mx-auto">
        <div className="lg:flex gap-8">
          <div>
            <img src={product_image} alt="" />
          </div>
          <div>
            <h1>{product_title}</h1>
            <p>Price: ${price}</p>
            <span
              className={`px-3 py-1 rounded-full border-2 text-center font-bold ${
                availability
                  ? "border-green-500 text-green-700 bg-green-200"
                  : "border-red-500 text-red-700 bg-red-200"
              }`}
            >
              {availability ? "In Stock" : "Stock Out"}
            </span>
            <p>{description}</p>
            <div>
              <h1 className="font-bold">Specifications:</h1>
              <ul className="list-disc ml-8">
                {specifications.map((specs) => (
                  <li>{specs}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 items-center">
              <h1 className="font-bold">Rating: </h1>
              <div className="flex gap-2 items-center">
                <p>{rating}</p>
                <FaRegStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
