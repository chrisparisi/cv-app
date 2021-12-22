import React from "react";
import "../styles/Resume.css"

export default function Resume(props) {

    return (
        <div>
            <div>
                <h1>{props.name}</h1>
                <h2>{props.email}</h2>
                <h2>{props.phone}</h2>
                <p>{props.school}</p>
                <p>{props.degree}</p>
                <p>{props.graduationDate}</p>
            </div>
        </div>
    )
}