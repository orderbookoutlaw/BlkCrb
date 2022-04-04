import React from "react";
import styled from "styled-components";
import { RobotoBoldBlack17px } from "../../styledMixins";


function Component24(props) {
  const { children, className } = props;

  return (
    <Component241 className={`component-2-4 ${className || ""}`}>
      <TWITTER className="twitter-1">{children}</TWITTER>
    </Component241>
  );
}

const Component241 = styled.div`
  position: absolute;
  height: 60px;
  top: 909px;
  left: 1136px;
  display: flex;
  padding: 14px 74.5px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 225px;
  background-color: var(--aquamarine-blue);
  border-radius: 30px;

  &.component-2-4.component-2-5 {
    left: 1406px;
  }
`;

const TWITTER = styled.div`
  ${RobotoBoldBlack17px}
  min-height: 22px;
  min-width: 74px;
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

export default Component24;
