import { useLoaderData, useParams } from "react-router-dom";
import DBanner from "./DBanner";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import {
  addCartToLocalStorage,
  addWishlistToLocalStorage,
  getStoredWishlist,
} from "../Utils/utilities";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactStars from "react-rating-stars-component";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { productId } = useParams();
  const products = useLoaderData();
  const [details, setDetails] = useState({});

  const [isAddedWishlist, setIsAddedWishList] = useState(false);

  useEffect(() => {
    const detailedProduct = [...products].find(
      (product) => product.product_id === productId
    );
    setDetails(detailedProduct);

    const wishList = getStoredWishlist();
    const isAvailable = wishList.find(
      (productId) => productId === detailedProduct.product_id
    );
    if (isAvailable) {
      setIsAddedWishList(true);
    }
  }, []);

  const handleAddToCart = (id) => {
    if (availability) {
      addCartToLocalStorage(id);
    } else {
      toast.error("Product Stock Out");
    }
  };
  const handleAddToWishlist = (id) => {
    addWishlistToLocalStorage(id);
    setIsAddedWishList(true);
  };

  const {
    product_id,
    product_image,
    product_title,
    price,
    specifications,
    description,
    rating,
    availability,
    warranty,
  } = details;
  return (
    <div>
      <Helmet>
        <title>Product Details | Gadget Heaven</title>
      </Helmet>
      <div className="relative mb-[600px] lg:mb-96">
        <DBanner></DBanner>
      </div>

      <div className="p-4 absolute left-1/2 top-[300px] lg:top-[280px] -translate-x-1/2 w-full">
        <div className="container mx-auto border rounded-xl p-4 bg-white">
          <div className="lg:flex items-center gap-8 space-y-4">
            <div>
              <img
                className="h-64 w-full mx-auto object-cover lg:h-96 lg:w-96 border rounded-xl"
                src={product_image}
                alt=""
              />
            </div>
            <div className="space-y-2">
              <h1 className="lg:text-4xl text-2xl font-bold ">
                {product_title}
              </h1>
              <p className="font-bold">Price: ${price}</p>
              <p
                className={`px-3 py-1 rounded-full border-2 text-center w-fit font-bold ${
                  availability
                    ? "border-green-500 text-green-700 bg-green-200"
                    : "border-red-500 text-red-700 bg-red-200"
                }`}
              >
                {availability ? "In Stock" : "Stock Out"}
              </p>
              <p>{description}</p>
              <div>
                <h1 className="font-bold">Specifications:</h1>
                <ul className="list-disc ml-8">
                  {specifications?.map((specs, idx) => (
                    <li key={idx}>{specs}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <h1 className="font-bold">Rating: </h1>
                  <p className="px-2 py-1 rounded-full bg-slate-300 font-bold">
                    {rating}
                  </p>
                </div>
                <div>
                  <ReactStars
                    key={product_id}
                    isHalf={true}
                    count={5} // Number of stars
                    value={rating} // Current rating to display
                    size={24} // Size of the stars
                    activeColor="#ffd700" // Color for active stars
                    edit={false} // Disable editing if you want a static rating
                  />
                </div>
              </div>
              <h1 className="font-bold">Warranty: {warranty} </h1>
              <div className="flex gap-6">
                <button
                  onClick={() => handleAddToCart(product_id)}
                  className="btn btn-sm lg:btn-md rounded-full bg-purple-500 text-white  font-bold"
                >
                  Add to Cart <FaShoppingCart size={20} />
                </button>
                <button
                  disabled={isAddedWishlist}
                  onClick={() => handleAddToWishlist(product_id)}
                  className="btn btn-sm lg:btn-md rounded-full border border-purple-500 text-purple-500 font-bold"
                >
                  Favourites <FaRegHeart size={20}></FaRegHeart>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
