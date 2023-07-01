import React from 'react'
import { useParams } from 'react-router-dom'

export const Element = () => {
    const { id } = useParams();
    const elementRef = React.useRef();
    React.useEffect(() => {
        (async () => {
            try {
                const apiResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
                const responseData = await apiResponse.json();
                console.log('responseData:', responseData)
                if (elementRef?.current) {
                    elementRef.current = responseData;
                }
            } catch (error) {
                elementRef.current = error.message;
            }
        })()
    }, [id])
    return (
        <div ref={elementRef}>Element</div>
    )
}
