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
        // console.log(`topPop::\n${JSON.stringify(this.state.currentEmployees[0])}`);
        let newArray = [];
        this.state.currentEmployees.forEach(em => {
            // console.log(JSON.stringify(em));
            newArray.push(<tr key={em.index}>
                {/* id */}
                <td>{em.index + 1}</td>
                {/* username */}
                <td>{em.login.username}</td>
                {/* name (last, first) */}
                <td>{em.name.last}, {em.name.first}</td>
                {/* status */}
                <td>{em.stats.status}</td>
                {/* dep */}
                <td>{em.stats.department}</td>
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
    sort = (col1, col2) => {
        let data = this.state.currentEmployees;
        console.log(`sortBy:: ~~~~ :: ${col1} + ${col2}\n\n`);
        // console.log(JSON.stringify(data))
        let sortedData;
        if(col2 && data){
            sortedData = data.sort(function(obj1, obj2) {
                return (
                    obj1[col1][col2] - obj2[col1][col2]
                );
            })
        } else if (data) {
            sortedData = data.sort(function(obj1, obj2) {
                return (
                    obj1[col1] - obj2[col1]
                );
            })
        };
        // let sorted = this.state.currentEployees.sort((a, b) => a[col1][col2] - b[col1][col2]);
        // console.log(`sorted by:: ${col1}.${col2}\n${JSON.stringify(sorted)}`)
        // this.setState({employees: sortedData})
    };
    // filter = col => {
    //     this.state.employees = this.state.employees.filter(col)
    // };
    // reset() {
    //     this.setState({ currentEmployees: this.state.default })
    // };
    componentDidMount() {
        API.mergeDatabase().then(res => {
            const arrayData = res.data.results;
            let push = false
            for(let i = 0; i < arrayData.length; i++){
                arrayData[i].index = i
                arrayData[i].stats = this.statusAndDepartment();
                // console.log(`${i}~~~${JSON.stringify(arrayData.stats)}`);
                push = i === 24 ? true : false;
            }
            if (push){
                this.setState({
                    default: arrayData,
                    currentEmployees: arrayData
                })
            }
        })
    }
    statusAndDepartment = () => {
        const statuses = ["Dept. Manager", "General Manager", "Cashier/Associate", "Floor Rep.", "Trainee"];
        const departments = ["Customer Service", "Home Goods", "Consumables", "Office", "Holiday", "Rec/Hobby", "Apparel"];
        return {
            status: statuses[Math.floor(Math.random()*statuses.length)],
            department: departments[Math.floor(Math.random()*departments.length)]
        }
    }
    render() {
        return (<>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        {/* add reset button */}
                        <th>ID: <button onClick={this.sort('index')}>S</button></th>
                        {/* onClick={this.sort('id')} */}
                        <th>Username:</th>
                        <th>Name: (Last, First)</th>
                         {/* <button onClick={this.sort('name', 'last')} >S</button> */}
                        {/**/}
                        <th>Status: <button>F</button></th>
                        {/* onClick={this.filter('status')} */}
                        <th>Department: <button>F</button></th>
                        {/* onClick={this.filter('dep')} */}
                        <th>Location: <button>F</button></th>
                        {/* onClick={this.filter('location')} */}
                        <th>Phone:</th>
                        <th>Email:</th>
                        <th>Age:</th>
                        {/* onClick={this.sort('age')} <button onClick={this.sort('dob', 'age')}>S</button> */}
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