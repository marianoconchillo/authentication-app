import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";

export default function App() {
    return (
        <Router>
            <div className="w-screen min-h-screen bg-background flex flex-col items-center md:justify-center md:p-5">
                <div className="md:container md:mx-auto md:border md:rounded-lg md:w-2/3 lg:w-2/5">
                    <Navbar />
                    <div className="flex-1">
                        <Routes>
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/"
                                element={<Navigate to="/profile" replace />}
                            />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}
