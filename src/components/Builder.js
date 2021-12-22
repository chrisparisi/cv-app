import React, {useState} from "react";
import "../styles/Builder.css"
import ResumeForm from "./ResumeForm";
import Resume from "./Resume";

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
            />
            <Resume 
                name={formData.name}
                email={formData.email}
                phone={formData.phone}
                school={formData.school}
                degree={formData.degree}
                graduationDate={formData.graduationDate}
                jobs={formData.jobs}
                onChange={handleChange}
            />
        </div>
    )
}