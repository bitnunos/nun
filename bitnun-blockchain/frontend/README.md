# Bitnun Blockchain Frontend

This directory contains the frontend application for the Bitnun blockchain ecosystem, built using React and Next.js. The frontend interacts with the backend services via WebSocket and RESTful APIs, providing a user-friendly interface for monitoring and interacting with the blockchain.

## Project Structure

- **src/pages/index.tsx**: The main entry point of the application, rendering the dashboard and integrating various components.
- **src/components/BlockchainStatus.tsx**: A component that displays the current status of the blockchain, including node health and synchronization status.
- **src/hooks/useP2P.ts**: A custom React hook for managing WebSocket connections and peer interactions in the P2P network.
- **src/utils/api.ts**: Utility functions for making API calls to the backend, handling data fetching and error management.
- **src/styles/globals.css**: Global CSS styles for consistent styling across components.
- **public/favicon.ico**: The favicon for the web application.

## Setup Instructions

1. **Install Dependencies**: Run `npm install` to install the required dependencies.
2. **Start the Development Server**: Use `npm run dev` to start the development server and view the application in your browser at `http://localhost:3000`.
3. **Build for Production**: Run `npm run build` to create an optimized production build of the application.

## Usage Guidelines

- Ensure that the backend services are running and accessible before starting the frontend application.
- Use the dashboard to monitor blockchain status and interact with the network.
- Explore the components and hooks to understand how to extend the application with new features.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.