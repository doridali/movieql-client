import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import styled from "styled-components";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Detail";
import "./App.css";
import MainNavigation from "./Main_Navigation";
import AuthContext from "./auth-context";
import Footer from "./Footer";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;
// const Upper_bar = styled.div`
//   height: 3.5rem;
// `;
class App extends Component {
  state = {
    token: null,
    userId: null
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };
  render() {
    return (
      <Router>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          />

          <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
              <MainNavigation />
              <Wrapper>
                <main className="main_content">
                  <Switch>
                    <Route exact={true} path={"/"} component={Home} />
                    <Route path={"/details/:movieId"} component={Detail} />
                  </Switch>
                </main>
              </Wrapper>

              <Footer />
            </ApolloHooksProvider>
          </ApolloProvider>
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
