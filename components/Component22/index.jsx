import React from "react";
import styled from "styled-components";
import LinkButton from '/components/LinkButton'


function Component22(props) {
  const { children, className } = props;

  

  

  return (
    <Component221 className={`component-2-2 ${className || ""}`}>
      <LAUNCHAPP to="launch-app">{children}
      <LinkButton to='/web-1920-2'></LinkButton> 

      </LAUNCHAPP>


     
    </Component221>

    
  );
}

const Component221 = styled.div`
  height: 60px;
  margin-left: 89px;
  display: flex;
  padding: 18px 35.5px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 225px;
  background-color: var(--aquamarine-blue);
  border-radius: 30px;

  &.component-2-2.component-2-2-1 {
    padding: 15px 46.5px;
  }
`;

const LAUNCHAPP = styled.div`


  min-height: 18px;
  min-width: 152px;
  font-family: var(--font-family-press_start_2p);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-xxxs);
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;


const CONNECTWALLET = styled.div`
  .component-2-2.component-2-2-1 & {
    min-height: 20px;
    min-width: 130px;
    font-family: var(--font-family-roboto);
    font-weight: 500;
  }
`;

export default Component22;
