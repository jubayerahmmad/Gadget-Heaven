import { useParams } from "react-router-dom";

const Cards = () => {
  const { category } = useParams();
  console.log(category);
  // const { product_title, product_image, category, price } = products;
  return (
    <>
      <h1>Cards</h1>
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-80 w-96"
                src={product.product_image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.product_title}</h2>
              <p>Price: ${product.price}</p>
              <div className="card-actions">
                <button className="btn rounded-full text-purple-500 font-bold border border-purple-500">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Cards;
