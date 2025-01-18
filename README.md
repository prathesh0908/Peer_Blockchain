# Peer_Blockchain
# Decentralized Application (dApp) for Liquidity Pool and Token Swap

## Overview
This project is a decentralized application (dApp) that allows users to interact with smart contracts deployed on an EVM-compatible blockchain network. The application features ERC20 token deployment, a liquidity pool smart contract, and a user-friendly frontend interface for liquidity management and token swapping.

## Features
### 1. **ERC20 Token Deployment**
- Two unique ERC20 tokens have been deployed:
  - **Token A**: [Description, e.g., Utility token]
  - **Token B**: [Description, e.g., Governance token]

### 2. **Liquidity Pool Smart Contract**
A custom smart contract enables the following functionalities:
- **Add Liquidity**: Users can deposit both tokens into the pool.
- **Remove Liquidity**: Users can withdraw their contributed tokens proportionally.
- **Token Swap**: Allows users to exchange one token for another within the pool at a dynamic exchange rate based on the pool's token reserves.

### 3. **Frontend Interface**
The user-friendly interface provides:
- Seamless interaction with the smart contracts.
- Clear display of pool reserves, user balances, and token prices.
- Easy-to-use forms for adding/removing liquidity and swapping tokens.

---

## Technology Stack
### **Backend**
- **Solidity**: For writing smart contracts.
- **OpenZeppelin**: Utilized for ERC20 token implementation.

### **Frontend**
- **React.js**: For building the frontend interface.
- **Ethers.js**: For connecting and interacting with the blockchain network.

### **Blockchain**
- **Ganache/Hardhat**: For local blockchain development and testing.
- **Metamask**: For user authentication and wallet integration.

---

## Installation and Setup

### 1. **Prerequisites**
Ensure the following tools are installed:
- [Node.js](https://nodejs.org/)
- [Ganache](https://trufflesuite.com/ganache/)
- [Metamask](https://metamask.io/)

### 2. **Clone the Repository**
```bash
git clone <repository_url>
cd <project_directory>
