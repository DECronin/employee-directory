import React, { Component } from 'react';
import API from "../../utils/API";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

class Directory extends Component {
    state = {
        default: [],
        currentEmployees: []
    };
    populateRows = () => {
        console.log(`topPop::\n${JSON.stringify(this.state.currentEmployees)}`);
        let newArray = [];
        this.state.currentEmployees.forEach(em => {
            console.log(JSON.stringify(em));
            newArray.push(<tr>
                {/* id */}
                <td>{em.index}</td>
                {/* username */}
                <td>{em.login.username}</td>
                {/* name (last, first) */}
                <td>{em.name.last}, {em.name.first}</td>
                {/* status */}
                <td>"Status"</td>
                {/* dep */}
                <td>"DEP"</td>
                {/* location */}
                <td>{em.location.city}, {em.location.state}</td>
                {/* phone */}
                <td>{em.phone}</td>
                {/* email */}
                <td>{em.email}</td>
                {/* age */}
                <td>{em.dob.age}</td>
            </tr>)
        })
        return newArray
    };
    // sort = col => {
    //     this.state.employees = this.state.employees.map(col)
    // };
    // filter = col => {
    //     this.state.employees = this.state.employees.filter(col)
    // };
    // reset() {
    //     this.setState({ currentEmployees: this.state.default })
    // };
    componentDidMount() {
        API.mergeDatabase().then(res => {
            this.setState({
                default: res.data.results,
                currentEmployees: res.data.results
            })
        })
    }
    render() {
        return (<>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        {/* add reset button */}
                        <th>ID: <button>S</button></th>
                        {/* onClick={this.sort('id')} */}
                        <th>Username:</th>
                        <th>Name: (Last, First) <button>S</button></th>
                        {/* onClick={this.sort('lastName')} */}
                        <th>Status: <button>F</button></th>
                        {/* onClick={this.filter('status')} */}
                        <th>Department: <button>F</button></th>
                        {/* onClick={this.filter('dep')} */}
                        <th>Location: <button>F</button></th>
                        {/* onClick={this.filter('location')} */}
                        <th>Phone:</th>
                        <th>Email:</th>
                        <th>Age: <button>S</button></th>
                        {/* onClick={this.sort('age')} */}
                    </tr>
                </thead>
                <tbody>
                    {this.populateRows()}
                </tbody>
            </Table>
        </>)
    }
}

export default Directory