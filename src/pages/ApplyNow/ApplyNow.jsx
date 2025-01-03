// ApplyNow.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ApplyNow.css'; // Import your CSS file for styling

const ApplyNow = () => {
    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        dob: '',
        program: '',
        gender: '',
        documents: null, // For file uploads
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            documents: e.target.files[0], // Store the first file selected
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Handle form submission logic here
        // Navigate to the Application Submitted page
        navigate('/application-submitted'); 
    };

    return (
        <div className="apply-now-wrapper">
            <h2 className="apply-now-title">Apply Now</h2>
            <form className="apply-now-form" onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                <input type="text" name="fatherName" placeholder="Father's Name" onChange={handleChange} required />
                <input type="date" name="dob" onChange={handleChange} required />
                <select name="program" onChange={handleChange} required>
                    <option value="">Select Program</option>
                    <option value="program1">BSCS</option>
                    <option value="program2">BSIT</option>
                    <option value="program3">ADP</option>
                    <option value="program4">FASHION DESIGNING</option>
                    <option value="program5">ACCOUNTING AND FINANCE</option>
                    <option value="program6">SOFTWARE ENGINEERING</option>
                </select>
                <div className="gender-selection">
                    <label>
                        <input type="radio" name="gender" value="male" onChange={handleChange} required /> Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female" onChange={handleChange} required /> Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="other" onChange={handleChange} required /> Other
                    </label>
                </div>
                <input type="file" name="documents" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
};

export default ApplyNow;