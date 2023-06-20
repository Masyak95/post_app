
import React, { useEffect, useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { AuthContext } from './context';
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <BrowserRouter>
                {isAuth && <Navbar />}
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
