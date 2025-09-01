import React from 'react';
import BlockchainStatus from '../components/BlockchainStatus';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Bitnun Blockchain Ecosystem</h1>
            <p>This platform is designed to provide a viral blockchain experience with advanced features.</p>
            <BlockchainStatus />
        </div>
    );
};

export default Home;