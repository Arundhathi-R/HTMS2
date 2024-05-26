import React from 'react';
import { useNavigate } from 'react-router-dom';
import './aboutus.css';

const AboutUs = () => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/');
    };

    return (
        <div className="aboutus-container">
            <button className="back-button" onClick={handleBackButtonClick}>Back</button>
            <h1 className="aboutus-heading">ABOUT US</h1>
            <p className="aboutus-paragraph">
            Welcome to the Hospital Token Management System (HTMS), an innovative platform designed to streamline patient management in hospitals. Our system enables patients to view live token statuses, giving them real-time updates and accurate estimates of when their token will be called. This feature minimizes unnecessary waiting times, enhancing the overall patient experience.
            HTMS also offers flexibility for doctors, allowing them to add or delete slots based on their convenience. This ensures a more efficient and adaptable workflow, benefiting both healthcare providers and patients.
            Developed by:
            name 1
            name 2
            name 3
            name 4
            We are a dedicated team of four B-Tech students committed to improving healthcare management through technology. Our goal is to provide a seamless and efficient system that benefits everyone involved.
            </p>
        </div>
    );
};

export default AboutUs;
