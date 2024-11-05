import { FaSort } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { getStoredCart, removeCart } from "../Utils/utilities";
import { useEffect, useState } from "react";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const products = useLoaderData();
  useEffect(() => {
    const getCart = getStoredCart();

    const cartList = [...products].filter((product) =>
      getCart.includes(product.product_id)
    );
    setCart(cartList);
  }, []);

  const handleDelete = (id) => {
    removeCart(id);
    const getCart = getStoredCart();

    const cartList = [...products].filter((product) =>
      getCart.includes(product.product_id)
    );
    setCart(cartList);
  };

  return (
    <div>
      <div className="flex justify-between items-center my-8">
        <div>
          <h1 className="font-bold lg:text-xl">Cart</h1>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-bold">Total Cost: $ 0</p>
          <div>
            <button className="btn rounded-full btn-sm lg:btn-md text-purple-500 border border-purple-500">
              Sort By Price <FaSort />
            </button>
          </div>
          <div>
            <button className="btn rounded-full btn-sm lg:btn-md bg-purple-500 text-white border border-purple-500">
              Purchase
            </button>
          </div>
        </div>
      </div>
      {/* dynamic cartlist card */}
      <div className="space-y-4">
        {cart.map((product, index) => (
          <div
            key={index}
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
                onClick={() => handleDelete(product.product_id)}
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

export default Cart;
