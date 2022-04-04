
import React from "react";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Web19201 from "./components/Web19201";
import Web19202 from "./components/Web19202";
import LinkButton from '/components/LinkButton'




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|web-1920-1)">
          <Web19201 {...web19201Data} />


        </Route>
        <Route path="/web-1920-2">
          <Web19202 {...web19202Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


const component221Data = {
    children: "LAUNCH APP",
    className: "sc-gsnTZi bspyYa launch-app",

    
    

};

const LAUNCHAPP = () => (
    <Link to='/web-1920-2'></Link> 
)



const component1Data = {
    className: "",
    component22Props: component221Data,
};

const navBar71Data = {
    componentProps: component1Data,
};

const component412Data = {
    className: "component-4-2",
};

const component413Data = {
    className: "component-4-3",
};

const component241Data = {
    children: "TWITTER",
    
    


};

const component242Data = {
    children: "DISCORD",
    className: "component-2-5",
};

const web19201Data = {
    runeLogo: "/img/rune-logo@1x.png",
    spanText1: "Multi-chain lending ",
    spanText2: "made simple.",
    spanText3: " if you’re reading this you’re early ",
    spanText4: "🧬",
    line28: "/img/line-28@1x.png",
    line31: "/img/line-26@1x.png",
    line34: "/img/line-32@1x.png",
    line35: "/img/line-32@1x.png",
    theProtocol: "THE PROTOCOL",
    spanText5: "A new way to lend ",
    spanText6: "on Solana.",
    spanText7: "",
    spanText8: "Multi-chain markets and collateralized lending made simple. Solana and its native DeFi ecosystem have flourished in the last few months, and we've been inspired not only by its incredible technical capabilities but also the fabulous community and talent building across all verticals on Solana. Our goal is to marry this innovation across multiple crypto markets and provide you access to a multitude of markets under one umbrella. Fast simple and easy to use.",
    readTheLitepaper: "",
    line29: "/img/line-26@1x.png",
    line30: "/img/line-30@1x.png",
    line32: "/img/line-32@1x.png",
    line33: "/img/line-33@1x.png",
    protocolInfo: "PROTOCOL INFO",
    spanText9: "Built for speed power and ",
    spanText10: "composabilty.",
    spanText11: "We ",
    spanText12: "leverage the Solana Blockchain Network to give power to the community through super charged liquidity and lightning fast transaction interoperability in a secure trustless process.",
    learnMoreAboutHowTheProtocolWorks: "LEARN MORE ABOUT HOW THE PROTOCOL WORKS",
    spanText13: <>Hack The Planet <br />with </>,
    spanText14: "Rune.",
    spanText15: "Compose With us. ",
    spanText16: "Build on top of our fully automated and decentralized protocol, enabling trustless access to the best strategies in DeFi",
    developerDocs: "DEVELOPER DOCS",
    github: "GITHUB",
    spanText17: <>About The Community<br />&amp; Crew at </>,
    spanText18: "Rune.",
    line26: "/img/line-26@1x.png",
    line27: "/img/line-27@1x.png",
    spanText19: "BUILDING BETTER ",
    spanText20: "Share the wealth of experience we've picked up with the rest of our community. ",
    buildingRune: "DEVELOPERS",
    navBar7Props: navBar71Data,
    component411Props: component412Data,
    component412Props: component413Data,
    component241Props: component241Data,
    component242Props: component242Data,
};

const component222Data = {
    children: "CONNECT WALLET",
    className: "component-2-2-1",
};

const component2Data = {
    className: "component-1",
    component22Props: component222Data,
};

const navBar72Data = {
    componentProps: component2Data,
};

const widgetsDataCardWithCharts22Data = {
    sales: "TOTAL SUPPLY",
};

const widgetsDataCardWithCharts23Data = {
    sales: "TOTAL BORROWED",
    className: "widgets-data-card-with-charts-2",
};

const widgetsDataCardWithIconsData = {
    x276321: "56%",
    sales1: "Total Bounce Rate",
    sales2: "YOUR DEPOSITED VALUE",
    x276322: "15,329K",
    sales3: "YOUR BORROWED VALUE",
    x276323: "13,222K",
};

const component51Data = {
    sales1: "DEPOSIT",
    sales2: "WITHDRAW",
    sales3: "BORROW",
    sales4: "REPAY",
    youHaveNoSolInY: "You have no SOL in your wallet to deposit.",
    solanaSolLogo: "/img/solana-sol-logo@1x.png",
    sol000: <>SOL<br />=$0.00</>,
    iconIonicIosArrowBack: "/img/icon-ionic-ios-arrow-back@1x.png",
    percent1: "0%",
    percent2: "25%",
    percent3: "50%",
    percent4: "75%",
    name: "MAX",
};

const widgetsTableTableHeaderData = {
    paymentNumber: "ASSETS",
    dateTime1: "DETAILS",
    dateTime2: "DEPOSIT RATE",
    amount1: "BORROW RATE",
    amount2: "SPREAD",
};

const row1Data = {
    paymentFrom10321: "Bitcoin",
    mar212019330Pm1: "200",
    mar212019330Pm2: "26.3%",
    x250001: "8.1%",
    x250002: "1132",
};

const row2Data = {
    paymentFrom10321: "Solana",
    mar212019330Pm1: "55069",
    mar212019330Pm2: "49.2%",
    x250001: "1.5%",
    x250002: "1856",
    className: "row-1",
};

const row3Data = {
    paymentFrom10321: "Luna",
    mar212019330Pm1: "18,511",
    mar212019330Pm2: "49.2%",
    x250001: "1.5%",
    x250002: "1856",
    className: "row-2",
};

const row4Data = {
    paymentFrom10321: "AVAX",
    mar212019330Pm1: "7008",
    mar212019330Pm2: "49.2%",
    x250001: "1.5%",
    x250002: "1856",
    className: "row-3",
};

const row5Data = {
    paymentFrom10321: "mSol",
    mar212019330Pm1: "42,564",
    mar212019330Pm2: "49.2%",
    x250001: "1.5%",
    x250002: "1856",
    className: "row-4",
};

const row22Data = {
    paymentFrom10321: "Ethereum",
    mar212019330Pm1: "1144",
    mar212019330Pm2: "9.3%",
    x250001: "6.0%",
    x250002: "1449",
    className: "row-5"
};

const row23Data = {
    paymentFrom10321: "USDC",
    mar212019330Pm1: "823,879",
    mar212019330Pm2: "45.9%",
    x250001: "7.5%",
    x250002: "1432",
    className: "row-6",
};

const paginationPageNumber2StatesData = {
    children: "1",
};

const paginationPageNumber2States21Data = {
    children: "2",
};

const paginationPageNumber2States22Data = {
    children: "3",
};

const paginationPageNumber2States23Data = {
    children: "4",
};

const paginationPageNumber2States24Data = {
    children: "…",
};

const paginationPageNumber2States25Data = {
    children: "11",
};

const paginationPageNumber2States26Data = {
    children: "12",
    className: "pagination-page-number-2-states-3",
};

const group12Data = {
    className: "group-4",
};

const web19202Data = {
    transactionHistory: "SEARCH THE CURRENT MARKET",
    search: "SEARCH",
    navBar7Props: navBar72Data,
    widgetsDataCardWithCharts21Props: widgetsDataCardWithCharts22Data,
    widgetsDataCardWithCharts22Props: widgetsDataCardWithCharts23Data,
    widgetsDataCardWithIconsProps: widgetsDataCardWithIconsData,
    component51Props: component51Data,
    widgetsTableTableHeaderProps: widgetsTableTableHeaderData,
    row1Props: row1Data,
    row2Props: row2Data,
    row3Props: row3Data,
    row4Props: row4Data,
    row5Props: row5Data,
    row21Props: row22Data,
    row22Props: row23Data,
    paginationPageNumber2StatesProps: paginationPageNumber2StatesData,
    paginationPageNumber2States21Props: paginationPageNumber2States21Data,
    paginationPageNumber2States22Props: paginationPageNumber2States22Data,
    paginationPageNumber2States23Props: paginationPageNumber2States23Data,
    paginationPageNumber2States24Props: paginationPageNumber2States24Data,
    paginationPageNumber2States25Props: paginationPageNumber2States25Data,
    paginationPageNumber2States26Props: paginationPageNumber2States26Data,
    group1Props: group12Data,
};

