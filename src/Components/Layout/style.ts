import styled from "styled-components";
import Button from "@mui/material/Button";
import { NavBarItemProps } from "./types";

export const Content = styled.div`
  position: relative;
  margin: 0;
`;

export const Container = styled.div`
  position: relative;
`;

export const NavBarItem = styled(Button)<NavBarItemProps>`
  color: white !important;
  display: block !important;
  border-bottom: ${props => props.active ? "1px solid #19252d" : "initial"} !important;
`;