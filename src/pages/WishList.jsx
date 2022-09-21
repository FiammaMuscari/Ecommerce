import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { removeAll } from "../Redux/wishlist/WishListSlice";
import noitem from "../assets/noitem.jpg";
import uuid from 'react-uuid';

const WishList = () => {
  const dispatch = useDispatch();
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
      <div className={`container`} style={{ height:"32em"}}>
        <div  >
          <h2 className="text-center py-3">Mis favoritos</h2>
          <div

          >
            {content}
          </div>
          {products?.wishList?.length > 0 && (
            <button
              onClick={() => dispatch(removeAll())}
            >
              Eliminar toda la lista
            </button>
          )}
        </div>
      </div>
    );
  };
  
  export default WishList;