import React from "react";
import Component from "../Component";
import styled from "styled-components";


function NavBar7(props) {
  const { componentProps } = props;

  return (
    <NavBar71>
      <Component className={componentProps.className} component22Props={componentProps.component22Props} />
    </NavBar71>
  );
}

const NavBar71 = styled.div`
  width: 1920px;
  height: 125px;
  position: relative;
  display: flex;
`;

const NavBar72 = styled.div`
  width: 1920px;
  height: 125px;
  position: relative;
  display: flex;
`;

export default NavBar7;
