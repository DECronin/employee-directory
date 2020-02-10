import React from 'react';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Employees from "../Employees"

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
                {/* <Employees /> */}
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                </tr>
            </tbody>
        </Table>
    </>

}

export default Directory