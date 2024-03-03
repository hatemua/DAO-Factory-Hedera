// pages/api/deployContract.js

import { Client, ContractCreateFlow,ContractFunctionParameters } from "@hashgraph/sdk";
import data from "../../constant/contractsDAO"
export default async function handler(req, res) {
  // Ensure this is a POST request
  if (req.method !== 'GET') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    // Initialize the Hedera client
    const client = Client.forTestnet();
    client.setOperator(process.env.MY_ACCOUNT_ID, process.env.MY_PRIVATE_KEY);
    const bytecode = data.bytecode;
    console.log(bytecode);
    // Your compiled contract bytecode

   
    
    // Deploy the smart contract
    const contractCreate = new ContractCreateFlow()
    .setGas(400000)
    .setBytecode(bytecode)
    .setConstructorParameters(new ContractFunctionParameters())
    const contractResponse = await contractCreate.execute(client);
    const contractReceipt = await contractResponse.getReceipt(client);
    const contractId = contractReceipt.contractId;
    
    // Respond with the contract ID
    res.status(200).json({ contractId: contractId.toString() });
  } catch (error) {
    console.error('Error deploying contract:', error);
    res.status(500).json({ error: 'Failed to deploy contract' });
  }
}