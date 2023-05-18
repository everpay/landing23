import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer";

import Home from "./pages";
import PlatformPage from "./pages/platform";
import PaymentsPage from "./pages/payments";


import PricingPage from "./pages/pricing";

import ShopPage from "./pages/shop";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/platform" component={PlatformPage} exact />
        <Route path="/payments" component={PaymentsPage} exact />
        <Route path="/pricing" component={PricingPage} exact />

        <Route path="/about" component={AboutPage} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/login" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />

        <Route path="/shop" component={ShopPage} exact />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
