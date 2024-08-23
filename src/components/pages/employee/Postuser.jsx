import "./Postuser.css";
import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Postuser = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(formData);
    try {
        const response = await fetch("http://localhost:8080/api/employee",{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(formData)

        });

        const data= await response.json();
        console.log("employee created:",data);
        navigate("/")
    } catch (error) {
        console.log("Error creating employee",error.message); 
        
    }

  }

    return (
        <>
            <div>Post new employee</div>
            <Form onSubmit={handleSubmit} >
                <Form.Group controlId="formBasicName" className="mb-3" >
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail"className="mb-3">
                    <Form.Control
                        type="text"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPhone" className="mb-3">
                    <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Enter phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicDepartment" className="mb-3">
                    <Form.Control
                        type="text"
                        name="department"
                        placeholder="Enter department"
                        value={formData.department}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Post Employee
                </Button>
            </Form>
        </>
    );
};
