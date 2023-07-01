import React, { useEffect, useRef } from 'react';
import { mount } from "users/usersApp";
import Button from 'users/button';
import { useLocation, useNavigate } from 'react-router-dom';

const UsersApp = () => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        mount(ref.current, {
            initialPathname: location.pathname.replace(
                "/users",
                ''
            ),
        });
    }, [])

    // effect to listen whether user mfe changing its routes
    useEffect(() => {
        const usersNavigateHandler = (event) => {
            const pathname = event?.detail;
            const newpathName = `/users${pathname}`;
            if (newpathName === location.pathname) return;
            navigate(newpathName);

        }
        window.addEventListener("[users] navigated", usersNavigateHandler);

        return () => {
            window.removeEventListener("[users] navigated", usersNavigateHandler);
        };
    }, [location, navigate])

    useEffect(() => {
        if (location.pathname.startsWith("/users")) {
            window.dispatchEvent(new CustomEvent("[container] navigated", { detail: location.pathname.replace("/users", "") }))
        }
    }, [location])

    return (
        <>
            <Button label="Go back to main page" navigate={navigate} />
            <div ref={ref} />
        </>
    )
}

export default UsersApp