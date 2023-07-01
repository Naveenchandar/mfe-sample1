import React, { useState, useEffect } from 'react';
import "./List.css";
import Form from './Dialog';
import { FormUser } from './Form';
import { Link, useNavigate } from 'react-router-dom';

const List = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [editForm, setEditForm] = useState({
        open: false, info: {}
    })

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const apiData = await fetch("https://jsonplaceholder.typicode.com/users");
                const responseData = await apiData.json();
                setData(responseData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [])

    const actions = async (type, item) => {
        if (type === "edit") {
            setEditForm({ open: true, info: item });
        }
        else if (type === "delete") {
            try {
                const apiData = await fetch(`https://jsonplaceholder.typicode.com/users/${item.id}`, { method: "DELETE" })
                const response = await apiData;
                if (response.status === 200) {
                    const filterItem = data.filter(user => user.id !== item.id);
                    setData(filterItem);
                } else {
                    throw new Error("Error while deleting");
                }
            } catch (error) {
                alert(error.message);
            }
        }
    }

    const headers = [
        { key: "Name", value: "username" },
        { key: "Email", value: "email" },
        { key: "Phone", value: "phone" },
        { key: "Website", value: "website" },
        // { key: "Company", value: "" },
        // { key: "City", value: "City" },
    ]

    if (error) return <p>{error}</p>
    if (loading) return <p>users loading...</p>
    return (
        <>
            <div className="App">
                <button>
                    <Link to="/tabs">Tabs</Link>
                </button>
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1>USERS</h1>
                    <table>
                        <thead>
                            <tr>
                                {headers?.map(item => {
                                    return (
                                        <th key={item.key}>{item.value}</th>
                                    )
                                })}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => {
                                return <tr key={item.id}>
                                    {headers?.map(headerItem => {
                                        return (
                                            <td key={headerItem.key}>{item[headerItem.value]?.toString() ?? "N/A"}</td>
                                        )
                                    })}
                                    <td>
                                        <button onClick={() => actions("edit", item)}>Edit</button> &ensp;
                                        <button onClick={() => actions("delete", item)}>Delete</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </header>
            </div>
        </>
    )
}

export { List }