import React from "react";
import { useFetchCustom } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, products } = useFetchCustom(url);
  console.log(products);
  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        products.map((product) => {
          const { id, fields } = product;
          return (
            <div className="item" key={id}>
              {fields.company}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Example;
