# Bitnun Shared Types Module

This directory contains shared TypeScript types and interfaces that are used across both the frontend and backend of the Bitnun blockchain ecosystem. By centralizing type definitions, we ensure type safety and consistency throughout the project.

## Purpose

The shared types module serves to:

- Define common data structures used in both the frontend and backend.
- Facilitate communication between different parts of the application by providing a clear contract for data shapes.
- Enhance developer experience by leveraging TypeScript's type-checking capabilities.

## Usage

To use the shared types in your project, simply import the necessary types from this module. For example:

```typescript
import { Block, Transaction } from '../shared/types';
```

## Types Overview

- **Block**: Represents a block in the blockchain, containing metadata and transactions.
- **Transaction**: Represents a transaction within a block, including sender, receiver, and amount.
- **Peer**: Represents a peer in the P2P network, including its address and connection status.

## Contribution

If you need to add or modify types, please ensure that you:

- Follow the existing naming conventions.
- Document any new types added to maintain clarity.
- Run type checks to ensure consistency across the project.

## License

This module is part of the Bitnun blockchain ecosystem and is subject to the same licensing terms as the overall project. Please refer to the main project README for more details.