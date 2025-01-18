import { Web3State } from '../types';

// Mock contract addresses
export const CONTRACTS = {
  TOKEN1: '0x1234567890123456789012345678901234567890',
  TOKEN2: '0x0987654321098765432109876543210987654321',
  POOL: '0xabcdef0123456789abcdef0123456789abcdef01'
};

// Mock blockchain utilities
export class Web3Utils {
  private static state: Web3State = {
    isConnected: false,
    account: null,
    chainId: null,
    provider: null
  };

  static async connectWallet(): Promise<void> {
    // Simulated wallet connection
    this.state = {
      isConnected: true,
      account: '0x1234...5678',
      chainId: 1,
      provider: {}
    };
  }

  static async calculateSwapRate(
    amountIn: string,
    reserveIn: string,
    reserveOut: string
  ): Promise<string> {
    // Constant product formula: x * y = k
    const amountInWithFee = parseFloat(amountIn) * 0.997; // 0.3% fee
    const numerator = amountInWithFee * parseFloat(reserveOut);
    const denominator = parseFloat(reserveIn) + amountInWithFee;
    return (numerator / denominator).toString();
  }

  static async calculateOptimalLiquidity(
    amount0: string,
    amount1: string,
    reserve0: string,
    reserve1: string
  ): Promise<[string, string]> {
    // Calculate optimal amounts based on current reserves
    const amount0Float = parseFloat(amount0);
    const amount1Float = parseFloat(amount1);
    const reserve0Float = parseFloat(reserve0);
    const reserve1Float = parseFloat(reserve1);

    const amount1Optimal = (amount0Float * reserve1Float) / reserve0Float;

    if (amount1Optimal <= amount1Float) {
      return [amount0, amount1Optimal.toString()];
    }

    const amount0Optimal = (amount1Float * reserve0Float) / reserve1Float;
    return [amount0Optimal.toString(), amount1];
  }
}