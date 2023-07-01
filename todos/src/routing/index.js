import React from 'react'
import { RouterProvider, createBrowserRouter, createMemoryRouter } from 'react-router-dom'
import { routes } from './routes'

export const Router = ({ routingType, initialPath }) => {
    const initialEntries = [initialPath || "/"];
    const router = routingType !== "browser"
        ? createMemoryRouter(routes, { initialEntries: initialEntries })
        : createBrowserRouter(routes);
    return (
        <RouterProvider router={router} />
    )
}
