import React, { useState } from 'react';
import { SwapInterface } from './components/SwapInterface';
import { LiquidityInterface } from './components/LiquidityInterface';

function App() {
  const [activeTab, setActiveTab] = useState<'swap' | 'liquidity'>('swap');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="flex gap-4 mb-6">
            <button
              className={`flex-1 py-2 text-center rounded-lg transition-colors ${
                activeTab === 'swap'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('swap')}
            >
              Swap
            </button>
            <button
              className={`flex-1 py-2 text-center rounded-lg transition-colors ${
                activeTab === 'liquidity'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('liquidity')}
            >
              Liquidity
            </button>
          </div>

          {activeTab === 'swap' ? <SwapInterface /> : <LiquidityInterface />}
        </div>
      </div>
    </div>
  );
}

export default App;