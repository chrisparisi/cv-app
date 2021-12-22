import React from "react";
import "../../styles/Education.css";

export default function Education(props) {

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <div className="education">
            <h3>Education</h3>
            <form className="education--form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="school"
                    placeholder="School Name"
                    onChange={props.handleChange}
                    value={props.school}
                />
                <input 
                    type="text"
                    name="degree"
                    placeholder="Degree"
                    onChange={props.handleChange}
                    value={props.degree}
                />
                <input 
                    type="text"
                    name="graduationDate"
                    placeholder="Graduation Date"
                    onChange={props.handleChange}
                    value={props.graduationDate}
                />
            </form>
        </div>
    )
}