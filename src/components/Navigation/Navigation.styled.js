import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 0px;
`;

export const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  text-decoration: none;
  padding: 24px 0px;
  font-weight: 500;
  color: #2a363b;

  &.active{
    color: #4d5ae5;
  }

  &::after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;

  display: block;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  }

  &.active:after{
    background-color: #4d5ae5;
  }
`;