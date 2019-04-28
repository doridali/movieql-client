import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import "./Main_Navigation.css";
import AuthContext from "./auth-context";

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 3.5rem;
  background: #ff3;
  background: -webkit-linear-gradient(
    to right,
    #ff3,
    #ff00cc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ff3, #ff00cc);
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const mainNavigation = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <Header>
          <div className="main-navigation__logo">
            <h1>Book Review</h1>
          </div>
          <nav className="main-navigation__items">
            <ul>
              {!context.token && (
                <li>
                  <NavLink to="/auth">Authenticate</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              {context.token && (
                <React.Fragment>
                  <li>
                    <NavLink to="/bookings">Bookings</NavLink>
                  </li>
                  <li>
                    <button onClick={context.logout}>Logout</button>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </nav>
        </Header>
      );
    }}
  </AuthContext.Consumer>
);

export default mainNavigation;
