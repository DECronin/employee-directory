import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
const defaultArray = [0, 1, 2, 3, 4];
// import API from "../../utils/API"

class Directory extends Component {
    state = {
        employees: defaultArray
    };
    populateRows = () => {
        let newArray = [];
        this.state.employees.forEach(i =>{
            newArray.push(<tr>
                {/* id */}
                <td>{i}</td>
                {/* username */}
                <td>{i}</td>
                {/* name (last, first) */}
                <td>{i}</td>
                {/* status */}
                <td>{i}</td>
                {/* dep */}
                <td>{i}</td>
                {/* location */}
                <td>{i}</td>
                {/* phone */}
                <td>{i}</td>
                {/* email */}
                <td>{i}</td>
                {/* age */}
                <td>{i}</td>
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
    reset(){
        this.setState({employees: defaultArray})
    };
    render(){
        // this.populateRows();
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