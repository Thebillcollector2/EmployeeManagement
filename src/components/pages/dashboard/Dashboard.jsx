import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col, Table } from 'react-bootstrap';

const Dashboard = () => {
    const [employees, setEmployees] = useState([]);
   // const navigate = useNavigate();

    // useEffect hook to fetch employees from the server when the component mounts
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                // Fetch employee data from the API
                const response = await fetch('http://localhost:8080/api/employees');
                const data = await response.json();
                
                // Update state with fetched employee data
                setEmployees(data);
            } catch (error) {
                // Log any errors encountered during the fetch operation
                console.error('Error fetching employees:', error.message);
            }
        };
        fetchEmployees();
    }, []); // Empty dependency array means this runs only once after the initial render

    // Function to handle the deletion of an employee
    const handleDelete = async (employeeId) => {
        try {
            // Send DELETE request to the server to delete the employee
            const response = await fetch(`http://localhost:8080/api/employees/${employeeId}`, {
                method: 'DELETE',
            });

            // Check if the response was successful
            if (response.ok) {
                console.log(`Employee with id ${employeeId} deleted`);
                
                // Update the state to remove the deleted employee from the list
                setEmployees(employees.filter(employee => employee.id !== employeeId));
            } else {
                console.log('Failed to delete employee');
            }
        } catch (error) {
            // Handle any errors that occur during the fetch operation
            console.log('Error deleting employee: ' + error.message);
        }
    }

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <h1 className='text-center'>Employees</h1>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Department</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Map over the employees and display each one in a table row */}
                                {employees.map((employee) => (
                                    <tr key={employee.id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.phone}</td>
                                        <td>{employee.department}</td>
                                        <td>
                                            <Button variant="outline-secondary" className="mr-2">
                                                Update
                                            </Button>
                                            <Button
                                                variant="outline-danger"
                                                // Handle deletion when the delete button is clicked
                                                onClick={() => handleDelete(employee.id)}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;
