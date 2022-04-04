import React from "react";
import NavBar7 from "../NavBar7";
import WidgetsDataCardWithCharts2 from "../WidgetsDataCardWithCharts2";
import WidgetsDataCardWithIcons from "../WidgetsDataCardWithIcons";
import Component51 from "../Component51";
import WidgetsTableTableHeader from "../WidgetsTableTableHeader";
import Row from "../Row";
import Row2 from "../Row2";
import PaginationPageNumber2States from "../PaginationPageNumber2States";
import PaginationPageNumber2States2 from "../PaginationPageNumber2States2";
import Group1 from "../Group1";
import styled from "styled-components";
import { Border1pxWhite, Border2pxBlack } from "../../styledMixins";
import "./Web19202.css";

function Web19202(props) {
  const {
    transactionHistory,
    search,
    navBar7Props,
    widgetsDataCardWithCharts21Props,
    widgetsDataCardWithCharts22Props,
    widgetsDataCardWithIconsProps,
    component51Props,
    widgetsTableTableHeaderProps,
    row1Props,
    row2Props,
    row3Props,
    row4Props,
    row5Props,
    row21Props,
    row22Props,
    paginationPageNumber2StatesProps,
    paginationPageNumber2States21Props,
    paginationPageNumber2States22Props,
    paginationPageNumber2States23Props,
    paginationPageNumber2States24Props,
    paginationPageNumber2States25Props,
    paginationPageNumber2States26Props,
    group1Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="web-1920-2 screen">
        <NavBar7 componentProps={navBar7Props.componentProps} />
        <WidgetsDataCardWithContainer>
          <WidgetsDataCardWithCharts2 sales={widgetsDataCardWithCharts21Props.sales} />
          <WidgetsDataCardWithCharts2
            sales={widgetsDataCardWithCharts22Props.sales}
            className={widgetsDataCardWithCharts22Props.className}
          />
          <WidgetsDataCardWithIcons
            x276321={widgetsDataCardWithIconsProps.x276321}
            sales1={widgetsDataCardWithIconsProps.sales1}
            sales2={widgetsDataCardWithIconsProps.sales2}
            x276322={widgetsDataCardWithIconsProps.x276322}
            sales3={widgetsDataCardWithIconsProps.sales3}
            x276323={widgetsDataCardWithIconsProps.x276323}
          />
        </WidgetsDataCardWithContainer>
        <Component51 {...component51Props} />
        <Group5>
          <AnalyticsTrafficChannelsGoal>
            <OverlapGroup>
              <TransactionHistory>{transactionHistory}</TransactionHistory>
              <InputRequiredField>
                <SEARCH>{search}</SEARCH>
              </InputRequiredField>
              <WidgetsTableTableHeader
                paymentNumber={widgetsTableTableHeaderProps.paymentNumber}
                dateTime1={widgetsTableTableHeaderProps.dateTime1}
                dateTime2={widgetsTableTableHeaderProps.dateTime2}
                amount1={widgetsTableTableHeaderProps.amount1}
                amount2={widgetsTableTableHeaderProps.amount2}
              />
              <ScrollGroup>
                <Row
                  paymentFrom10321={row1Props.paymentFrom10321}
                  mar212019330Pm1={row1Props.mar212019330Pm1}
                  mar212019330Pm2={row1Props.mar212019330Pm2}
                  x250001={row1Props.x250001}
                  x250002={row1Props.x250002}
                />
                <Row
                  paymentFrom10321={row2Props.paymentFrom10321}
                  mar212019330Pm1={row2Props.mar212019330Pm1}
                  mar212019330Pm2={row2Props.mar212019330Pm2}
                  x250001={row2Props.x250001}
                  x250002={row2Props.x250002}
                  className={row2Props.className}
                />
                <Row
                  paymentFrom10321={row3Props.paymentFrom10321}
                  mar212019330Pm1={row3Props.mar212019330Pm1}
                  mar212019330Pm2={row3Props.mar212019330Pm2}
                  x250001={row3Props.x250001}
                  x250002={row3Props.x250002}
                  className={row3Props.className}
                />
                <Row
                  paymentFrom10321={row4Props.paymentFrom10321}
                  mar212019330Pm1={row4Props.mar212019330Pm1}
                  mar212019330Pm2={row4Props.mar212019330Pm2}
                  x250001={row4Props.x250001}
                  x250002={row4Props.x250002}
                  className={row4Props.className}
                />
                <Row
                  paymentFrom10321={row5Props.paymentFrom10321}
                  mar212019330Pm1={row5Props.mar212019330Pm1}
                  mar212019330Pm2={row5Props.mar212019330Pm2}
                  x250001={row5Props.x250001}
                  x250002={row5Props.x250002}
                  className={row5Props.className}
                />
                <Row2
                  paymentFrom10321={row21Props.paymentFrom10321}
                  mar212019330Pm1={row21Props.mar212019330Pm1}
                  mar212019330Pm2={row21Props.mar212019330Pm2}
                  x250001={row21Props.x250001}
                  x250002={row21Props.x250002}
                />
                <Row2
                  paymentFrom10321={row22Props.paymentFrom10321}
                  mar212019330Pm1={row22Props.mar212019330Pm1}
                  mar212019330Pm2={row22Props.mar212019330Pm2}
                  x250001={row22Props.x250001}
                  x250002={row22Props.x250002}
                  className={row22Props.className}
                />
              </ScrollGroup>
              <Pagination>
                <PaginationPageNumber2States>{paginationPageNumber2StatesProps.children}</PaginationPageNumber2States>
                <PaginationPageNumber2States2>
                  {paginationPageNumber2States21Props.children}
                </PaginationPageNumber2States2>
                <PaginationPageNumber2States2>
                  {paginationPageNumber2States22Props.children}
                </PaginationPageNumber2States2>
                <PaginationPageNumber2States2>
                  {paginationPageNumber2States23Props.children}
                </PaginationPageNumber2States2>
                <PaginationPageNumber2States2>
                  {paginationPageNumber2States24Props.children}
                </PaginationPageNumber2States2>
                <PaginationPageNumber2States2>
                  {paginationPageNumber2States25Props.children}
                </PaginationPageNumber2States2>
                <PaginationPageNumber2States2 className={paginationPageNumber2States26Props.className}>
                  {paginationPageNumber2States26Props.children}
                </PaginationPageNumber2States2>
              </Pagination>
            </OverlapGroup>
          </AnalyticsTrafficChannelsGoal>
        </Group5>
        <Group1 className={group1Props.className} />
      </div>
    </div>
  );
}

