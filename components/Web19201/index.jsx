import React from "react";
import NavBar7 from "../NavBar7";
import Component41 from "../Component41";
import Group1 from "../Group1";
import Component24 from "../Component24";
import styled from "styled-components";
import {
  Pressstart2pNormalDenim34px,
  ArchivoNormalWhite22px,
  Border1pxWhite,
  Pressstart2pNormalDenim13px,
  RobotoBlackWhite21px,
} from "../../styledMixins";
import "./Web19201.css";

function Web19201(props) {
  const {
    runeLogo,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    line28,
    line31,
    line34,
    line35,
    theProtocol,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    readTheLitepaper,
    line29,
    line30,
    line32,
    line33,
    protocolInfo,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    learnMoreAboutHowTheProtocolWorks,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    developerDocs,
    github,
    spanText17,
    spanText18,
    line26,
    line27,
    spanText19,
    spanText20,
    buildingRune,
    navBar7Props,
    component411Props,
    component412Props,
    component241Props,
    component242Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="web-1920-1 screen">
        <NavBar7 componentProps={navBar7Props.componentProps} />
        <RuneLogo src={runeLogo} />
        <MutliChainLendingMadeSimple>
          <Span0>{spanText1}</Span0>
          <span>{spanText2}</span>
        </MutliChainLendingMadeSimple>
        <IfYoureReadingThisYoureEarly>
          <Span0>{spanText3}</Span0>
          <span>{spanText4}</span>
        </IfYoureReadingThisYoureEarly>
        <LineContainer>
          <Line28 src={line28} />
          <Line31 src={line31} />
          <Line34 src={line34} />
          <Line35 src={line35} />
        </LineContainer>
        <OverlapGroup5>
          <Rectangle5></Rectangle5>
          <THEPROTOCOL>{theProtocol}</THEPROTOCOL>
        </OverlapGroup5>
        <ANewWayToLendOnSolana>
          <span className="pressstart2p-normal-white-34px">{spanText5}</span>
          <span>{spanText6}</span>
        </ANewWayToLendOnSolana>
        <RUNEPROTOCOLLorem>
          <span className="archivo-black-white-22px">{spanText7}</span>
          <span className="archivo-normal-white-22px-2">{spanText8}</span>
        </RUNEPROTOCOLLorem>
        <READTHELITEPAPER>{readTheLitepaper}</READTHELITEPAPER>
        <LineContainer1>
          <Line29 src={line29} />
          <Line30 src={line30} />
          <Line32 src={line32} />
          <Line33 src={line33} />
        </LineContainer1>
        <OverlapGroup8>
          <Rectangle5></Rectangle5>
          <PROTOCOLINFO>{protocolInfo}</PROTOCOLINFO>
        </OverlapGroup8>
        <TradeRatesLikeAProWithRune>
          <span className="pressstart2p-normal-white-34px">{spanText9}</span>
          <span className="pressstart2p-normal-denim-34px-2">{spanText10}</span>
        </TradeRatesLikeAProWithRune>
        <RUNEPROTOCOLLorem1>
          <span className="archivo-black-white-22px">{spanText11}</span>
          <span className="archivo-normal-white-22px-2">{spanText12}</span>
        </RUNEPROTOCOLLorem1>
        <ComponentContainer>
          <Component41 />
          <Component41 className={component411Props.className} />
          <Component41 className={component412Props.className} />
        </ComponentContainer>
        <LEARNMOREABOUTHOWTHEPROTOCOLWORKS>{learnMoreAboutHowTheProtocolWorks}</LEARNMOREABOUTHOWTHEPROTOCOLWORKS>
        <OverlapGroup9>
          <HackThePlanetwithRune>
            <span className="pressstart2p-normal-white-34px">{spanText13}</span>
            <span className="pressstart2p-normal-denim-34px-2">{spanText14}</span>
          </HackThePlanetwithRune>
          <RUNEPROTOCOLLorem2>
            <span className="archivo-black-white-22px">{spanText15}</span>
            <span className="archivo-normal-white-22px-2">{spanText16}</span>
          </RUNEPROTOCOLLorem2>
          <DEVELOPERDOCS>{developerDocs}</DEVELOPERDOCS>
          <GITHUB>{github}</GITHUB>
          <AboutTheCommunityCrewAtRune>
            <span className="pressstart2p-normal-white-34px">{spanText17}</span>
            <span className="pressstart2p-normal-denim-34px-2">{spanText18}</span>
          </AboutTheCommunityCrewAtRune>
          <OverlapGroup6>
            <Line26 src={line26} />
            <Line27 src={line27} />
            <Group1 />
          </OverlapGroup6>
          <RUNEPROTOCOLLorem3>
            <span className="archivo-black-white-22px">{spanText19}</span>
            <span className="archivo-normal-white-22px-2">{spanText20}</span>
          </RUNEPROTOCOLLorem3>
          <OverlapGroup3>
            <Rectangle5></Rectangle5>
            <THEPROTOCOL>{buildingRune}</THEPROTOCOL>
          </OverlapGroup3>
          <Component24>{component241Props.children}</Component24>
          <Component24 className={component242Props.className}>{component242Props.children}</Component24>
        </OverlapGroup9>
      </div>
    </div>
  );
}

