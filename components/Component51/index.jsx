import React from "react";
import styled from "styled-components";
import { PoppinsBlackBlack16px, ArchivoNormalWhite17px, Border1pxWhite, Border2pxBlack } from "../../styledMixins";


function Component51(props) {
  const {
    sales1,
    sales2,
    sales3,
    sales4,
    youHaveNoSolInY,
    solanaSolLogo,
    sol000,
    iconIonicIosArrowBack,
    percent1,
    percent2,
    percent3,
    percent4,
    name,
  } = props;

  return (
    <Component511>
      <OverlapGroupContainer>
        <OverlapGroup4>
          <Sales>{sales1}</Sales>
        </OverlapGroup4>
        <OverlapGroup6>
          <Sales1>{sales2}</Sales1>
        </OverlapGroup6>
        <OverlapGroup3>
          <Sales2>{sales3}</Sales2>
        </OverlapGroup3>
        <OverlapGroup7>
          <Sales3>{sales4}</Sales3>
        </OverlapGroup7>
      </OverlapGroupContainer>
      <OverlapGroup5>
        <FlexRow>
          <YouHaveNoSOLInY>{youHaveNoSolInY}</YouHaveNoSOLInY>
          <InputRequiredField>
            <SolanaSolLogo src={solanaSolLogo} />
            <SOL000>{sol000}</SOL000>
            <OverlapGroup>
              <IconIonicIosArrowBack src={iconIonicIosArrowBack} />
            </OverlapGroup>
          </InputRequiredField>
        </FlexRow>
        <OverlapGroup1>
          <Rectangle534></Rectangle534>
          <Ellipse12></Ellipse12>
        </OverlapGroup1>
        <Group2>
          <Percent>{percent1}</Percent>
          <Percent1>{percent2}</Percent1>
          <Percent1>{percent3}</Percent1>
          <Percent1>{percent4}</Percent1>
          <Percent1>{name}</Percent1>
        </Group2>
      </OverlapGroup5>
    </Component511>
  );
}

const Component511 = styled.div`
  width: 1640px;
  margin-top: 106px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 352px;
`;

const OverlapGroupContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 1640px;
`;

const OverlapGroup4 = styled.div`
  height: 75px;
  display: flex;
  padding: 20.5px 168px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 410px;
  background-color: var(--aquamarine-blue);
`;

const Sales = styled.div`
  ${PoppinsBlackBlack16px}
  min-height: 25px;
  min-width: 71px;
  letter-spacing: 0.1px;
  line-height: 16px;
  white-space: nowrap;
`;

const OverlapGroup6 = styled.div`
  height: 75px;
  display: flex;
  padding: 20.5px 154px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 410px;
  background-color: var(--white);
`;

const Sales1 = styled.div`
  ${PoppinsBlackBlack16px}
  min-height: 25px;
  min-width: 100px;
  letter-spacing: 0.1px;
  line-height: 16px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  height: 75px;
  display: flex;
  padding: 20.5px 156px;
  align-items: flex-end;
  min-width: 410px;
  background-color: var(--white);
`;

const Sales2 = styled.div`
  ${PoppinsBlackBlack16px}
  min-height: 25px;
  min-width: 78px;
  letter-spacing: 0.1px;
  line-height: 16px;
  white-space: nowrap;
`;

const OverlapGroup7 = styled.div`
  height: 75px;
  display: flex;
  padding: 20.5px 167px;
  align-items: flex-end;
  min-width: 410px;
  background-color: var(--white);
`;

const Sales3 = styled.div`
  ${PoppinsBlackBlack16px}
  min-height: 25px;
  min-width: 56px;
  letter-spacing: 0.1px;
  line-height: 16px;
  white-space: nowrap;
`;

const OverlapGroup5 = styled.div`
  ${Border1pxWhite}
  width: 1640px;
  display: flex;
  flex-direction: column;
  padding: 29px 115px;
  align-items: flex-end;
  min-height: 277px;
  background-color: var(--black);
  border-radius: 6px;
`;

const FlexRow = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: flex-end;
  min-width: 1354px;
`;

const YouHaveNoSOLInY = styled.div`
  width: 446px;
  height: 31px;
  margin-bottom: 19px;
  font-family: var(--font-family-archivo);
  font-weight: 400;
  color: var(--dove-gray);
  font-size: 20px;
  letter-spacing: 0;
  line-height: 20px;
`;

const InputRequiredField = styled.div`
  ${Border2pxBlack}
  margin-left: 96px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 812px;
  background-color: var(--white);
  border-radius: 57px;
`;

const SolanaSolLogo = styled.img`
  width: 75px;
  height: 75px;
  margin-bottom: 4px;
  object-fit: cover;
`;

const SOL000 = styled.div`
  min-height: 44px;
  margin-left: 437px;
  margin-top: 5px;
  min-width: 58px;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: var(--black);
  font-size: var(--font-size-xs);
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  height: 113px;
  margin-left: 43px;
  display: flex;
  padding: 34px 63px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 152px;
  background-color: var(--black);
  border-radius: 57px;
  border: 2px solid var(--white);
`;

const IconIonicIosArrowBack = styled.img`
  width: 20px;
  height: 35px;
  object-fit: cover;
`;

const OverlapGroup1 = styled.div`
  width: 819px;
  height: 35px;
  position: relative;
  margin-top: 12px;
  margin-right: 8px;
`;

const Rectangle534 = styled.div`
  position: absolute;
  width: 797px;
  height: 14px;
  top: 10px;
  left: 22px;
  background-color: #e6e6e6;
  border-radius: 57px;
`;

const Ellipse12 = styled.div`
  ${Border1pxWhite}
  position: absolute;
  width: 35px;
  height: 35px;
  top: 0;
  left: 0;
  background-color: var(--black);
  border-radius: 17.5px;
`;

const Group2 = styled.div`
  ${ArchivoNormalWhite17px}
  height: 29px;
  margin-top: 12px;
  margin-right: 6px;
  display: flex;
  align-items: flex-end;
  min-width: 836px;
`;

const Percent = styled.div`
  width: 68px;
  height: 31px;
  margin-bottom: -2px;
  text-align: center;
  letter-spacing: 0;
  line-height: 17px;
`;

const Percent1 = styled.div`
  width: 68px;
  height: 31px;
  margin-left: 124px;
  margin-bottom: -2px;
  text-align: center;
  letter-spacing: 0;
  line-height: 17px;
`;

export default Component51;
