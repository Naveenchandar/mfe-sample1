import React from 'react'
import { RouterProvider, createBrowserRouter, createMemoryRouter } from 'react-router-dom'
import { routes } from './routes'

export const Router = ({ routingType, initialPathname }) => {
    const initialEntries = [initialPathname || "/"];
    const router = createMemoryRouter(routes, { initialEntries: initialEntries });
    return <RouterProvider router={routingType !== "browser" ? router : createBrowserRouter(routes)} />
}