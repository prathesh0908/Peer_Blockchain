export interface Token {
  symbol: string;
  name: string;
  balance: string;
  address: string;  // Contract address
  decimals: number;
}

export interface Pool {
  token0: Token;
  token1: Token;
  totalLiquidity: string;
  userLiquidity: string;
  address: string;  // Pool contract address
  reserves: [string, string];  // Current pool reserves
  fee: number;     // Pool fee percentage
}

export interface Web3State {
  isConnected: boolean;
  account: string | null;
  chainId: number | null;
  provider: any | null;
}

// ABI interfaces for smart contracts
export interface IERC20 {
  approve(spender: string, amount: string): Promise<any>;
  balanceOf(account: string): Promise<string>;
  allowance(owner: string, spender: string): Promise<string>;
}

export interface ILiquidityPool {
  addLiquidity(
    token0Amount: string,
    token1Amount: string,
    slippageTolerance: number
  ): Promise<any>;
  removeLiquidity(
    lpTokenAmount: string,
    minToken0: string,
    minToken1: string
  ): Promise<any>;
  swap(
    tokenInAddress: string,
    tokenOutAddress: string,
    amountIn: string,
    minAmountOut: string
  ): Promise<any>;
  getReserves(): Promise<[string, string]>;
  calculateSwapOutput(
    tokenInAddress: string,
    amountIn: string
  ): Promise<string>;
}