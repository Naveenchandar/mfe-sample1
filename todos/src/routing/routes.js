import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "../components/Layout";
import { List } from "../components/List";
import { Element } from "../components/Element";

export const routes = [
    {
        path: "/",
        element: (
            <Layout>
                <Outlet />
            </Layout>
        ),
        children: [
            {
                index: true,
                element: <List />
            },
            {
                path: ":id",
                element: <Element />
            }
        ]
    }
]