const WidgetsDataCardWithContainer = styled.div`
  height: 196px;
  position: relative;
  margin-top: 73px;
  display: flex;
  align-items: flex-start;
  min-width: 1640px;
`;

const Group5 = styled.div`
  width: 1640px;
  height: 690px;
  margin-top: 106px;
  display: flex;
`;

const AnalyticsTrafficChannelsGoal = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 1640px;
`;

const OverlapGroup = styled.div`
  ${Border1pxWhite}
  width: 1641px;
  position: relative;
  margin-top: -0.5px;
  display: flex;
  flex-direction: column;
  padding: 59px 23.5px;
  align-items: flex-start;
  min-height: 691px;
  background-color: var(--black);
  border-radius: 6px;
  box-shadow: 0px 1px 4px #15223214;
`;

const TransactionHistory = styled.div`
  min-height: 27px;
  margin-left: 6px;
  font-family: var(--font-family-poppins);
  font-weight: 900;
  color: var(--white);
  font-size: var(--font-size-xs);
  letter-spacing: 0.11px;
  line-height: 18px;
  white-space: nowrap;
`;

const InputRequiredField = styled.div`
  ${Border2pxBlack}
  height: 50px;
  align-self: center;
  margin-top: 16px;
  margin-left: 3px;
  display: flex;
  padding: 0 18px;
  align-items: center;
  min-width: 1587px;
  background-color: var(--white);
  border-radius: 25px;
`;

const SEARCH = styled.div`
  min-height: 18px;
  min-width: 60px;
  -webkit-text-stroke: 1px var(--dove-gray);
  font-family: var(--font-family-arial-regular);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-xxxxs);
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const ScrollGroup = styled.div`
  width: 1592px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 339px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Pagination = styled.div`
  height: 36px;
  position: relative;
  margin-top: 22px;
  margin-left: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 252px;
`;

export default Web19202;
