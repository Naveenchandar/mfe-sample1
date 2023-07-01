import React from 'react'
import { useParams } from 'react-router-dom'

export const Element = () => {
    const { id } = useParams();
    const [itemInfo, setItemInfo] = React.useState({
        title: "",
        completed: ""
    });
    React.useEffect(() => {
        (async () => {
            try {
                const apiResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
                const { title, completed } = await apiResponse.json();
                setItemInfo({ title, completed })
            } catch (error) {
                setItemInfo({ error: error.message })
            }
        })()
    }, [id])
    const { error, title, completed } = itemInfo;
    return (
        <div>
            {error
                ? <p color='red'>{error}</p>
                : (
                    <>
                        <p>Title - {title}</p>
                        <p>Completed - {completed?.toString()}</p>
                    </>
                )
            }
        </div>
    )
}
