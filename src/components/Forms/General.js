import React from "react";
import "../../styles/General.css"

export default function General(props) {

    function handleSubmit(event) {
        event.preventDefault();
    }


    return (
        <div className="general">
            <h3>Personal Information</h3>
            <form className="general--form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={props.handleChange}
                    value={props.name}
                />
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={props.handleChange}
                    value={props.email}
                />
                <input 
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={props.handleChange}
                    value={props.phone}
                />
            </form>
        </div>
    )
}