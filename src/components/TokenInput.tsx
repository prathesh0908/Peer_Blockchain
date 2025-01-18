import React from 'react';
import { Token } from '../types';

interface TokenInputProps {
  token: Token;
  amount: string;
  onChange: (value: string) => void;
}

export function TokenInput({ token, amount, onChange }: TokenInputProps) {
  return (
    <div className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex-1">
        <div className="text-sm text-gray-500">{token.name}</div>
        <input
          type="number"
          value={amount}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0.0"
          className="w-full text-2xl font-medium bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="px-3 py-1 text-sm font-medium bg-gray-100 rounded-full">
          {token.symbol}
        </div>
        <div className="text-sm text-gray-500">
          Balance: {token.balance}
        </div>
      </div>
    </div>
  );
}