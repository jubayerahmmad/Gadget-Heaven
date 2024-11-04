const Cart = () => {
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
              Sort By Price
            </button>
          </div>
          <div>
            <button className="btn rounded-full btn-sm lg:btn-md bg-purple-500 text-white border border-purple-500">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
