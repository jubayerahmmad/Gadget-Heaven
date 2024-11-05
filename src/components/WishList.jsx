import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlist, removeWishList } from "../Utils/utilities";

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

  return (
    <div className="my-8">
      <div className="my-6">
        <h1 className="font-bold">Wishlist</h1>
      </div>
      <div className="space-y-4">
        {wishList.map((product, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center p-4 border-2 rounded-xl"
          >
            <div className="flex gap-4 items-center">
              <div>
                <img
                  className="h-24 w-32 rounded-2xl border"
                  src={product.product_image}
                  alt=""
                />
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-xl">{product.product_title}</h1>
                <p className="font-bold text-gray-500">{product.description}</p>
                <p className="font-bold">Price: ${product.price}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleRemoveWishList(product.product_id)}
                className="btn btn-error btn-circle btn-outline"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
