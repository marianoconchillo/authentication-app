import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/AuthProvider";
import { Login } from "./pages/Login";

export default function App() {
    return (
        <AuthProvider>
            <div className="w-screen min-h-screen bg-background flex flex-col items-center">
                <Navbar />
                <div className="flex-1">
                    <Login />
                </div>
                <Footer />
            </div>
        </AuthProvider>
    );
}
