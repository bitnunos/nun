import { useEffect, useRef, useState } from 'react';

const useP2P = (url: string) => {
    const [peers, setPeers] = useState<string[]>([]);
    const [messages, setMessages] = useState<string[]>([]);
    const socketRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        socketRef.current = new WebSocket(url);

        socketRef.current.onopen = () => {
            console.log('WebSocket connection established');
        };

        socketRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'peer') {
                setPeers((prevPeers) => [...prevPeers, data.peer]);
            } else if (data.type === 'message') {
                setMessages((prevMessages) => [...prevMessages, data.message]);
            }
        };

        socketRef.current.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            socketRef.current?.close();
        };
    }, [url]);

    const sendMessage = (message: string) => {
        if (socketRef.current) {
            socketRef.current.send(JSON.stringify({ type: 'message', message }));
        }
    };

    return { peers, messages, sendMessage };
};

export default useP2P;