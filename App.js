import React from "react";
import "./App.css";
import AppRouter from "./routes/Router";

// We now render the Navbar and Footer inside AppRouter
// so they have access to the router context.

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
