import React from "react";
import WidgetsElementsPrice from "../WidgetsElementsPrice";
import WidgetsElementsChartMiniChart from "../WidgetsElementsChartMiniChart";
import styled from "styled-components";
import { PoppinsBlackBlack16px, PoppinsSemiBoldVulcan28px } from "../../styledMixins";


function WidgetsDataCardWithCharts2(props) {
  const { sales, className } = props;

  return (
    <WidgetsDataCardWithCharts className={`widgets-data-card-with-charts-1 ${className || ""}`}>
      <OverlapGroup1 className="overlap-group1">
        <Data className="data">
          <Sales className="sales">{sales}</Sales>
          <OverlapGroup className="overlap-group-2">
            <X27632 className="x27632">$16.3M</X27632>
            <WidgetsElementsPrice />
          </OverlapGroup>
        </Data>
        <Line36 className="line-36" src="/img/line-36-1@1x.png" />
      </OverlapGroup1>
      <WidgetsElementsChartMiniChart />
    </WidgetsDataCardWithCharts>
  );
}

const WidgetsDataCardWithCharts = styled.div`
  width: 410px;
  height: 196px;
  position: relative;
  background-color: var(--white);
  border-radius: 6px;
  box-shadow: 0px 1px 4px #15223214;

  &.widgets-data-card-with-charts-1.widgets-data-card-with-charts-2 {
    margin-left: 19px;
  }
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 370px;
  height: 133px;
  top: 26px;
  left: 20px;
`;

const Data = styled.div`
  position: absolute;
  width: 142px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 133px;
`;

const Sales = styled.div`
  ${PoppinsBlackBlack16px}
  min-height: 25px;
  margin-top: 4px;
  letter-spacing: 0.1px;
  line-height: 16px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 144px;
  height: 62px;
  position: relative;
  margin-top: 43px;
`;

const X27632 = styled.div`
  ${PoppinsSemiBoldVulcan28px}
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: 0.12px;
  line-height: 28px;
  white-space: nowrap;
`;

const Line36 = styled.img`
  position: absolute;
  width: 370px;
  height: 4px;
  top: 29px;
  left: 0;
  object-fit: cover;
`;

const Data1 = styled.div`
  .widgets-data-card-with-charts-1.widgets-data-card-with-charts-2 & {
    width: 155px;
  }
`;

export default WidgetsDataCardWithCharts2;
