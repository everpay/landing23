import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer";

import Home from "./pages";
import PlatformPage from "./pages/platform";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/platform" component={PlatformPage} exact />
        <Route path="/login" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
