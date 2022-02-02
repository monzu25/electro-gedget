import React from "react";
import "./App.css";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import CollectionPage from "./pages/collection/collection.component";

class App extends React.Component {
  unsbscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsbscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsbscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:collectionId" element={<CollectionPage />} />
            <Route exact path="/checkout" element={<CheckoutPage />} />
            <Route
              exact
              path="/signin"
              element={
                this.props.currentUser ? (
                  <Navigate to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispacthToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispacthToProps)(App);
