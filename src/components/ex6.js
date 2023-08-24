import React, { useState } from "react";
export default function Is18() {
    const user = {
        firstname: "ehab",
        age: "14",
        email: "ehab@ehab.com",
    };
    const comment = "sorry";
    const [age18, setIsAge18] = useState(false);
    return (
        <div>
            <p> firstname: {user.firstname}</p>
            <p> age: {user.age}</p>
            <p> email: {user.email}</p>
            
        { user.age < 18 ? comment : "is ok" };
        </div>
    );
}