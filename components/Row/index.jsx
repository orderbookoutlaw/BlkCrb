import React from "react";
import styled from "styled-components";
import { Border1pxMountainMist, PoppinsNormalWhite14px, PoppinsNormalWhite12px } from "../../styledMixins";


function Row(props) {
  const { paymentFrom10321, mar212019330Pm1, mar212019330Pm2, x250001, x250002, className } = props;

  return (
    <Row1 className={`row ${className || ""}`}>
      <PaymentFrom10321 className="payment-from-10321">{paymentFrom10321}</PaymentFrom10321>
      <Mar212019330pm className="mar-21-2019-330pm">{mar212019330Pm1}</Mar212019330pm>
      <Mar212019330pm1 className="mar-21-2019-330pm-1">{mar212019330Pm2}</Mar212019330pm1>
      <X25000 className="x25000">{x250001}</X25000>
      <X250001 className="x25000-1">{x250002}</X250001>
    </Row1>
  );
}

const Row1 = styled.div`
  ${Border1pxMountainMist}
  height: 48px;
  display: flex;
  padding: 10px 60px;
  align-items: center;
  min-width: 1592px;
`;

const PaymentFrom10321 = styled.div`
  ${PoppinsNormalWhite14px}
  min-height: 22px;
  align-self: flex-end;
  min-width: 50px;
  letter-spacing: 0.2px;
  line-height: 14px;
  white-space: nowrap;
`;

const Mar212019330pm = styled.div`
  ${PoppinsNormalWhite14px}
  min-height: 22px;
  margin-left: 340px;
  margin-bottom: 2px;
  min-width: 48px;
  letter-spacing: 0.1px;
  line-height: 22px;
  white-space: nowrap;
`;

const Mar212019330pm1 = styled.div`
  ${PoppinsNormalWhite14px}
  min-height: 22px;
  margin-left: 295px;
  margin-bottom: 2px;
  min-width: 41px;
  letter-spacing: 0.1px;
  line-height: 22px;
  white-space: nowrap;
`;

const X25000 = styled.div`
  ${PoppinsNormalWhite12px}
  min-height: 19px;
  margin-left: 274px;
  margin-top: 2px;
  min-width: 26px;
  letter-spacing: 0.17px;
  line-height: 12px;
  white-space: nowrap;
`;

const X250001 = styled.div`
  ${PoppinsNormalWhite14px}
  min-height: 22px;
  align-self: flex-end;
  margin-left: 262px;
  min-width: 28px;
  letter-spacing: 0.2px;
  line-height: 14px;
  white-space: nowrap;
`;

const PaymentFrom103211 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-1  & {
    min-width: 52px;
  }
`;

const Mar212019330pm2 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-1  & {
    margin-left: 336px;
    min-width: 49px;
  }
`;

const Mar212019330pm3 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-1  & {
    margin-left: 296px;
    min-width: 42px;
  }
`;

const X250002 = styled.div`
  ${PoppinsNormalWhite12px}

  .row.row-1  & {
    margin-left: 273px;
  }
`;

const X250003 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-1  & {
    min-width: 34px;
  }
`;

const PaymentFrom103212 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-2  & {
    min-width: 52px;
  }
`;

const Mar212019330pm4 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-2  & {
    margin-left: 336px;
    min-width: 49px;
  }
`;

const Mar212019330pm5 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-2  & {
    margin-left: 296px;
    min-width: 42px;
  }
`;

const X250004 = styled.div`
  ${PoppinsNormalWhite12px}

  .row.row-2  & {
    margin-left: 273px;
  }
`;

const X250005 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-2  & {
    min-width: 34px;
  }
`;

const PaymentFrom103213 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-3  & {
    min-width: 52px;
  }
`;

const Mar212019330pm6 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-3  & {
    margin-left: 336px;
    min-width: 49px;
  }
`;

const Mar212019330pm7 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-3  & {
    margin-left: 296px;
    min-width: 42px;
  }
`;

const X250006 = styled.div`
  ${PoppinsNormalWhite12px}

  .row.row-3  & {
    margin-left: 273px;
  }
`;

const X250007 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-3  & {
    min-width: 34px;
  }
`;

const PaymentFrom103214 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-4  & {
    min-width: 52px;
  }
`;

const Mar212019330pm8 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-4  & {
    margin-left: 336px;
    min-width: 49px;
  }
`;

const Mar212019330pm9 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-4  & {
    margin-left: 296px;
    min-width: 42px;
  }
`;

const X250008 = styled.div`
  ${PoppinsNormalWhite12px}

  .row.row-4  & {
    margin-left: 273px;
  }
`;

const X250009 = styled.div`
  ${PoppinsNormalWhite14px}

  .row.row-4  & {
    min-width: 34px;
  }
`;

export default Row;
