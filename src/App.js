import Topbar from './components/Topbar/Topbar';
import { publicRoutes } from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <>
            <Router>
                <Topbar />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </Router>
        </>
    );
}

export default App;
