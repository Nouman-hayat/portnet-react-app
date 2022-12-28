
import './App.css';
import {  Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header';
import Footer from './components/Footer';
import Propos from './pages/Propos';
import Demo from './pages/Demo';
import Contact from './pages/Contact';
function App() {
  return (
		<BrowserRouter>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/propos" element={<Propos></Propos>}></Route>
				<Route path="/demo" element={<Demo></Demo>}></Route>
				<Route path="/contact" element={<Contact></Contact>}></Route>
			</Routes>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
