import React from "react";
import "./loader.css";
import styled from "styled-components";

const Loadmsg = styled.div`
  min-height: 100vh;
  font-family: Roboto, Arial;
  margin: -4rem 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => (
  <Loadmsg>
    <div class="boxes">
      <div class="box">
        <div />
        <div />
        <div />
        <div />
      </div>
      <div class="box">
        <div />
        <div />
        <div />
        <div />
      </div>
      <div class="box">
        <div />
        <div />
        <div />
        <div />
      </div>
      <div class="box">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </Loadmsg>
);

export default Loader;
