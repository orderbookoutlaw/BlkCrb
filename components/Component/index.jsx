import React from "react";
import { Link } from "react-router-dom";
import Component22 from "../Component22";
import styled from "styled-components";
import { RobotoBoldWhite18px } from "../../styledMixins";


function Component(props) {
  const { className, component22Props } = props;

  return (
    <Component1 className={`component ${className || ""}`}>
      <RuneLogo className="rune-logo-1" src="/img/rune-logo-1@1x.png" />
      <PROTOCOL className="protocol">PROTOCOL</PROTOCOL>
      <HOWITWORKS className="how-it-works">HOW IT WORKS</HOWITWORKS>
      <BUILDINGRUNE className="building-rune-1">DEVELOPERS</BUILDINGRUNE>
      <COMMUNITY className="community">COMMUNITY</COMMUNITY>
      <Component22 className={component22Props.className}>{component22Props.children}</Component22>
    </Component1>
  );
}

const Component1 = styled.div`
  ${RobotoBoldWhite18px}
  margin-top: 36px;
  margin-left: 140px;
  margin-right: 140px;
  flex: 1;
  margin-bottom: 29px;
  position: relative;
  display: flex;
  align-items: center;
  min-width: 1640px;
`;

const RuneLogo = styled.img`
  width: 132px;
  height: 43px;
  margin-bottom: 2.81px;
  object-fit: cover;
`;

const PROTOCOL = styled.div`
  min-height: 23px;
  margin-left: 493px;
  margin-top: 9.5px;
  min-width: 94px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const HOWITWORKS = styled.div`
  min-height: 23px;
  margin-left: 78px;
  margin-top: 12.5px;
  min-width: 130px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const BUILDINGRUNE = styled.div`
  min-height: 23px;
  margin-left: 78px;
  margin-top: 9.5px;
  min-width: 133px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const COMMUNITY = styled.div`
  min-height: 23px;
  margin-left: 78px;
  margin-top: 9.5px;
  min-width: 110px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const RuneLogo1 = styled.img`
  .component.component-1 & {
    cursor: pointer;
  }
`;

export default Component;
