import React from "react";
import product from "./products.json";

export function Product() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {product.map((pro) => (
        <div
          key={pro}
          className="text-light p-4 position-relative"
          style={{ width: "400px", margin: "10px", backgroundColor: "#27323E" }}
        >
          <h3
            className="position-absolute  top-0 end-0 text-center "
            style={{
              background:
                "linear-gradient(108.35deg, #FC4A1A -36.03%, #F7B733 128.44%)",
              width: "50px",
              height: "50px",
            }}
          >
            {pro.id}
          </h3>
          <h5>Name: {pro.name}</h5>
          <p className="fs-5">Description: {pro.description}</p>
          <p className="fs-5">Category: {pro.category}</p>
          <p className="position-absolute bottom-0 end-0">{pro.price}$</p>
        </div>
      ))}
    </div>
  );
}
