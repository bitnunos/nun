// This file exports shared TypeScript types and interfaces used across both the frontend and backend, ensuring type safety and consistency.

export interface Block {
    index: number;
    timestamp: number;
    transactions: Transaction[];
    previousHash: string;
    hash: string;
}

export interface Transaction {
    sender: string;
    recipient: string;
    amount: number;
}

export interface Peer {
    id: string;
    address: string;
}

export interface ConsensusMetrics {
    totalBlocks: number;
    averageTimePerBlock: number;
    totalTransactions: number;
}

export interface NodeStatus {
    isHealthy: boolean;
    currentBlock: Block;
    peers: Peer[];
}