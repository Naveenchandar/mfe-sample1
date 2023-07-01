import React from 'react'
import { useNavigate } from 'react-router-dom';

export const List = () => {
    const [list, setList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const todoItemRef = React.useRef([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const apiResponse = await fetch("https://jsonplaceholder.typicode.com/todos");
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
            todoItemRef.current[item.id].style.textDecoration = "line-through"
        }
        navigate(`/${item.id}`)
    }

    if (error) return <p>Todo list error</p>
    if (loading) return <p>Todo list loading ...</p>
    if (!list?.length) return <p>No Todo list data...</p>
    return (
        <ul>
            {list?.map((item, index) => (
                <LiElement
                    key={index}
                    ref={todoItemRef}
                    item={item}
                    handleClick={(event) => handleClick(event, item)}
                // ref={(element) => todoItemRef.current[item.id] = element}
                />
            ))}
        </ul >
    )
}

const LiElement = React.forwardRef((props, ref) => {
    return (
        <li
            onClick={props.handleClick}
            ref={(element) => ref.current[props.item.id] = element}
        >{props.item.title}</li>
    )
})
