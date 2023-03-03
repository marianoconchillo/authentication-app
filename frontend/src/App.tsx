import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/profile" replace />} />
            </Routes>
        </Router>
    );
}
