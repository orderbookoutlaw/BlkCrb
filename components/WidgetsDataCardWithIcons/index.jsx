import React from "react";
import styled from "styled-components";
import { PoppinsBlackBlack16px, PoppinsSemiBoldVulcan28px, PoppinsBlackBlack14px } from "../../styledMixins";


function WidgetsDataCardWithIcons(props) {
  const { x276321, sales1, sales2, x276322, sales3, x276323 } = props;

  return (
    <WidgetsDataCardWithIcons1>
      <OverlapGroup>
        <X27632>{x276321}</X27632>
        <Sales>{sales1}</Sales>
      </OverlapGroup>
      <DataContainer>
        <Data>
          <Sales1>{sales2}</Sales1>
          <X276321>{x276322}</X276321>
        </Data>
        <Data1>
          <Sales1>{sales3}</Sales1>
          <X276321>{x276323}</X276321>
        </Data1>
      </DataContainer>
    </WidgetsDataCardWithIcons1>
  );
}

const WidgetsDataCardWithIcons1 = styled.div`
  height: 196px;
  margin-left: 334px;
  display: flex;
  padding: 30px 39px;
  align-items: flex-start;
  min-width: 467px;
  background-color: var(--white);
  border-radius: 6px;
  box-shadow: 0px 1px 4px #15223214;
`;

const OverlapGroup = styled.div`
  width: 154px;
  height: 96px;
  position: relative;
  align-self: center;
  margin-top: 17px;
`;

const X27632 = styled.h1`
  position: absolute;
  top: 23px;
  left: 0;
  font-family: var(--font-family-poppins);
  font-weight: 900;
  color: var(--vulcan);
  font-size: 50px;
  letter-spacing: 0.21px;
  line-height: 50px;
  white-space: nowrap;
`;

const Sales = styled.div`
  ${PoppinsBlackBlack16px}
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: 0.1px;
  line-height: 16px;
  white-space: nowrap;
`;

const DataContainer = styled.div`
  width: 179px;
  margin-left: 49px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 133px;
`;

const Data = styled.div`
  width: 174px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 60px;
`;

const Sales1 = styled.div`
  ${PoppinsBlackBlack14px}
  min-height: 22px;
  margin-top: 3px;
  letter-spacing: 0.09px;
  line-height: 14px;
  white-space: nowrap;
`;

const X276321 = styled.div`
  ${PoppinsSemiBoldVulcan28px}
  min-height: 41px;
  margin-top: 2px;
  letter-spacing: 0.12px;
  line-height: 28px;
  white-space: nowrap;
`;

const Data1 = styled.div`
  width: 179px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 60px;
`;

export default WidgetsDataCardWithIcons;