const RuneLogo = styled.img`
  width: 575px;
  height: 186px;
  margin-top: 289px;
  object-fit: cover;
`;

const MutliChainLendingMadeSimple = styled.div`
  min-height: 57px;
  margin-top: 22px;
  margin-left: 2px;
  min-width: 708px;
  font-family: var(--font-family-roboto);
  color: var(--aquamarine-blue);
  font-size: 47px;
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
  font-weight: 700;
`;

const Span0 = styled.span`
  color: var(--white);
`;

const IfYoureReadingThisYoureEarly = styled.div`
  width: 381px;
  height: 59px;
  margin-top: 2px;
  margin-left: 3px;
  font-family: var(--font-family-roboto);
  color: var(--dove-gray);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
  font-weight: 400;
`;

const LineContainer = styled.div`
  width: 1222px;
  height: 515px;
  position: relative;
  margin-top: 41px;
  margin-right: 0;
`;

const Line28 = styled.img`
  position: absolute;
  width: 4px;
  height: 515px;
  top: 0;
  left: 609px;
  object-fit: cover;
`;

const Line31 = styled.img`
  position: absolute;
  width: 1222px;
  height: 5px;
  top: 415px;
  left: 0;
  object-fit: cover;
`;

const Line34 = styled.img`
  position: absolute;
  width: 2px;
  height: 100px;
  top: 369px;
  left: 40px;
  object-fit: cover;
`;

const Line35 = styled.img`
  position: absolute;
  width: 2px;
  height: 100px;
  top: 369px;
  left: 1180px;
  object-fit: cover;
`;

const OverlapGroup5 = styled.div`
  width: 277px;
  height: 70px;
  position: relative;
  margin-top: 58px;
  margin-right: 3px;
`;

const Rectangle5 = styled.div`
  ${Border1pxWhite}
  position: absolute;
  width: 275px;
  height: 70px;
  top: 0;
  left: 0;
`;

const THEPROTOCOL = styled.div`
  ${RobotoBlackWhite21px}
  position: absolute;
  width: 277px;
  height: 27px;
  top: 23px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: 21px;
`;

const ANewWayToLendOnSolana = styled.div`
  min-height: 37px;
  margin-top: 64px;
  margin-left: 2px;
  min-width: 954px;
  font-family: var(--font-family-press_start_2p);
  color: var(--aquamarine-blue);
  font-size: var(--font-size-l);
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
  font-weight: 400;
`;

const RUNEPROTOCOLLorem = styled.div`
  ${ArchivoNormalWhite22px}
  width: 977px;
  height: 82px;
  margin-top: 4px;
  margin-left: 3px;
  text-align: center;
  letter-spacing: 0;
  line-height: 40px;
`;

const READTHELITEPAPER = styled.div`
  ${Pressstart2pNormalDenim13px}
  width: 381px;
  height: 34px;
  margin-top: 32px;
  margin-left: 3px;
  text-align: center;
  letter-spacing: 0;
  line-height: 13px;
`;

const LineContainer1 = styled.div`
  width: 1222px;
  height: 500px;
  position: relative;
  margin-top: 71px;
  margin-right: 0;
`;

