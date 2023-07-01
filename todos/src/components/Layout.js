import React, { useEffect } from 'react'
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../routing/routes';

export const Layout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const onParentNavigationHandler = (event) => {
            const pathname = event.detail;
            if (pathname === location.pathname || !matchRoutes(routes, { pathname })) return;
            navigate(pathname);
        }
        window.addEventListener("[container] navigated", onParentNavigationHandler)
        return () => window.removeEventListener("[container] navigated", onParentNavigationHandler)
    }, [location, navigate])

    useEffect(() => {
        window.dispatchEvent(new CustomEvent("[todos] navigated", { detail: location.pathname }))
    }, [location])


    return (
        <div className="App">
            <header className="App-header">
                <div style={{ border: "1px dashed #ccc" }}>
                    This is todos Layout
                    {children}
                </div>
            </header>
        </div>
    )
}