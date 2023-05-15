import React from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import NavBar from "./components/NavBar";
import PageNotFound from "./routes/PageNotFound";
import Portfolio from "./routes/Portfolio";
import Resume from "./routes/Resume";
import ThemeSwitcher from "./components/ThemeSwitcher";

import { loadConfig } from "./modules/changeTheme";

function App() {
	useEffect(() => {
		loadConfig();
	});

	return (
		<main>
			<div className="m-4">
				<div className="App panelContainer max-w-4xl">
					<div className="grid grid-cols-2">
						<NavBar />
						<ThemeSwitcher />
					</div>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/portfolio"
							element={<Portfolio />}
						/>
						<Route
							path="/resume"
							element={<Resume />}
						/>
						{/* No match or 404 error */}
						<Route
							path="*"
							element={<PageNotFound />}
						/>
					</Routes>
				</div>
			</div>
		</main>
	);
}

export default App;