const Line29 = styled.img`
  position: absolute;
  width: 1222px;
  height: 5px;
  top: 76px;
  left: 0;
  object-fit: cover;
`;

const Line30 = styled.img`
  position: absolute;
  width: 4px;
  height: 500px;
  top: 0;
  left: 608px;
  object-fit: cover;
`;

const Line32 = styled.img`
  position: absolute;
  width: 2px;
  height: 100px;
  top: 30px;
  left: 39px;
  object-fit: cover;
`;

const Line33 = styled.img`
  position: absolute;
  width: 2px;
  height: 103px;
  top: 30px;
  left: 1179px;
  object-fit: cover;
`;

const OverlapGroup8 = styled.div`
  width: 277px;
  height: 70px;
  position: relative;
  margin-top: 80px;
  margin-right: 27px;
`;

const PROTOCOLINFO = styled.div`
  ${RobotoBlackWhite21px}
  position: absolute;
  width: 277px;
  top: 23px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: 21px;
`;

const TradeRatesLikeAProWithRune = styled.div`
  ${Pressstart2pNormalDenim34px}
  min-height: 37px;
  margin-top: 62px;
  margin-left: 2px;
  min-width: 1124px;
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const RUNEPROTOCOLLorem1 = styled.div`
  ${ArchivoNormalWhite22px}
  width: 977px;
  height: 111px;
  margin-top: 2px;
  margin-left: 3px;
  text-align: center;
  letter-spacing: 0;
  line-height: 40px;
`;

const ComponentContainer = styled.div`
  height: 228px;
  position: relative;
  margin-top: 14px;
  display: flex;
  align-items: flex-start;
  min-width: 1252px;
`;

const LEARNMOREABOUTHOWTHEPROTOCOLWORKS = styled.p`
  ${Pressstart2pNormalDenim13px}
  width: 617px;
  height: 19px;
  margin-top: 48px;
  margin-left: 3px;
  text-align: center;
  letter-spacing: 0;
  line-height: 13px;
`;

const OverlapGroup9 = styled.div`
  width: 1920px;
  height: 1306px;
  position: relative;
  margin-top: 77px;
  margin-right: 0;
`;

const HackThePlanetwithRune = styled.div`
  ${Pressstart2pNormalDenim34px}
  position: absolute;
  top: 690px;
  left: 169px;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
`;

const RUNEPROTOCOLLorem2 = styled.div`
  ${ArchivoNormalWhite22px}
  position: absolute;
  width: 644px;
  height: 122px;
  top: 785px;
  left: 169px;
  letter-spacing: 0;
  line-height: 40px;
`;

const DEVELOPERDOCS = styled.div`
  ${Pressstart2pNormalDenim13px}
  position: absolute;
  width: 212px;
  height: 25px;
  top: 954px;
  left: 169px;
  letter-spacing: 0;
  line-height: 13px;
`;

const GITHUB = styled.div`
  ${Pressstart2pNormalDenim13px}
  position: absolute;
  width: 142px;
  height: 25px;
  top: 954px;
  left: 441px;
  letter-spacing: 0;
  line-height: 13px;
`;

const AboutTheCommunityCrewAtRune = styled.div`
  ${Pressstart2pNormalDenim34px}
  position: absolute;
  top: 580px;
  left: 1136px;
  letter-spacing: 0;
  line-height: 50px;
  white-space: nowrap;
`;

const OverlapGroup6 = styled.div`
  position: absolute;
  width: 1920px;
  height: 1306px;
  top: 0;
  left: 0;
`;

const Line26 = styled.img`
  position: absolute;
  width: 1222px;
  height: 5px;
  top: 466px;
  left: 0;
  object-fit: cover;
`;

const Line27 = styled.img`
  position: absolute;
  width: 2px;
  height: 1256px;
  top: 0;
  left: 960px;
  object-fit: cover;
`;

const RUNEPROTOCOLLorem3 = styled.div`
  ${ArchivoNormalWhite22px}
  position: absolute;
  width: 644px;
  height: 161px;
  top: 712px;
  left: 1136px;
  letter-spacing: 0;
  line-height: 40px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 277px;
  height: 70px;
  top: 588px;
  left: 169px;
`;

export default Web19201;
