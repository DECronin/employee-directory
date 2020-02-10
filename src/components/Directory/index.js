import React from 'react';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rows from "../Rows"

function Directory() {
    return <>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    {/* add buttons/nav for sorting and filtering? */}
                    <th>ID: <button>S</button></th>
                    <th>Username:</th>
                    <th>Name: (Last, First) <button>S</button></th>
                    <th>Status: <button>F</button></th>
                    <th>Department: <button>F</button></th>
                    <th>Location: <button>F</button></th>
                    <th>Phone:</th>
                    <th>Email:</th>
                    <th>Age: <button>S</button></th>
                </tr>
            </thead>
            <tbody>
                <Rows />
            </tbody>
        </Table>
    </>

}

export default Directory