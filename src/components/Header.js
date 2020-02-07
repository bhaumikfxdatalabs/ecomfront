import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/auth";
const Header = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const authLinks = (
    <Fragment>
      <NavLink to="/login">
        <button className="btn btn-outline-success my-2 my-sm-0 mr-1">
          Login
        </button>
      </NavLink>
      <NavLink to="/registration">
        <button className="btn btn-outline-success my-2 my-sm-0">
          Registration
        </button>
      </NavLink>
    </Fragment>
  );
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/">Ecommerce </NavLink>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"></li>
          <li className="nav-item"></li>
        </ul>
        {!auth.isAuthenticated && authLinks}
        {auth.isAuthenticated && (
          <Fragment>
            <NavLink to="/AddProduct">
              <button className="btn btn-outline-info m-2 my-2 my-sm-0">
                Add Product
              </button>
            </NavLink>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={handleLogout}
            >
              Logout
            </button>
          </Fragment>
        )}
      </nav>
    </div>
  );
};

export default Header;
