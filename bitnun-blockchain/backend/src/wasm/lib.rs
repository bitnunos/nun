// This file contains the Rust/WASM module that can be loaded in the browser, providing the necessary functions for the viral node client.

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

// Additional functions for the viral node client can be added here.