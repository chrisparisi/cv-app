import React from "react";
import "../../styles/Experience.css"

export default function Experience(props) {

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <div className="experience">
            <h3>Experience</h3>
            <form className="experience--form" onSubmit={handleSubmit}>
                <input
                    type="text" 
                    name="company"
                    placeholder="Company Name"
                    onChange={props.handleChange}
                    value={props.jobs.company}
                />
                <input
                    type="text" 
                    name="position"
                    placeholder="Job Title"
                    onChange={props.handleChange}
                    value={props.jobs.position}
                />
                <input
                    type="text" 
                    name="mainTasks"
                    placeholder="Main Tasks"
                    onChange={props.handleChange}
                    value={props.jobs.mainTasks}
                />
                <input
                    type="text" 
                    name="startDate"
                    placeholder="Start Date"
                    onChange={props.handleChange}
                    value={props.jobs.startDate}
                />
                <input
                    type="text" 
                    name="endDate"
                    placeholder="End Date"
                    onChange={props.handleChange}
                    value={props.jobs.endDate}
                />
            </form>
        </div>
    )
}