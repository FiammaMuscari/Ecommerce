import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../constants/Status";
import { fetchProducts } from "../Redux/Product/ProductSlice";

import Loader from "./Loader";

import { BiSearch } from "react-icons/bi";
import ProductCard from "./ProductCard";
import uuid from "react-uuid";

const ProductList = () => {

  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  const { products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === STATUS.LOADING) {
    return <Loader />;
  }

  if (status !== STATUS.LOADING && status === STATUS.ERROR) {
    return <h2>{status}</h2>;
  }

  return (
    <>

<div>
<div className="container my-5 py-5" style={{boxSizing:'content-box'}}>
  <div className="">
    <div className="col-12 mb-5">
      <h1 className="display-6 fw-bolder"> Busca entre nuestros productos  </h1>
      <hr />
    </div>
    <div className="row justify-content-center" style={{gap:'1em'}}>
    <div className="buttons d-flex justify-content-center mb-5 pb-5">
    <input
        style={{borderRadius:"0.3em",marginRight:"1em"}}
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Buscar Producto"
              />

            <BiSearch
              size={25}
              onClick={() => setShowSearch(!showSearch)}
              style={{ cursor: "pointer" }}
            />
        </div>
        {products
            ?.filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            ?.map((product) => {
              return <ProductCard key={uuid()} product={product} />;
            })}
    </div>
  </div>
</div>
</div>
</>
  );
};

export default ProductList;
