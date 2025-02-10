import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  addCartToLocalStorage,
  getStoredWishlist,
  removeWishList,
} from "../Utils/utilities";

import { FaTrash } from "react-icons/fa";

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const products = useLoaderData();

  useEffect(() => {
    const wishList = getStoredWishlist();
    const storedWishList = [...products].filter((product) =>
      wishList.includes(product.product_id)
    );
    setWishList(storedWishList);
  }, []);

  const handleRemoveWishList = (id) => {
    removeWishList(id);
    const wishList = getStoredWishlist();
    const storedWishList = [...products].filter((product) =>
      wishList.includes(product.product_id)
    );
    setWishList(storedWishList);
  };

  const handleAddToCart = (id) => {
    addCartToLocalStorage(id);
    handleRemoveWishList(id);
  };

  return (
    <div className="my-8">
      <div className="my-6">
        <h1 className="font-bold lg:text-xl">Wishlist</h1>
      </div>
      <div className="space-y-4">
        {wishList &&
          wishList.map((product, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center p-4 border-2 rounded-xl"
            >
              <div className="flex gap-4 items-center">
                <div>
                  <img
                    className="h-32 w-40 rounded-2xl border"
                    src={product.product_image}
                    alt="product image"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="font-bold lg:text-xl">
                    {product.product_title}
                  </h1>
                  <p className="font-semibold text-sm text-gray-500">
                    {product.description}
                  </p>
                  <p className="font-bold text-sm">Price: ${product.price}</p>

                  <button
                    onClick={() => handleAddToCart(product.product_id)}
                    className="btn btn-sm border border-purple-500 rounded-full text-purple-500"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleRemoveWishList(product.product_id)}
                  className="btn btn-error btn-circle btn-outline btn-sm lg:btn-md"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        {wishList.length === 0 && (
          <h1 className="text-3xl font-bold text-center p-6">
            No Items Added in the Wishlist.
          </h1>
        )}
      </div>
    </div>
  );
};

export default WishList;
