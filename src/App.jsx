import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../src/assets/fonts/Gill-Sans-Condensed-Bold.ttf";
import Homepage from "./pages/Homepage";
import PokemonInfo from "./pages/PokemonInfo";
import NavBar from "./components/NavBar";
import Error from "./pages/Error";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/pokemon/:pokemonId" element={<PokemonInfo />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
