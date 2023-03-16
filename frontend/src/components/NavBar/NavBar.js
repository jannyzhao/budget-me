import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import "./NavBar.css";
import { logout } from "../../store/session";

function NavBar() {
  const loggedIn = useSelector((state) => !!state.session.user);
  const dispatch = useDispatch();

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const getLinks = () => {
    if (loggedIn) {
      return (
        <div className="links-nav">
          <Link to={"/transactions"}>All Transactions</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/transactions/new"}>Add a new transaction</Link>
          <button onClick={logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="links-auth">
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  };

  return (
    <>
      <h1>Budget Me</h1>
      {getLinks()}
    </>
  );
}

export default NavBar;
