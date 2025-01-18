import React, { useState } from 'react';
import { ArrowDownUp } from 'lucide-react';
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

export function SwapInterface() {
  const [token0Amount, setToken0Amount] = useState('');
  const [token1Amount, setToken1Amount] = useState('');
  const [slippage, setSlippage] = useState('0.5'); // 0.5% default slippage
  const [txPending, setTxPending] = useState(false);

  const handleSwap = async () => {
    try {
      setTxPending(true);
      
      // Calculate minimum amount out based on slippage
      const amountOut = await Web3Utils.calculateSwapRate(
        token0Amount,
        '1000000', // Mock reserve0
        '1000000'  // Mock reserve1
      );
      
      const minAmountOut = (
        parseFloat(amountOut) * 
        (1 - parseFloat(slippage) / 100)
      ).toString();

      // Simulate blockchain delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert(
        `Swap simulation:\n` +
        `Amount In: ${token0Amount} ${mockTokens.TOKEN1.symbol}\n` +
        `Amount Out: ${amountOut} ${mockTokens.TOKEN2.symbol}\n` +
        `Min Amount Out: ${minAmountOut} ${mockTokens.TOKEN2.symbol}\n` +
        `Slippage: ${slippage}%`
      );
    } catch (error) {
      console.error('Swap failed:', error);
      alert('Swap failed! Check console for details.');
    } finally {
      setTxPending(false);
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-white rounded-xl shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-gray-800">Swap Tokens</h2>
      
      <TokenInput
        token={mockTokens.TOKEN1}
        amount={token0Amount}
        onChange={setToken0Amount}
      />

      <div className="flex justify-center my-2">
        <button 
          className="p-2 text-gray-600 hover:text-gray-800"
          onClick={() => {
            const temp = token0Amount;
            setToken0Amount(token1Amount);
            setToken1Amount(temp);
          }}
        >
          <ArrowDownUp size={20} />
        </button>
      </div>

      <TokenInput
        token={mockTokens.TOKEN2}
        amount={token1Amount}
        onChange={setToken1Amount}
      />

      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Slippage Tolerance:</span>
          <span>{slippage}%</span>
        </div>
        <input
          type="range"
          min="0.1"
          max="5"
          step="0.1"
          value={slippage}
          onChange={(e) => setSlippage(e.target.value)}
          className="w-full mt-2"
        />
      </div>

      <button
        onClick={handleSwap}
        disabled={txPending}
        className={`w-full py-3 mt-4 text-white rounded-lg transition-colors ${
          txPending
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {txPending ? 'Swapping...' : 'Swap'}
      </button>
    </div>
  );
}