// This file is the entry point of the backend application. It initializes the server, sets up routes, and starts the WebSocket listener for peer-to-peer networking.

use actix_web::{web, App, HttpServer};
use std::sync::Arc;
use tokio::sync::Mutex;

mod consensus;
mod ai;
mod wasm;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let state = Arc::new(Mutex::new(())); // Shared state for the application

    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(state.clone()))
            .route("/api/some_endpoint", web::get().to(some_handler)) // Example route
            .service(p2p::websocket::start_websocket_listener()) // Start WebSocket listener
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}

async fn some_handler() -> &'static str {
    "Hello, Bitnun Blockchain!"
}