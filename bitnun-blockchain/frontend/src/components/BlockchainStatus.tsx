import React, { useEffect, useState } from 'react';
import { fetchBlockchainStatus } from '../utils/api';

const BlockchainStatus: React.FC = () => {
    const [status, setStatus] = useState<{ health: string; syncStatus: string } | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getStatus = async () => {
            try {
                const data = await fetchBlockchainStatus();
                setStatus(data);
            } catch (err) {
                setError('Failed to fetch blockchain status');
            }
        };

        getStatus();
        const interval = setInterval(getStatus, 5000); // Refresh status every 5 seconds

        return () => clearInterval(interval);
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!status) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Blockchain Status</h2>
            <p>Node Health: {status.health}</p>
            <p>Synchronization Status: {status.syncStatus}</p>
        </div>
    );
};

export default BlockchainStatus;