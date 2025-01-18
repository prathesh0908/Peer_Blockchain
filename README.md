# Peer Blockchain

Peer Blockchain is a decentralized finance (DeFi) application that provides a simple and interactive interface for adding liquidity to a pool and swapping tokens. It leverages the Web3 technology to simulate and display blockchain transactions, enabling users to experiment with liquidity provisioning and token swapping without real transactions on the blockchain.

## Features

- **Add Liquidity**: Allows users to add liquidity to a pool by selecting two tokens and specifying the amounts they want to add. The interface simulates the calculation of optimal liquidity amounts and provides a simulated pool share.
  
- **Swap Tokens**: Provides a token swap interface where users can input the amount of one token and swap it for another. The swap simulation includes slippage tolerance and calculates the minimum amount of output tokens based on the slippage.

- **Slippage Adjustment**: Users can adjust the slippage tolerance for swaps, which affects the minimum amount of tokens they will receive.

- **Token Inputs**: Displays tokens in an intuitive input field with the current balance and allows users to easily select the tokens for liquidity provisioning or swapping.

## Tech Stack

- **React.js**: Frontend framework for building the user interface.
- **Web3.js**: JavaScript library to interact with the Ethereum blockchain.
- **Lucide Icons**: A set of open-source SVG icons used in the application.
- **Tailwind CSS**: A utility-first CSS framework for styling the components.

## Components

- **LiquidityInterface**: The main component for adding liquidity to a pool. It calculates optimal liquidity amounts based on user input and mock reserves.
  
- **SwapInterface**: The component for swapping tokens. It includes a slippage tolerance input and calculates the minimum amount of tokens to receive in the swap.

- **TokenInput**: A reusable input component that displays token details, balance, and allows users to input amounts for the tokens.

## Setup

### Prerequisites

- Node.js >= 14.x
- npm >= 6.x

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/peer-blockchain.git
cd peer-blockchain
```

2. Install dependencies:

```bash
npm install
```

3. Run the project locally:

```bash
npm start
```

This will start the React application at [http://localhost:3000](http://localhost:3000).

### Environment Variables

The project uses mock values for token addresses and reserves. If you want to integrate real contracts, you can configure the Web3Utils and CONTRACTS variables to point to actual blockchain networks and contracts.

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to your fork
5. Create a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- **Web3.js**: For interaction with the blockchain.
- **Tailwind CSS**: For the efficient and responsive UI design.
- **Lucide Icons**: For providing beautiful and customizable icons.

--- 

Feel free to modify and adapt the application as needed!
