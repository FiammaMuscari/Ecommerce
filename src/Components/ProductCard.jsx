import React, { memo } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { BsCart2 } from "react-icons/bs";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/Cart/CartSlice";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const title = product?.title.slice(0, 20);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addProduct = () => {
    dispatch(addToCart(product));
    toast.success(`${product?.title.slice(0, 20)} is added to cart`, {
      autoClose: 1000,
    });
  };
   const formatNumber = (num) =>{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  return (
      <Card
        style={{ width: "18rem", textAlign: "center" }}
      >
        <div style={{margin: 'auto'}}>
        <Card.Img
          onClick={() => navigate(`/products/${product?.id}`)}
          variant="top"
          src={product?.image}

        />
        <Card.Body>
        <div>
          <Card.Title>{title}</Card.Title>
          
          <Card.Text>$ {formatNumber(Math.floor((product.price * 150)))}</Card.Text>
          <div style={{gap:'1em', display:'grid', marginLeft: '1em'}}>
          <Button  onClick={addProduct}>
          Comprar
          </Button>
          <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark"> <AiOutlineArrowRight/> </NavLink>
          </div>
          </div>
        </Card.Body>
        </div>
      </Card>
  );
};

export default memo(ProductCard);