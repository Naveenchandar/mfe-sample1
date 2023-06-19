import React, { useRef, useEffect } from 'react';
import { mount } from "todos/todosApp";

const TodosApp = () => {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current);
    })
    return (
        <div ref={ref} />
    )
}

export default TodosApp