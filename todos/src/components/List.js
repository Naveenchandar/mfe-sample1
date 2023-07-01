import React from 'react'

export const List = () => {
    const [list, setList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const todoItemRef = React.useRef({});

    React.useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const apiResponse = await fetch("https://jsonplaceholder.typicode.com/users");
                const responseData = await apiResponse.json();
                setList(responseData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })()
    }, [])

    const handleClick = (event, item) => {
        alert(`Title - ${item?.title}- completed - ${item?.completed}`);
        if (todoItemRef?.current) {
            todoItemRef.current.style.textDecoration = "line-through";
        }
    }

    if (error) return <p>Todo list error</p>
    if (loading) return <p>Todo list loading ...</p>
    if (!list?.length) return <p>No Todo list data...</p>
    return (
        <ul>
            {list?.map(item => (
                <li
                    key={item.id}
                    onClick={(event) => handleClick(event, item)}
                    ref={todoItemRef}
                >{item.title}</li>
            ))}
        </ul>
    )
}
