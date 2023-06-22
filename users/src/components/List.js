import React from 'react';
import "./List.css";
import Form from './Dialog';
import { FormUser } from './Form';

const List = ({ type, data, error, loading, editForm, actions, setEditForm, headers }) => {
    // const [data, setData] = useState([]);
    // const [error, setError] = useState("");
    // const [loading, setLoading] = useState(true);
    // const [editForm, setEditForm] = useState({
    //     open: false, info: {}
    // })

    // useEffect(() => {
    //     (async () => {
    //         setLoading(true);
    //         try {
    //             const apiData = await fetch(url);
    //             const responseData = await apiData.json();
    //             setData(responseData);
    //         } catch (error) {
    //             setError(error.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     })();
    // }, [url])

    // const actions = async (type, item) => {
    //     if (type === "edit") {
    //         setEditForm({ open: true, info: item });
    //     }
    //     else if (type === "delete") {
    //         try {
    //             const apiData = await fetch(`${url}/${item.id}`, { method: "DELETE" })
    //             const response = await apiData;
    //             if (response.status === 200) {
    //                 const filterItem = data.filter(user => user.id !== item.id);
    //                 setData(filterItem);
    //             } else {
    //                 throw new Error("Error while deleting");
    //             }
    //         } catch (error) {
    //             alert(error.message);
    //         }
    //     }
    // }

    if (error) return <p>{error}</p>
    if (loading) return <p>{type} loading...</p>
    return (
        <>
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
        </>
    )
}

export default List