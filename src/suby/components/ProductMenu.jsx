import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "./TopBar";

const ProductMenu = () => {
  const [products, setProducts] = useState([]);
  const { firmId, firmName } = useParams();
  const navigate = useNavigate();

  const productHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      const newProductData = await response.json();
      setProducts(newProductData.products);
    } catch (error) {
      console.error("product failed to fetch", error);
    }
  };

  useEffect(() => {
    productHandler();
  }, []);

  // Handler for the "Add" button
  const addToOrderHandler = (price) => {
    navigate("/order", { state: { price } }); // Use navigate to send state
  };

  return (
    <>
      <TopBar />
      <section className="productSection">
        <h3>{firmName}</h3>
        {products.map((item) => (
          <div className="productBox" key={item.id}>
            <div>
              <div><strong>{item.productName}</strong></div>
              <div>₹{item.price}</div>
              <div>{item.description}</div>
            </div>
            <div className="productGroup">
              <img src={`${API_URL}/uploads/${item.image}`} alt={item.productName} />
              <div className="addButton">
                <button onClick={() => addToOrderHandler(item.price)} className="btn">ADD</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProductMenu;
