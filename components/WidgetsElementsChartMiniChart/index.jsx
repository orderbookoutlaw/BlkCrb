import React from "react";
import styled from "styled-components";


function WidgetsElementsChartMiniChart() {
  return (
    <WidgetsElementsChartMiniChart1>
      <Chart>
        <Path4Copy8 src="/img/path-4-copy-8-1@1x.png" />
      </Chart>
    </WidgetsElementsChartMiniChart1>
  );
}

const WidgetsElementsChartMiniChart1 = styled.div`
  position: absolute;
  width: 194px;
  height: 74px;
  top: 85px;
  left: 196px;
  display: flex;
`;

const Chart = styled.div`
  margin-top: 0;
  flex: 1;
  width: 193.840087890625px;
  display: flex;
  background-image: url(/img/path-4-copy-6-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Path4Copy8 = styled.img`
  margin-top: -0.5px;
  height: 30.962295532226562px;
  margin-left: 0;
  margin-right: -0.3px;
  flex: 1;
  object-fit: cover;
`;

export default WidgetsElementsChartMiniChart;
