import React, { useRef, useEffect } from 'react';
import { mount } from "todos/todosApp";
import Button from 'users/button';
import { useNavigate, useLocation } from "react-router-dom";

const TodosApp = () => {
    const ref = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        mount(ref.current, {
            initialPath: location.pathname.replace("/todos", "")
        })
    }, [])

    useEffect(() => {
        const onTodosNavigationHandler = (event) => {
            const pathname = event.detail;
            const newpathName = `/todos${pathname}`;
            if (newpathName === location.pathname) return;
            navigate(newpathName);
        };
        window.addEventListener("[todos] navigated", onTodosNavigationHandler)
        return () => window.removeEventListener("[todos] navigated", onTodosNavigationHandler);
    }, [location, navigate])

    useEffect(() => {
        window.dispatchEvent(new CustomEvent("[container] navigated",
            { detail: location.pathname?.replace("/todos", "") }
        ))
    }, [location])

    return (
        <>
            <Button label="Go back to main page" navigate={navigate} />
            <div ref={ref} />
        </>
    )
}

export default TodosApp