import React, { createContext, useContext, useState } from 'react';
import {BladeConnector, ConnectorStrategy,HederaNetwork} from '@bladelabs/blade-web3.js';

const BladeConnectorContext = createContext();

export const useBladeConnector = () => useContext(BladeConnectorContext);

export const BladeConnectorProvider = ({ children }) => {
  const [bladeConnector, setBladeConnector] = useState(null);

  // Placeholder for initializing the bladeConnector
  // You need to replace this with actual initialization logic
  const initializeBladeConnector = async () => {
    // Assuming `initialize` is a method that properly sets up the bladeConnector
    // This is pseudocode; replace with actual Blade Web3 initialization

const bladeConnector = await BladeConnector.init(
  ConnectorStrategy.WALLET_CONNECT, // preferred strategy is optional 
  { // dApp metadata options are optional, but are highly recommended to use
    name: "Awesome DApp",
    description: "DApp description",
    url: "https://awesome-dapp.io/",
    icons: ["some-image-url.png"]
  }
);

// params are optional, and Mainnet is used as a default
const params = {
  network: HederaNetwork.Testnet,
  dAppCode: "SomeAwesomeDApp" // optional while testing, request specific one by contacting us
}

const pairedAccountIds = await bladeConnector.createSession(params);
// retrieving the currently active signer to perform all the Hedera operations
const bladeSigner = bladeConnector.getSigner();
    setBladeConnector(bladeSigner);
  };

  return (
    <BladeConnectorContext.Provider value={{ bladeConnector, initializeBladeConnector }}>
      {children}
    </BladeConnectorContext.Provider>
  );
};