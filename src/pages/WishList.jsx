import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { removeAll } from "../Redux/wishlist/WishListSlice";
import noitem from "../assets/noitem.jpg";
import uuid from "react-uuid";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { NavLink } from "react-router-dom";

const WishList = () => {
  const dispatch = useDispatch();
  const { status } = useCheckAuth();
  const products = useSelector((state) => state.wishlist);
  const content =
    products?.wishList?.length > 0 ? (
      products?.wishList?.map((product) => {
        return <ProductCard key={uuid()} product={product} />;
      })
    ) : (
      <div className="text-center">
        <img src={noitem} alt="wishlist empty" />
      </div>
    );

  return (
    <div style={{paddingBottom:'6em'}}>
      <div>
        {status === "authenticated" ? (
          <div>
            <h2 className="text-center py-3">Mis favoritos</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1em",
              }}
            >
              {content}
            </div>
            {products?.wishList?.length > 0 && (
              <button
                className="btn btn-danger"
                onClick={() => dispatch(removeAll())}
                style={{ display: "flex", margin: " 1em auto" }}
              >
                Eliminar toda la lista
              </button>
            )}
          </div>
        ) : (
          <div className="text-center" style={{display:'flex', flexDirection:'column', gap:'3em',marginTop:'2em'}}>
          <h2 className="text-center py-3"><NavLink to="/login">Ingresa</NavLink> ó <NavLink to="/register">Resgistrate</NavLink> para armar tu lista de favoritos</h2>
        <div style={{display:'flex', justifyContent:'center', marginBottom:'3em'}}>
        <img src='https://www.clevergirlfinance.com/wp-content/uploads/2021/08/Shopping-sprees.jpg' alt="wishlist empty" syle={{width: '80%',borderRadius: '1em'}} />
        </div>
      </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
