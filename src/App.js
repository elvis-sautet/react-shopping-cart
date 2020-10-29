import React, { Component } from "react";
import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./pages/header";
import Cart from "./pages/cart";
import Items from "./shopingCart/shopItems";
import About from "./pages/about";
import "./App.css";
class App extends Component {
  state = {
    cartItems: [
      {
        id: uuid.v4(),
        name: "4th street wine",
        imageSrc: "/shopimages/4th street.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1500,
      },
      {
        id: uuid.v4(),
        name: "Balenciaga raised black",
        imageSrc: "/shopimages/balenciaga12.jpg",
        currentPrize: "ksh" + 1300,
        oldPrize: "ksh" + 1400,
      },
      {
        id: uuid.v4(),
        name: "AirMax pink women",
        imageSrc: "/shopimages/balenciaga13.jpg",
        currentPrize: "ksh" + 1300,
        oldPrize: "ksh" + 1400,
      },
      {
        id: uuid.v4(),
        name: "Black Guchi (small)",
        imageSrc: "/shopimages/guchi.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1700,
      },
      {
        id: uuid.v4(),
        name: "jamsuit red",
        imageSrc: "/shopimages/jamsuit.jpg",
        currentPrize: "ksh" + 1000,
        oldPrize: "ksh" + 1400,
      },
      {
        id: uuid.v4(),
        name: "Jamsuit green",
        imageSrc: "/shopimages/jamsuit12.jpg",
        currentPrize: "ksh" + 1100,
        oldPrize: "ksh" + 1200,
      },
      {
        id: uuid.v4(),
        name: "full Jamsuit",
        imageSrc: "/shopimages/jamsuit33.jpg",
        currentPrize: "ksh" + 1600,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "lether raiser",
        imageSrc: "/shopimages/manshoe.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "Apple iphone 5S",
        imageSrc: "/shopimages/apple iphone 5s.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "bedding set",
        imageSrc: "/shopimages/bedding set-1.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "black sharp shooter",
        imageSrc: "/shopimages/black men shoes.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "sweat pant",
        imageSrc: "/shopimages/boys clothing sweat pant.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "brown sharp shooter",
        imageSrc: "/shopimages/brown men shoews.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "Bruhim fridge ",
        imageSrc: "/shopimages/bruhim brd.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "blanket duvet ",
        imageSrc: "/shopimages/buy blankets duvet.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "camoufladge pants",
        imageSrc: "/shopimages/camoufladge pants.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "cashual joking jeans",
        imageSrc: "/shopimages/cashual joking jeans.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "cashual Mens",
        imageSrc: "/shopimages/cashual Men.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "Techno phantom",
        imageSrc: "/shopimages/chno phantom.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "cooking dish",
        imageSrc: "/shopimages/cooking dish.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "cubot x19",
        imageSrc: "/shopimages/cubot x19.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "digital led tv",
        imageSrc: "/shopimages/digital led tv.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "Double decker bed",
        imageSrc: "/shopimages/Double decker bed.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "Double door fridge",
        imageSrc: "/shopimages/double door fridge.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "dress for ladies",
        imageSrc: "/shopimages/dress for ladies.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "duvet covers",
        imageSrc: "/shopimages/duvet covers.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "fashion 4pix",
        imageSrc: "/shopimages/fashion 4pix.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "fashion men suit",
        imageSrc: "/shopimages/fashion men suit.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "fashion warm silky",
        imageSrc: "/shopimages/fashion warm silky.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "flangesio boots men",
        imageSrc: "/shopimages/flangesio boots men.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
      {
        id: uuid.v4(),
        name: "four cousins",
        imageSrc: "/shopimages/four cousins.jpg",
        currentPrize: "ksh" + 1200,
        oldPrize: "ksh" + 1900,
      },
    ],
  };
  cartProducts = (product) => {
    console.log(product);
  };
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <div className="App container">
                  <Items
                    cartItems={this.state.cartItems}
                    // getCartItems={this.getCartItems}
                  />
                </div>
              </React.Fragment>
            )}
          />
          <Route
            path="/cart"
            cartProduct={this.cartProducts}
            component={Cart}
          />
          <Route path="/About" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
