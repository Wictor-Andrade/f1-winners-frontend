import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Dashboard from "@/pages/Dashboard.tsx";
import PrivateRoute from "@/utils/HOC/PrivateRoute.tsx";
import NotFound from "@/components/404.tsx";
import Teams from "@/pages/Teams.tsx";
import {Login7} from "@/pages/Login7.tsx";
import {AuthProvider} from "@/features/auth/providers/AuthProvider.tsx";
import {RecoilRoot} from "recoil";


function App() {
    return (
        <main className="main-wrapper">
        <BrowserRouter>
            <RecoilRoot>
                <AuthProvider>
                    <Toaster position="bottom-left" toastOptions={{ duration: 5000, className: 'custom-toast' }} />
                        <Routes>
                            <Route path="/sign-in" element={<Login7/>} />
                            <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
                            <Route path="/teams" element={<PrivateRoute><Teams/></PrivateRoute>} />
                            <Route path="*" element={<NotFound/>} />
                        </Routes>
                </AuthProvider>
            </RecoilRoot>
        </BrowserRouter>
        </main>
    );
}

export default App;
