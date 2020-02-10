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
                    <th>ID:</th>
                    {/* ^ sort */}
                    <th>Username:</th>
                    <th>Name: (Last, First)</th>
                    {/* ^ sort */}
                    <th>Status:</th>
                    {/* ^ filter */}
                    <th>Department:</th>
                    {/* ^ filter */}
                    <th>Location:</th>
                    {/* ^ filter */}
                    <th>Phone:</th>
                    <th>Email:</th>
                    <th>Age:</th>
                    {/* ^ sort */}
                </tr>
            </thead>
            <tbody>
                <Rows />
            </tbody>
        </Table>
    </>

}

export default Directory