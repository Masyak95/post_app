import {BrowserRouter} from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
