import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import { List } from "../components/List";
import { Tabs } from "../components/Tabs";

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
                path: "tabs",
                element: <Tabs />
            }
        ]
    }
]