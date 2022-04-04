import React from "react";
import styled from "styled-components";
import { Pressstart2pNormalAquamarineBlue15p } from "../../styledMixins";


function Group1(props) {
  const { className } = props;

  return (
    <Group11 className={`group-1 ${className || ""}`}>
      <DISCORD className="discord">DISCORD</DISCORD>
      <TWITTER className="twitter">TWITTER</TWITTER>
      <LITEPAPER className="litepaper">LITEPAPER</LITEPAPER>
      <JOBS className="jobs">JOBS</JOBS>
    </Group11>
  );
}

const Group11 = styled.div`
  ${Pressstart2pNormalAquamarineBlue15p}
  position: absolute;
  height: 100px;
  top: 1206px;
  left: 0;
  display: flex;
  padding: 0 126px;
  align-items: center;
  min-width: 1920px;
  background-color: var(--licorice);

  &.group-1.group-4 {
    margin-top: 77px;
    position: unset;
    top: unset;
    left: unset;
  }
`;

const DISCORD = styled.div`
  width: 162px;
  height: 19px;
  margin-top: 3px;
  letter-spacing: 0;
  line-height: 15px;
`;

const TWITTER = styled.div`
  width: 162px;
  height: 19px;
  margin-left: 11px;
  margin-top: 3px;
  letter-spacing: 0;
  line-height: 15px;
`;

const LITEPAPER = styled.div`
  width: 187px;
  height: 19px;
  margin-left: 995px;
  margin-bottom: 3px;
  letter-spacing: 0;
  line-height: 15px;
`;

const JOBS = styled.div`
  width: 84px;
  height: 19px;
  margin-left: 44px;
  margin-bottom: 3px;
  letter-spacing: 0;
  line-height: 15px;
`;

export default Group1;
