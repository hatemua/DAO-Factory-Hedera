import {
    Client,
    ContractFunctionParameters,
    TokenCreateTransaction,
    PrivateKey,
    AccountId,
    ContractCreateFlow,
    TokenUpdateTransaction
    
  } from '@hashgraph/sdk';
  
import bytecodes from "../constant/contractsDAO.json";

async function deployContract(bladeConnector) {
    const bladeSigner = bladeConnector.getSigner();
    const contractCreate = new ContractCreateFlow()
    .setGas(400000)
    .setBytecode(bytecodes)
    .setConstructorParameters(new ContractFunctionParameters()
    .addAddress(tokenid)
    ).freezeWithSigner(bladeSigner); // adds transaction ID and node IDs to the transaction as well

    const signedTransaction = await bladeSigner.signTransaction(contractCreate);
    
    const result = await signedTransaction.executeWithSigner(bladeSigner);
        
    
    console.log(result);
   

    return reciept.contractId;
  }
  export default  deployContract;
 