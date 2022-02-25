import React, {useState} from "react";
import "../styles/Builder.css"
import ResumeForm from "./ResumeForm";
import Resume from "./Resume";
import { v4 as uuidv4 } from 'uuid';

export default function Builder() {

    const [ formData, setFormData ] = useState(
        {
            name: "",
            email: "",
            phone: "",
            school: "",
            degree: "",
            graduationDate: "",
            jobs: [
                    {
                        id: uuidv4(),
                        company: "",
                        position: "",
                        mainTasks: "",
                        startDate: "",
                        endDate: ""
                    }
                     ]
        }
    )

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
        console.log(formData)
    }

    function handleJobs(event, id) {
        const { name, value } = event.target

        setFormData((prevState) => {
            const newJob = prevState.jobs.map((job) => {
                if (job.id === id) {
                    return { ...job, [name]: value }
                    }
                return job
                })
                return {...prevState, job: [...newJob]}
        })
        console.log(formData)
    }

    return (
        <div className="container">
            <ResumeForm
                name={formData.name}
                email={formData.email}
                phone={formData.phone}
                school={formData.school}
                degree={formData.degree}
                graduationDate={formData.graduationDate}
                jobs={formData.jobs}
                handleChange={handleChange}
                handleJobs={handleJobs}
            />
            <Resume
                name={formData.name}
                email={formData.email}
                phone={formData.phone}
                school={formData.school}
                degree={formData.degree}
                graduationDate={formData.graduationDate}
                jobs={formData.jobs}
            />
        </div>
    )
}