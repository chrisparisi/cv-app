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
                    id={props.jobs.id}
                    type="text" 
                    name="company"
                    placeholder="Company Name"
                    onChange={(event) => props.handleJobs(event, props.jobs.id)}
                    value={props.jobs.company}
                />
                <input
                    id={props.jobs.id}
                    type="text" 
                    name="position"
                    placeholder="Job Title"
                    onChange={(event) => props.handleJobs(event, props.jobs.id)}
                    value={props.jobs.position}
                />
                <input
                    id={props.jobs.id}
                    type="text" 
                    name="mainTasks"
                    placeholder="Main Tasks"
                    onChange={(event) => props.handleJobs(event, props.jobs.id)}
                    value={props.jobs.mainTasks}
                />
                <input
                    id={props.jobs.id}
                    type="text" 
                    name="startDate"
                    placeholder="Start Date"
                    onChange={(event) => props.handleJobs(event, props.jobs.id)}
                    value={props.jobs.startDate}
                />
                <input
                    id={props.jobs.id}
                    type="text" 
                    name="endDate"
                    placeholder="End Date"
                    onChange={(event) => props.handleJobs(event, props.jobs.id)}
                    value={props.jobs.endDate}
                />
            </form>
        </div>
    )
}