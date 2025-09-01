# Bitnun Blockchain Backend

This README provides an overview of the backend component of the Bitnun blockchain ecosystem. It includes setup instructions, usage guidelines, and a brief description of the architecture.

## Overview

The backend is built using Rust and provides the core functionalities of the Bitnun blockchain, including:

- **WebSocket P2P Networking**: Enables peer discovery and message exchange between nodes.
- **Consensus Mechanism**: Implements an AI-driven Proof-of-Action consensus algorithm.
- **Blockchain Management**: Manages blocks, transactions, and the overall ledger.
- **WASM Integration**: Provides a Rust/WASM module for browser compatibility.

## Project Structure

The backend is organized into the following modules:

- `src/main.rs`: Entry point of the application, initializes the server and WebSocket listener.
- `src/consensus/mod.rs`: Contains the consensus algorithm implementation.
- `src/p2p/websocket.rs`: Implements WebSocket client and server logic.
- `src/blockchain/mod.rs`: Core blockchain logic, including mining and ledger management.
- `src/ai/consensus_ai.rs`: AI components for adaptive consensus.
- `src/wasm/lib.rs`: Rust/WASM module for client-side functionality.

## Setup Instructions

1. **Install Rust**: Ensure you have Rust installed on your machine. You can download it from [rust-lang.org](https://www.rust-lang.org/).

2. **Clone the Repository**: Clone the Bitnun blockchain repository to your local machine.

   ```
   git clone <repository-url>
   cd bitnun-blockchain/backend
   ```

3. **Build the Project**: Use Cargo to build the backend.

   ```
   cargo build
   ```

4. **Run the Server**: Start the backend server.

   ```
   cargo run
   ```

5. **Access the API**: The backend will be running on `http://localhost:8000` by default. You can interact with the API using tools like Postman or cURL.

## Usage Guidelines

- Ensure that the WebSocket server is running to facilitate peer-to-peer communication.
- Refer to the individual module documentation for specific implementation details and usage examples.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.