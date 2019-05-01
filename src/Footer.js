import React from "react";
import styled from "styled-components";
import "./Footer.css";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  box-sizing: border-box;
  padding: 1rem 3rem;
  color: black;
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    list-style: none;
    margin: 0 10px;
  }
`;

const Link = styled.a`
  color: #bbb;
  text-decoration: none;
`;

const Copyright = styled.span`
  color: ${props => props.theme.darkGreyColor};
`;

export default () => (
  <Footer>
    <div>
      <List>
        <ListItem>
          <Link href="#">about us</Link>
        </ListItem>
        <ListItem>
          <Link href="#">support</Link>
        </ListItem>
        <ListItem>
          <Link href="#">press</Link>
        </ListItem>
        <ListItem>
          <Link href="#">api</Link>
        </ListItem>
        <ListItem>
          <Link href="#">jobs</Link>
        </ListItem>
        <ListItem>
          <Link href="#">privacy</Link>
        </ListItem>
        <ListItem>
          <Link href="#">terms</Link>
        </ListItem>
        <ListItem>
          <Link href="#">directory</Link>
        </ListItem>
        <ListItem>
          <Link href="#">profiles</Link>
        </ListItem>
        <ListItem>
          <Link href="#">hashtags</Link>
        </ListItem>
        <ListItem>
          <Link href="#">language</Link>
        </ListItem>
      </List>
    </div>
    <Copyright>Instaclone {new Date().getFullYear()} &copy;</Copyright>
  </Footer>
);
