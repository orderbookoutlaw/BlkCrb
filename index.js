import React from "react";
import ReactDOM from "react-dom";
import "./globals.css"
import "./styleguide.css"
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));


const TWITTER_HANDLE = 'RuneProtocol';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const LaunchRune = () => {
  // Actions
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };

}
