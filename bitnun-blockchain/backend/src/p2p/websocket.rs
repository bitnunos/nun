// This file implements the WebSocket client and server logic for peer discovery and message exchange in the P2P network.

use std::sync::{Arc, Mutex};
use tokio::net::TcpListener;
use tokio::sync::mpsc;
use tokio_tungstenite::tungstenite::protocol::Message;
use tokio_tungstenite::accept_async;
use futures_util::{SinkExt, StreamExt};

pub struct P2PNetwork {
    peers: Arc<Mutex<Vec<String>>>,
}

impl P2PNetwork {
    pub fn new() -> Self {
        P2PNetwork {
            peers: Arc::new(Mutex::new(Vec::new())),
        }
    }

    pub async fn start_server(&self, addr: &str) {
        let listener = TcpListener::bind(addr).await.expect("Failed to bind");
        println!("WebSocket server listening on: {}", addr);

        while let Ok((stream, _)) = listener.accept().await {
            let peers = Arc::clone(&self.peers);
            tokio::spawn(async move {
                let ws_stream = accept_async(stream)
                    .await
                    .expect("Error during WebSocket handshake");

                let (mut write, mut read) = ws_stream.split();

                while let Some(message) = read.next().await {
                    match message {
                        Ok(msg) => {
                            if let Message::Text(text) = msg {
                                println!("Received: {}", text);
                                // Handle incoming messages (e.g., broadcast to peers)
                            }
                        }
                        Err(e) => {
                            eprintln!("Error while reading message: {}", e);
                            break;
                        }
                    }
                }
            });
        }
    }

    pub async fn connect_to_peer(&self, addr: &str) {
        let (ws_stream, _) = tokio_tungstenite::connect_async(addr)
            .await
            .expect("Failed to connect to peer");

        let (mut write, mut read) = ws_stream.split();

        tokio::spawn(async move {
            while let Some(message) = read.next().await {
                match message {
                    Ok(msg) => {
                        if let Message::Text(text) = msg {
                            println!("Received from peer: {}", text);
                            // Handle incoming messages from peers
                        }
                    }
                    Err(e) => {
                        eprintln!("Error while reading message from peer: {}", e);
                        break;
                    }
                }
            }
        });

        // Add the peer to the list
        self.peers.lock().unwrap().push(addr.to_string());
    }
}