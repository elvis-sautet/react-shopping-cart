import React, { Component } from "react";
import uuid from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import { Container, Col, Row } from "react-bootstrap";
class Shoping extends Component {
  state = {
    shoppingCart: [
      {
        id: uuid.v4(),
        name: "flangesio boots men",
        imageSrc: "/shopimages/flangesio boots men.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
    ],
  };
  // addCartItem(products) {
  //   console.log(products.id);
  //   this.setState({shoppingCart:[...this.state.shoppingCart.map(shopItem=>{
  //     if(shopItem.id === )
  //   })]})
  // }
  render() {
    const element = (
      <FontAwesomeIcon
        icon={faCartPlus}
        style={{ float: "left", color: "black" }}
      />
    );
    const { name, imageSrc, currentPrize, oldPrize, id } = this.props.cartItem;
    const price = this.props.cartItem.currentPrize.replace("ksh", "");
    const earlierPrice = this.props.cartItem.oldPrize.replace("ksh", "");
    let getDiscount =
      (((earlierPrice - price) / earlierPrice) * 100).toFixed(0) + "%";
    return (
      <div className="cartItem m-2 row-cols-sm" style={getStyle}>
        <img
          src={imageSrc}
          height="160px"
          alt={imageSrc}
          style={{ objectFit: "fill" }}
        />
        <span className="text-right discountLogo" style={discountStyle}>
          -{getDiscount}
        </span>
        <br />
        <span className="text-capitalize">{name}</span>
        <br /> <span style={{ fontSize: "15px" }}>{currentPrize}</span> <br />
        <strike className="text-muted " style={{ fontSize: "13px" }}>
          {oldPrize}
        </strike>
        <button
          onClick={() =>
            this.addCartItem({
              name,
              imageSrc,
              currentPrize,
              oldPrize,
              id,
            })
          }
          className="btn btn-warning text-white font-weight-bold w-100"
        >
          {element} Add to cart
        </button>
      </div>
    );
  }
}
const getStyle = {
  padding: "4px",
  borderRadius: "11px",
};
const discountStyle = {
  padding: "3px",
  fontSize: "12px",
};
export default Shoping;
