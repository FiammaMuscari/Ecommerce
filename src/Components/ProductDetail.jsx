import React, { useMemo } from "react";
import { Breadcrumb } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Cart/CartSlice";
import {
  addToWishList,
  removeFromWishList,
} from "../Redux/wishlist/WishListSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";


const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state)=> state.auth);
  const isAuthenticated = useMemo(() => status === 'authenticated', [status])

  const state = useSelector((state) => state.wishlist.wishList).some(
    (p) => p?.id?.toString() === id
  );

  const { data, error, loading } = useFetch(`/${id}`);
  if (!error && loading) {
    return <Loader />;
  }
  if (!loading && error) {
    return <h3>{error.message}</h3>;
  }


  const productHandler = () => {
    dispatch(addToCart(data));
    toast.success(`${data?.title.slice(0, 20)} fue agregado al carrito`, {
      autoClose: 1000,
    });
  };


  const wishListHandler = () => {
    if (state) {
      dispatch(removeFromWishList(data));
      toast.warning(
        `${data?.title.slice(0, 20)} fue eliminado de favoritos`,
        {
          autoClose: 1000,
        }
      );
    } else {
      dispatch(addToWishList(data));
      toast.success(`${data?.title.slice(0, 20)} fue agregado a lista de favoritos`, {
        autoClose: 1000,
      });
    }
  };

  const formatNumber = (num) =>{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  return (
    <div  style={{display:'flex', width:'90%', flexDirection:'column', margin:'auto'}} >
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{data?.title}</Breadcrumb.Item>
      </Breadcrumb>
      <h1>{data?.title}</h1>
      <hr className="mb-4" />
      <div >
        <div style={{display:'flex'}}>
          <img
            src={data?.image}
            alt="product-img"
            style={{ maxWidth: "300px", maxHeight: "300px", margin:'auto' }}
          />
        </div>
        <div className="pt-3">
          <h4>{data?.title}</h4>
          <h6 className="text-success">
            {data?.rating.count > 1 && "En stock"}
          </h6>
          <h6>Categoría {data?.category}</h6>
          <p className="py-1">{data?.description}</p>
          <h5>Precio: $ {formatNumber(Math.floor((data?.price * 150)))}</h5>
          <button className="btn btn-primary mt-2" onClick={productHandler}>
            Comprar
          </button>
          <button
            className={`btn btn-primary mt-2 ms-2`}
            onClick={wishListHandler}
            disabled={!isAuthenticated}
          >
            {state ? "Eliminar de favoritos" : "Agregar a favoritos"}
          </button>
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default React.memo(ProductDetail);
