import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";

const App = () => {
    return (
        <BrowserRouter
            future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}
        >
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
