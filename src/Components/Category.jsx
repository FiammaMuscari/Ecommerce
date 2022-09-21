import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";
import ProductCard from "./ProductCard";


const Category = () =>{
   const [data, setData] = useState([]);
   const [filter, setFilter] = useState(data);
   const filterProduct = (cat) => {
       console.log(data)
       const updatedProducts = data.filter((i) => i.category === cat);
       setFilter(updatedProducts);
   };

useEffect(() => {
  const getProductsAxios = async () => {
    try {
      const responseProducts = await axios.get('https://fakestoreapi.com/products');
      console.log(responseProducts.data);
      setData(await responseProducts.data);
      setFilter(await responseProducts.data);
    } catch (error) { console.log(error); };
  };
  getProductsAxios();
}, []);

return (
  <div>
    <div className="container my-5 py-5" style={{boxSizing:'content-box'}}>
      <div className="">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder"> Categorías  </h1>
          <hr />
        </div>
        <div className="row justify-content-center" style={{gap:'1em'}}>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}> All </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}> Men's Clothing </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}> Womens's Clothing </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}> Jewelery </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}> Electronic </button>
            </div>
            {filter.map((product) => {
                return (
                    <>
                    <ProductCard key={uuid()} product={product} />
                    </>
                );
            })}
        </div>
      </div>
    </div>
  </div>
);
};
export default Category;
