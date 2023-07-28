import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Write from './pages/Write/Write';
import Settings from './pages/Settings/Settings';
import Single from './pages/Single/Single';
import { useContext } from 'react';
import { Context } from './context/Context';
function App() {
    const { user } = useContext(Context);
    return (
        <>
            <Router>
                <Topbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={user ? <Home /> : <Register />} />
                    <Route path="/login" element={user ? <Home /> : <Login />} />
                    <Route path="/write" element={user ? <Write /> : <Login />} />
                    <Route path="/settings" element={user ? <Settings /> : <Login />} />
                    <Route path="/post/:postId" element={<Single />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
