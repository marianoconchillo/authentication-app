import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";

export default function App() {
    return (
        <div className="w-screen min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="flex-1">
                <Login />
            </div>
            <Footer />
        </div>
    );
}
