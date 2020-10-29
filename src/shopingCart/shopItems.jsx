import React, { Component } from "react";
import Shoping from "./shoping";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
class Items extends Component {
  state = {
    search: "",
  };
  onChange = (event) => {
    this.setState({ search: event.target.value });
  };
  render() {
    let { getClass, Items, cartItems } = this.shopItemFunctionality();
    return (
      <div className="row">
        <div className="col-12 searchItemholder mt-1  bg-secondary p-2 ">
          {/* <FontAwesomeIcon icon={faSearch} className="searchIcon" /> */}
          <input
            className="form-control searchBar float-right mt-1 bg-dark-gray"
            type="text"
            value={this.state.search}
            onChange={this.onChange}
            placeholder="Search Item here..."
          />
          {/* <div className="clearfix badge"></div> */}
          <span className={getClass} style={{ color: "orange" }}>
            {" "}
            <span
              className=""
              style={{
                fontFamily: "revert",
                fontSize: "15px",
                color: "white",
              }}
            >
              {Items}
            </span>{" "}
            items found in store
          </span>
        </div>{" "}
        <br />
        {cartItems.map((cartItem) => (
          <Shoping
            cartItem={cartItem}
            key={cartItem.id}
            // getCartItems={this.props.getCartItems}
          />
        ))}
      </div>
    );
  }

  shopItemFunctionality() {
    let cartItems = this.props.cartItems.filter((cartItem) => {
      return cartItem.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    let Items = cartItems.length;
    let getClass = "badge m-2  badge-";
    getClass += Items < 1 ? "danger" : "primary";
    return { getClass, Items, cartItems };
  }
}

export default Items;
