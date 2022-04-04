import React from "react";
import styled from "styled-components";
import {
  Border1pxMountainMist,
  PoppinsNormalWhite12px,
  PoppinsNormalWhite13px,
  PoppinsNormalWhite14px,
} from "../../styledMixins";


function Row2(props) {
  const { paymentFrom10321, mar212019330Pm1, mar212019330Pm2, x250001, x250002, className } = props;

  return (
    <Row className={`row-5 ${className || ""}`}>
      <PaymentFrom10321 className="payment-from-10321-1">{paymentFrom10321}</PaymentFrom10321>
      <Mar212019330pm className="mar-21-2019-330pm-2">{mar212019330Pm1}</Mar212019330pm>
      <Mar212019330pm1 className="mar-21-2019-330pm-3">{mar212019330Pm2}</Mar212019330pm1>
      <X25000 className="x25000-2">{x250001}</X25000>
      <X250001 className="x25000-3">{x250002}</X250001>
    </Row>
  );
}

const Row = styled.div`
  ${Border1pxMountainMist}
  height: 48px;
  display: flex;
  padding: 10px 60px;
  align-items: center;
  min-width: 1592px;
`;

const PaymentFrom10321 = styled.div`
  ${PoppinsNormalWhite13px}
  min-height: 21px;
  align-self: flex-end;
  margin-bottom: 1px;
  min-width: 61px;
  letter-spacing: 0.19px;
  line-height: 13px;
  white-space: nowrap;
`;

const Mar212019330pm = styled.div`
  ${PoppinsNormalWhite14px}
  min-height: 22px;
  margin-left: 327px;
  margin-bottom: 2px;
  min-width: 46px;
  letter-spacing: 0.1px;
  line-height: 22px;
  white-space: nowrap;
`;

const Mar212019330pm1 = styled.div`
  ${PoppinsNormalWhite14px}
  min-height: 22px;
  margin-left: 299px;
  margin-bottom: 2px;
  min-width: 33px;
  letter-spacing: 0.1px;
  line-height: 22px;
  white-space: nowrap;
`;

const X25000 = styled.div`
  ${PoppinsNormalWhite12px}
  min-height: 19px;
  margin-left: 282px;
  margin-top: 2px;
  min-width: 29px;
  letter-spacing: 0.17px;
  line-height: 12px;
  white-space: nowrap;
`;

const X250001 = styled.div`
  ${PoppinsNormalWhite14px}
  min-height: 22px;
  align-self: flex-end;
  margin-left: 259px;
  min-width: 34px;
  letter-spacing: 0.2px;
  line-height: 14px;
  white-space: nowrap;
`;

const PaymentFrom103211 = styled.div`
  ${PoppinsNormalWhite13px}

  .row-5.row-6  & {
    min-width: 22px;
  }
`;

const Mar212019330pm2 = styled.div`
  ${PoppinsNormalWhite14px}

  .row-5.row-6  & {
    margin-left: 366px;
    min-width: 51px;
  }
`;

const Mar212019330pm3 = styled.div`
  ${PoppinsNormalWhite14px}

  .row-5.row-6  & {
    margin-left: 294px;
    min-width: 42px;
  }
`;

const X250002 = styled.div`
  ${PoppinsNormalWhite12px}

  .row-5.row-6  & {
    margin-left: 273px;
    min-width: 28px;
  }
`;

const X250003 = styled.div`
  ${PoppinsNormalWhite14px}

  .row-5.row-6  & {
    margin-left: 260px;
    min-width: 32px;
  }
`;

export default Row2;
