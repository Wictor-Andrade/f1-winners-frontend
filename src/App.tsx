import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {Login7} from "@/pages";
import { AuthProvider } from "@/providers";
import Dashboard from "@/pages/Dashboard/Dashboard.tsx";
import PrivateRoute from "@/HOC/PrivateRoute.tsx";
import NotFound from "@/components/404.tsx";

function App() {
    return (
        <main className="main-wrapper">
        <BrowserRouter>
            <AuthProvider>
                <Toaster position="bottom-left" toastOptions={{ duration: 5000, className: 'custom-toast' }} />
                    <Routes>
                        <Route path="/sign-in" element={<Login7/>} />
                        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
            </AuthProvider>
        </BrowserRouter>
        </main>
    );
}

export default App;
