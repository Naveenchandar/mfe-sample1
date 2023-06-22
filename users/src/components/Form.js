import React from "react";

export const FormUser = ({ data }) => {
    const renderInput = (value, placeholder, name, id, label) => {
        return (
            <>
                <label htmlFor={name}>{label}</label>
                <input type="text" defaultValue={value} placeholder={placeholder} name={name} id={id} />
            </>
        )
    }
    return (
        <>
            <div>
                {renderInput(data.username, "Please enter username", "username", "username", "username")}
            </div>
            <div>
                {renderInput(data.website, "Please enter website", "website", "website", "website")}
            </div>
            <div>
                {renderInput(data?.company?.name, "Please enter company", "company", "company", "company")}
            </div>
        </>
    )
}