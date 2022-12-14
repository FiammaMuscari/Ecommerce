import React, { memo } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { BsCart2 } from "react-icons/bs";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/Cart/CartSlice";
import { AiOutlineArrowRight } from "react-icons/ai";
import '../../src/styles.css'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addProduct = () => {
    dispatch(addToCart(product));
    toast.success(`${product?.title.slice(0, 20)} fue agregado a tu carrito`, {
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
        <div style={{margin: 'auto', display: 'flex', flexDirection: 'column'}} >
          <div className="img-wrapper">
        <Card.Img
          onClick={() => navigate(`/products/${product?.id}`)}
          variant="top"
          src={product?.image}
          className='inner-img '
        />
        </div>
        <Card.Body>
        <div>
          
          
          </div>
        </Card.Body>
        </div>
        <Card.Title>{product.title}</Card.Title>
          
          <Card.Text>$ {formatNumber(Math.floor((product.price * 150)))}</Card.Text>
          <div style={{gap:'1em', display:'grid', margin:'1em'}}>
          <Button  onClick={addProduct}>
          Comprar
          </Button>
          <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark"> <AiOutlineArrowRight/> </NavLink>
      
          </div>
          </Card>
  );
};

export default memo(ProductCard);