import React from 'react'

export const Layout = ({ children }) => {
    return (
        <div style={{ border: "1px dashed #ccc" }}>
            This is todos Layout
            {children}
        </div>
    )
}