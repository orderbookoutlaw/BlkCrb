import React from "react";
import WidgetsDataCardWithCharts from "../WidgetsDataCardWithCharts";
import styled from "styled-components";
import { ArchivoNormalBlack19px, ArchivoBlackAquamarineBlue24px } from "../../styledMixins";


function Component41(props) {
  const { className } = props;

  return (
    <Component411 className={`component-4-1 ${className || ""}`}>
      <OverlapGroup className="overlap-group">
        <WidgetsDataCardWithCharts />
        <LoremIpsumIsSimpl className="lorem-ipsum-is-simpl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </LoremIpsumIsSimpl>
        <FIXTAKERS className="fix-takers">FIX TAKERS</FIXTAKERS>
      </OverlapGroup>
    </Component411>
  );
}

const Component411 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 400px;

  &.component-4-1.component-4-2 {
    margin-left: 26px;
  }

  &.component-4-1.component-4-3 {
    margin-left: 26px;
  }
`;

const OverlapGroup = styled.div`
  width: 400px;
  height: 228px;
  position: relative;
  border-radius: 30px;
`;

const LoremIpsumIsSimpl = styled.div`
  ${ArchivoNormalBlack19px}
  position: absolute;
  width: 334px;
  height: 65px;
  top: 94px;
  left: 34px;
  letter-spacing: 0;
  line-height: 30px;
`;

const FIXTAKERS = styled.div`
  ${ArchivoBlackAquamarineBlue24px}
  position: absolute;
  width: 334px;
  height: 34px;
  top: 65px;
  left: 34px;
  letter-spacing: 0;
  line-height: 24px;
`;

export default Component41;
