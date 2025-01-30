import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { PurchaseProductDto } from '../shop-products/dto/purchase-product.dto';
import * as contractAbi from '../../contractABIs.json'; // ABI of the contract

@Injectable()
export class Web3Service {
  private provider: ethers.providers.JsonRpcProvider;
  // private contract: ethers.Contract;
  private wallet: ethers.Wallet;

  constructor() {
    // Set up the provider (e.g., Infura, Alchemy, or local node)
    this.provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

    // Set up the wallet (private key should be securely stored)
    this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY, this.provider);

    // Initialize the contract
    // this.contract = new ethers.Contract(
    //   process.env.CONTRACT_ADDRESS,
    //   contractAbi,
    //   this.wallet,
    // );
  }

  async getBalance(address: string): Promise<any> {
    try {
      const balance = await this.provider.getBalance(address);
      return ethers.utils.formatEther(balance); // Convert from Wei to ETH
    } catch (error) {
      throw new Error(`Error fetching balance: ${error.message}`);
    }
  }

  
  async purchaseItem(purchaseProductDto: PurchaseProductDto): Promise<any> {
    try {
      const { amount } = purchaseProductDto
      const gasPrice = await this.provider.getGasPrice(); // Get current gas price
      const maxPriorityFeePerGas = ethers.utils.parseUnits('30', 'gwei'); // Adjust this value based on network demand
      const maxFeePerGas = gasPrice.mul(2); // Set maxFeePerGas to at least double the gas price
      const transaction = await this.wallet.sendTransaction({
        to: "0x4d38ab8192c4D4172E5cF30B5CCF26B7BE21e76a",
        value: ethers.utils.parseEther(amount), // Convert ETH to Wei
        maxPriorityFeePerGas,
        maxFeePerGas,
      });
      return {txHash: transaction.hash};
    } catch (error) {
      throw new Error(`Error making payment: ${error.message}`);
    }
  }
}
