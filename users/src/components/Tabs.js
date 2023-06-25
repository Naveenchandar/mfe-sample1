import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState({
        city: "London", capital: "England"
    });
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate("/users/list")}>Back to users main page</button>
            <div className="tab">
                <button className="tablinks"
                    onClick={() => setCurrentTab({ city: "London", capital: "England" })}
                >London</button>
                <button className="tablinks"
                    onClick={() => setCurrentTab({ city: 'Paris', capital: "France" })}
                >Paris</button>
                <button className="tablinks"
                    onClick={() => setCurrentTab({ city: 'Tokyo', capital: "JAPAN" })}
                >Tokyo</button>
            </div>
            <TabContent currentTab={currentTab} />
        </>
    )
}

const TabContent = ({ currentTab }) => {
    return (
        <div id={currentTab?.city} className="tabcontent">
            <h3>{currentTab?.city ?? ""}</h3>
            <p>{currentTab?.city ?? ""} is the capital city of {currentTab?.capital ?? ""}.</p>
        </div>
    )
}

export default Tabs