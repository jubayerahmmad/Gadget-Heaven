import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import NoData from "./NoData";

const Cards = () => {
  const { category } = useParams();
  const products = useLoaderData();

  const [productsCard, setProductsCard] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredCategory = [...products].filter(
        (product) => product.category === category
      );
      setProductsCard(filteredCategory);
    } else {
      setProductsCard(products);
    }
  }, [products, category]);

  return (
    <>
      {productsCard.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {productsCard.map((product, index) => (
            <Card key={index} product={product}></Card>
          ))}
        </div>
      ) : (
        <NoData></NoData>
      )}
    </>
  );
};

export default Cards;
