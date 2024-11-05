import { FaSort } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../Utils/utilities";
import { useEffect, useState } from "react";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const data = useLoaderData();
  // console.log(data);
  useEffect(() => {
    const getCart = getStoredCart();
    const storedId = getCart.map((id) => id);

    const cartList = [...data].filter((product) =>
      storedId.includes(product.product_id)
    );
    setCart(cartList);
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center my-8">
        <div>
          <h1 className="font-bold">Cart</h1>
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
              <button className="btn btn-warning btn-outline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
