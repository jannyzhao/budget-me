import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "./components/Routes/Routes";
import NavBar from "./components/NavBar/NavBar";

import MainPage from "./components/MainPage/MainPage";
import LoginForm from "./components/SessionForms/LoginForm";
import SignupForm from "./components/SessionForms/SignupForm";
import SplashPage from "./components/SplashPage/SplashPage";

import { getCurrentUser } from "./store/session";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/litera/bootstrap.min.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return (
    loaded && (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <AuthRoute exact path="/login" component={LoginForm} />
          <AuthRoute exact path="/signup" component={SignupForm} />
          
          <ProtectedRoute exact path="/transactions" component={MainPage} />
        </Switch>
      </>
    )
  );
}

export default App;
