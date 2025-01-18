import React, { useState } from 'react';
import { TokenInput } from './TokenInput';
import { Token } from '../types';
import { Web3Utils, CONTRACTS } from '../utils/web3';

const mockTokens: { [key: string]: Token } = {
  TOKEN1: {
    symbol: 'TKN1',
    name: 'Token One',
    balance: '1000.00',
    address: CONTRACTS.TOKEN1,
    decimals: 18
  },
  TOKEN2: {
    symbol: 'TKN2',
    name: 'Token Two',
    balance: '1000.00',
    address: CONTRACTS.TOKEN2,
    decimals: 18
  }
};

export function LiquidityInterface() {
  const [token0Amount, setToken0Amount] = useState('');
  const [token1Amount, setToken1Amount] = useState('');
  const [txPending, setTxPending] = useState(false);

  const handleAddLiquidity = async () => {
    try {
      setTxPending(true);

      // Calculate optimal liquidity amounts
      const [amount0Optimal, amount1Optimal] = await Web3Utils.calculateOptimalLiquidity(
        token0Amount,
        token1Amount,
        '1000000', // Mock reserve0
        '1000000'  // Mock reserve1
      );

      // Simulate blockchain delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      alert(
        `Add Liquidity simulation:\n` +
        `Token0: ${amount0Optimal} ${mockTokens.TOKEN1.symbol}\n` +
        `Token1: ${amount1Optimal} ${mockTokens.TOKEN2.symbol}\n` +
        `Pool share: 0.1%`
      );
    } catch (error) {
      console.error('Add liquidity failed:', error);
      alert('Failed to add liquidity! Check console for details.');
    } finally {
      setTxPending(false);
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-white rounded-xl shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-gray-800">Add Liquidity</h2>
      
      <TokenInput
        token={mockTokens.TOKEN1}
        amount={token0Amount}
        onChange={setToken0Amount}
      />

      <div className="my-2 text-center text-gray-500">+</div>

      <TokenInput
        token={mockTokens.TOKEN2}
        amount={token1Amount}
        onChange={setToken1Amount}
      />

      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-700">Pool Information</h3>
        <div className="mt-2 text-sm text-gray-500">
          <div className="flex justify-between">
            <span>Pool Address:</span>
            <span className="font-mono">{`${CONTRACTS.POOL.slice(0, 6)}...${CONTRACTS.POOL.slice(-4)}`}</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Total Liquidity:</span>
            <span>$1,000,000</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Your Liquidity:</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Pool Share:</span>
            <span>0%</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleAddLiquidity}
        disabled={txPending}
        className={`w-full py-3 mt-4 text-white rounded-lg transition-colors ${
          txPending
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {txPending ? 'Adding Liquidity...' : 'Add Liquidity'}
      </button>
    </div>
  );
}