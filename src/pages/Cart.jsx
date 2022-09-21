import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  removeAll,
  reduceProduct,
  incrementProduct,
} from "../Redux/Cart/CartSlice";
import EmptyCart from "../Components/EmptyCart";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);


  const totalPrice = products.cart.reduce(
    (a, c) => a + c.quantity * c.price,
    0
  );


  const removeProductHandler = (product) => {
    dispatch(removeFromCart(product));
    toast.warning(`${product.title.slice(0, 20)} is removed from cart`, {
      autoClose: 1000,
    });
  };

  const removeAllProduct = () => {
    dispatch(removeAll());
    toast.error("Your Cart is now empty", {
      autoClose: 1000,
    });
  };

  if (products.cart.length === 0) {
    return <EmptyCart />;
  }

  const formatNumber = (num) =>{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }


  return (
    <div className="container py-5 mt-4">
      <h2 className="py-3 text-center">Carrito de compras</h2>
      {products?.cart?.map((product) => {
        return (
          <div key={product.id} style={{display: "flex", gap: "1em"}}>
            <div>
              <img src={product.image} alt="product" width="50px" />
            </div>
            <div>
              <h5 style={{ maxWidth: "180px" }}>
                {product.title.slice(0, 20)}
              </h5>
              <h6>$ {formatNumber(Math.floor((product.price * 150)))}</h6>
            </div>
            <div className="cartBtns" style={{alignItems: "center", gap: "1em", display: "flex"}}>
            <div style={{display: "flex", alignItems: "baseline"}}>
            <button
              className="btn btn-light"
              onClick={() => dispatch(reduceProduct(product))}
            >
              -
            </button>
            <h6>{product.quantity}</h6>
            <button
               className="btn btn-light"
                onClick={() => dispatch(incrementProduct(product))}
            >
                +
            </button>
            </div>
            <button
                className="btn btn-danger"
                onClick={() => {
                  removeProductHandler(product);
                }}
              >
                Borrar
              </button>
              
            </div>
          </div>
        );
      })}

      <hr />
      <div className="mb-5 d-flex justify-content-between">
        <button className="btn btn-danger"  onClick={removeAllProduct}>
          Eliminar todos
        </button>
        <h5>
          Total: <b>${((totalPrice*150).toFixed(2))}</b>
        </h5>
      </div>
    </div>
  );
};

export default Cart;
