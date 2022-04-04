import React from "react";
import styled from "styled-components";
import { PoppinsSemiBoldTorchRed16px, PoppinsNormalShadowBlue12px } from "../../styledMixins";


function WidgetsElementsPrice() {
  return (
    <WidgetsElementsPrice1>
      <Price>
        <X25>1.3%</X25>
        <IcArrowNarrowUp src="/img/ic-arrow-narrow-up-1@1x.png" />
      </Price>
      <ComparedTo21340>than last year</ComparedTo21340>
    </WidgetsElementsPrice1>
  );
}

const WidgetsElementsPrice1 = styled.div`
  position: absolute;
  width: 144px;
  height: 23px;
  top: 38px;
  left: 0;
  display: flex;
  justify-content: space-between;
`;

const Price = styled.div`
  width: 53px;
  display: flex;
  justify-content: space-between;
`;

const X25 = styled.div`
  ${PoppinsSemiBoldTorchRed16px}
  margin-top: 3.5px;
  margin-bottom: -5.5px;
  width: 35px;
  letter-spacing: 0.1px;
  line-height: 16px;
  white-space: nowrap;
`;

const IcArrowNarrowUp = styled.img`
  margin-top: 3.1px;
  width: 16px;
  height: 16px;
  object-fit: cover;
`;

const ComparedTo21340 = styled.div`
  ${PoppinsNormalShadowBlue12px}
  margin-top: 1.5px;
  margin-bottom: 2.5px;
  width: 85px;
  margin-right: -2px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default WidgetsElementsPrice;
