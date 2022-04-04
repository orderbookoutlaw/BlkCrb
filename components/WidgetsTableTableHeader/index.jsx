import React from "react";
import styled from "styled-components";
import { Border1pxMountainMist, PoppinsSemiBoldVulcan15px } from "../../styledMixins";


function WidgetsTableTableHeader(props) {
  const { paymentNumber, dateTime1, dateTime2, amount1, amount2 } = props;

  return (
    <WidgetsTableTableHeader1>
      <PaymentNumber>{paymentNumber}</PaymentNumber>
      <DateTime>{dateTime1}</DateTime>
      <DateTime1>{dateTime2}</DateTime1>
      <Amount>{amount1}</Amount>
      <Amount1>{amount2}</Amount1>
    </WidgetsTableTableHeader1>
  );
}

const WidgetsTableTableHeader1 = styled.div`
  ${PoppinsSemiBoldVulcan15px}
  ${Border1pxMountainMist}
            height: 48px;
  margin-top: 30px;
  display: flex;
  padding: 9.5px 59px;
  align-items: flex-end;
  min-width: 1592px;
  background-color: #f5f6fa;
`;

const PaymentNumber = styled.div`
  min-height: 23px;
  margin-bottom: 0.5px;
  min-width: 62px;
  -webkit-text-stroke: 1px var(--dove-gray);
  letter-spacing: 1.09px;
  line-height: 15px;
  white-space: nowrap;
`;

const DateTime = styled.div`
  min-height: 23px;
  margin-left: 328px;
  margin-bottom: 0.5px;
  min-width: 67px;
  -webkit-text-stroke: 1px var(--dove-gray);
  letter-spacing: 1.09px;
  line-height: 15px;
  white-space: nowrap;
`;

const DateTime1 = styled.div`
  min-height: 23px;
  margin-left: 244px;
  margin-bottom: 0.5px;
  min-width: 116px;
  -webkit-text-stroke: 1px var(--dove-gray);
  letter-spacing: 1.09px;
  line-height: 15px;
  white-space: nowrap;
`;

const Amount = styled.div`
  min-height: 23px;
  margin-left: 185px;
  min-width: 121px;
  -webkit-text-stroke: 1px var(--dove-gray);
  letter-spacing: 1.09px;
  line-height: 15px;
  white-space: nowrap;
`;

const Amount1 = styled.div`
  min-height: 23px;
  margin-left: 201px;
  margin-bottom: 0.5px;
  min-width: 58px;
  -webkit-text-stroke: 1px var(--dove-gray);
  letter-spacing: 1.09px;
  line-height: 15px;
  white-space: nowrap;
`;

export default WidgetsTableTableHeader;
