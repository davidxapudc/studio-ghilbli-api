import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import FilmList from "./pages/FilmList";
import FilmDetails from "./pages/FilmDetails";

const App = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<MainLayout />}>
            <Route index element={<FilmList />} />
            <Route path="film/:id" element={<FilmDetails />} />
            </Route>
        </Routes>
        </Router>
    );
    };

export default App;
