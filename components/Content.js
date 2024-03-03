



import Head from "next/head";
import Image from "next/image";
import { parse } from 'flatted';
import {BladeConnector,ConnectorStrategy,HederaNetwork} from '@bladelabs/blade-web3.js';
import { useEffect, useState } from 'react';
import  {
  Client,
  ContractFunctionParameters,
  ContractExecuteTransaction,
  TransferTransaction,
  TokenCreateTransaction,
  PrivateKey,
  AccountId,
  TransactionId,
  ContractCreateFlow,
  TokenUpdateTransaction
  
} from '@hashgraph/sdk';
import localForage from 'localforage';

import bytecodes from "../constant/contractsDAO.json";
import { useBladeConnector } from '../providers/BladeConnectorContext';




export default function Content() {
  const [signer,setSigner] = useState(null);
  const { bladeConnector } = useBladeConnector();
  
 
  const createDAO = async() => {
    const bladeSigner= bladeConnector;
    const functionParams= new ContractFunctionParameters();
    console.log(bladeSigner.accountId.toString());
    // const transaction = await new ContractExecuteTransaction()
    // .setContractId("0.0.2954507")
    // .setFunction("createDAO",functionParams)
    // .setGas(800000)
    const transaction = await new TransferTransaction()
    .addHbarTransfer(bladeSigner.getAccountId(), 5)
    .addHbarTransfer(bladeSigner.getAccountId(), -5)
    .freezeWithSigner(bladeSigner);
    const signedTransaction = await bladeSigner.signTransaction(transaction);
    const result = await signedTransaction.executeWithSigner(bladeSigner);  
    console.log(result);
      //const result = await bladeSigner.call(signedTransaction);
  
  //console.log(result);
  }
  return (
    <>
 <div className="app-content content">
  <div className="content-wrapper">
      
  <div className="col-xl-12 col-md-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <h4 className="card-title">Create DAO</h4>
                  
                </div>
                <div className="card-body">
                  <form className="form">
                    <div className="form-body">
                    <h4 className="form-section-title">DAO informations</h4>
                      <div className="form-group">
                     
                        <label htmlFor="donationinput1" className="sr-only">
                        DAO Name
                        </label>
                        <input
                          type="text"
                          id="donationinput1"
                          className="form-control"
                          placeholder="DAO Name"
                          name="fname"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="donationinput2" className="sr-only">
                        DAO Symbol
                        </label>
                        <input
                          type="text"
                          id="donationinput2"
                          className="form-control"
                          placeholder="DAO Symbol"
                          name="lanme"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="donationinput7" className="sr-only">
                          description
                        </label>
                        <textarea
                          id="donationinput7"
                          rows={5}
                          className="form-control square"
                          name="message"
                          placeholder="Description"
                          defaultValue={""}
                        />
                      </div>
                      <h4 className="form-section-title">members</h4>

                      <div className="form-group">
                        <label htmlFor="donationinput3" className="sr-only">
                         Partner Address 1
                        </label>
                        <input
                          type="email"
                          id="donationinput3"
                          className="form-control"
                          placeholder="Partner Address 1"
                          name="email"
                        />
                      </div>
                      <h4 className="form-section-title">Voting system</h4>

                      <div className="form-group">
                        <label htmlFor="donationinput4" className="sr-only">
                        Voting threshold
                        </label>
                        <input
                          type="text"
                          id="donationinput4"
                          className="form-control"
                          placeholder="Voting threshold"
                          name="phone"
                        />
                      </div>
                     
                    </div>
                    <div className="form-actions center">
                      <div  className="btn btn-outline-primary" onClick={() => createDAO()} >
                        Send
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>  </div>
</div>


    </>
  );
}
