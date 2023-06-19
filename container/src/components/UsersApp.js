import React, { useEffect, useRef } from 'react';
import { mount } from "users/usersApp";
import Button from 'users/button';

const UsersApp = () => {
    const ref = useRef(null);
    
    useEffect(() => {
        mount(ref.current);
    }, [])

    return (
        <>
            <div ref={ref} />
            <Button label="Container users" />
        </>
    )
}

export default UsersApp