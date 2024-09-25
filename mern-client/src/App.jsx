import "./App.css";
import { Outlet } from "react-router-dom";
import MyFooter from "./components/MyFooter";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
            <MyFooter />
        </>
    );
}

export default App;
