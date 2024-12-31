import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import BgBubbles from "./components/BgBubbles";
import Profile from "./components/Profile";
import Menu from "./components/Menu";
import About from "./pages/About";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import BackToTop from "./components/BackToTop";

const routes = [
    { path: '/', name: 'About', Component: About },
    { path: '/resume', name: 'Resume', Component: Resume },
    { path: '/works', name: 'Works', Component: Works },
    { path: '/contact', name: 'Contact', Component: Contact }
];

function App() {
    return (
        <>
            <BackToTop />
            <div className="page-wrap">
                <BgBubbles />
                <Router>
                    <div className="container">
                        <Menu/>
                        <Profile/>
                        <AnimatedRoutes />
                    </div>
                </Router>
            </div>
        </>
    );
}

const AnimatedRoutes = () => {
    const location = useLocation();
    
    return (
        <TransitionGroup className="transition-wrapper">
            <CSSTransition
                classNames="transition"
                timeout={1000}
                unmountOnExit
                key={location.pathname}
            >
                <Routes location={location}>
                    {routes.map(({ path, Component }) => (
                        <Route 
                            key={path}
                            path={path}
                            element={<Component />}
                        />
                    ))}
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default App;
