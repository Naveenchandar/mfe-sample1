import React, { useEffect } from 'react'
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../routes/routes';

const Layout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        function onParentNavigateHandler(event) {
            const pathname = event.detail;
            if(location.pathname === pathname || !matchRoutes(routes,{pathname})) return;
            navigate(pathname);
        }
        window.addEventListener("[container] navigated", onParentNavigateHandler)

        return () => window.removeEventListener("[container] navigated", onParentNavigateHandler)
    }, [location, navigate])

    useEffect(() => {
        window.dispatchEvent(new CustomEvent("[users] navigated", { detail: location.pathname }))
    }, [location])
    
    return (
        <div style={{ border: "2px solid red" }}>
            <h6>This is users layout</h6>
            {children}
        </div>
    )
}

export default Layout