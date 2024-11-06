import { FaSort } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getStoredCart, removeAll, removeCart } from "../Utils/utilities";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import modalImg from "../assets/Group.png";

Modal.setAppElement("#root");

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const products = useLoaderData();

  useEffect(() => {
    const getCart = getStoredCart();
    const cartList = [...products].filter((product) =>
      getCart.includes(product.product_id)
    );
    setCart(cartList);

    const cartPrice = cartList.map((product) => product.price);
    const totalPrice = cartPrice.reduce((total, current) => total + current, 0);
    setTotal(totalPrice);
  }, []);

  const handleDelete = (id) => {
    removeCart(id);
    const getCart = getStoredCart();

    const cartList = [...products].filter((product) =>
      getCart.includes(product.product_id)
    );
    setCart(cartList);

    const cartPrice = cartList.map((product) => product.price);
    const totalPrice = cartPrice.reduce((total, current) => total + current, 0);
    setTotal(totalPrice);
  };

  const handleSort = () => {
    const getCart = getStoredCart();
    const cartList = [...products].filter((product) =>
      getCart.includes(product.product_id)
    );

    const sorted = cartList.sort((a, b) => b.price - a.price);
    setCart(sorted);
  };

  const handlePurchase = () => {
    removeAll();
    const getCart = getStoredCart();
    const cartList = [...products].filter((product) =>
      getCart.includes(product.product_id)
    );

    setCart(cartList);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-between items-center my-8">
        <div>
          <h1 className="font-bold lg:text-xl">Cart</h1>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-bold">Total: ${total}</p>
          <div>
            <button
              onClick={() => handleSort()}
              className="btn rounded-full btn-sm lg:btn-md text-purple-500 border border-purple-500"
            >
              Sort By Price <FaSort />
            </button>
          </div>
          <div>
            <button
              onClick={handlePurchase}
              disabled={cart.length === 0}
              className="btn rounded-full btn-sm lg:btn-md bg-purple-500 text-white border border-purple-500"
            >
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
                <p className="font-semiboldbold text-gray-500 text-xs">
                  {product.description}
                </p>
                <p className="font-semibold text-xs">Price: ${product.price}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleDelete(product.product_id)}
                className="btn btn-error btn-sm lg:btn-md btn-circle btn-outline"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "20px",
          },
        }}
      >
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <img src={modalImg} alt="" />
          </div>
          <h2>Purchase Confirmation</h2>
          <p className="font-bold">
            Your purchase has been processed successfully!
          </p>
          <button
            onClick={closeModal}
            className="btn rounded-full text-purple-500 border border-purple-500"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
