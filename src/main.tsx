import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");

// Checks if container is not null because TypeScript kept yelling at me
// Despite there being an error in the editor, there wasn't a runtime error.
if (!container) throw new Error("Failed to find root element.");
const root = ReactDOMClient.createRoot(container);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
