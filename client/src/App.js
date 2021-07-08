import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopNav from "./Components/TopNav";
import PrivateRoute from "./Components/PrivateRoute";

/// components
import Home from "./Screens/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Dashboard from "./User/Dashboard";


const App = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
