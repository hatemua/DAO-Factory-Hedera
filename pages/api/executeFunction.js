// pages/api/deployContract.js

import { Client, ContractFunctionParameters,ContractExecuteTransaction } from "@hashgraph/sdk";
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
    const functionParams= new ContractFunctionParameters();
    const transaction = await new ContractExecuteTransaction()
    .setContractId("0.0.2954507")
    .setFunction("createDAO",functionParams)
    .setGas(400000)
    const contractResponse = await transaction.execute(client);
    const contractReceipt = await contractResponse.getReceipt(client);
    
    // Respond with the contract ID
    res.status(200).json({ trx: contractResponse.toString() });
  } catch (error) {
    console.error('Error deploying contract:', error);
    res.status(500).json({ error: 'Failed to deploy contract' });
  }
}