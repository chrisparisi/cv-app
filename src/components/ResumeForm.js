import React from "react";
import General from "./Forms/General"
import Education from "./Forms/Education";
import Experience from "./Forms/Experience";

export default function ResumeForm(props) {
    return (
        <div>
            <General
                name={props.name}
                email={props.email}
                phone={props.phone}
                handleChange={props.handleChange}
            />
            <Education
                 school={props.school}
                 degree={props.degree}
                 graduationDate={props.graduationDate}
                 handleChange={props.handleChange}
            />
            <Experience
                jobs={props.jobs}
                handleChange={props.handleChange}
            />
        </div>
    )
}