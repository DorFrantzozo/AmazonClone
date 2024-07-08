import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { ADD_TO_CART, GET_FAIL } from "../actions";
import Title from "../components/shared/Title";
import { Col, Row } from "react-bootstrap";
import ItemsInCart from "../components/cart/ItemsInCart";
import { Store } from "../Store";
const CartPage = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  //navigate

  const updateCartHandler = async (item, quantity) => {
    try {
      const { data: product } = await axios.get(`/api/v1/products${item._id}`);
      if (product.countInStock < quantity) {
        toast("Sorry, Product is out of stock");
        return;
      }
      ctxDispatch({ type: ADD_TO_CART, payload: { ...item, quantity } });
    } catch (err) {
      ctxDispatch({ type: GET_FAIL, payload: err.message });
      toast.error(err);
    }
  };
  //const removeItemHendler
  return (
    <div>
      <Title title={"Shopping Cart"} />
      <Row>
        <Col md={8}>
          <ItemsInCart
            updateCartHandler={updateCartHandler}
            cartItems={cartItems}
          />
        </Col>
        <Col md={4}>{/* <Checkout cartItems={cartItems} /> */}</Col>
      </Row>
    </div>
  );
};

export default CartPage;
