import React, { Component } from 'react';
import API from "../../utils/API";
import { Button, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Directory extends Component {
    state = {
        default: [],
        currentEmployees: [],
        filterOptions: [],
        filterSpecs: [],
        filtersVisible: false
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
        let sortedData;
        if(col2 && data){// && Number.isInteger(data[0][col1][col2])
            sortedData = data.sort(function(obj1, obj2) {
                let num = Number.isInteger(data[0][col1][col2])? obj1[col1][col2] - obj2[col1][col2] : obj1[col1][col2].charCodeAt(0) - obj2[col1][col2].charCodeAt(0)
                return num;
            })            
        } else if (data) {
            sortedData = data.sort(function(obj1, obj2) {
                return (
                    obj1[col1] - obj2[col1]
                );
            })
        };
        if (sortedData.length > 0) {
            this.setState({currentEmployees: sortedData});
        }
    };
    filter = comp => {
        let col1;
        let col2;
        if (this.state.filterSpecs){
            col1 = this.state.filterSpecs[0];
            col2 = this.state.filterSpecs[1];
        }
        let data = this.state.currentEmployees;
        let filteredData;
        filteredData = data.filter(e => e[col1][col2] === comp)          
        if (filteredData.length > 0){
            this.setState({currentEmployees: filteredData, filterSpecs: [], filterOptions: []})
        }
    };
    filterOptions = (col1, col2) => {
        let options = [];
        let push = false;
        let indexCounter = 0
        this.state.currentEmployees.forEach(em => {
            let arLength = this.state.currentEmployees.length;
            if(!options.includes(em[col1][col2])){
                options.push(em[col1][col2])
            }
            indexCounter++;
            if (indexCounter === arLength){
                push = true
            }
        })
        if (push) {
            this.setState({filterOptions: options, filterSpecs: [col1, col2], filtersVisible: true})
        }
    };
    opFiltersDiv = () => {
        let opList = [<Button onClick={() => this.reset()}>Reset</Button>];
        this.state.filterOptions.forEach(li => {
            opList.push(
                <Button key={li} onClick={() => this.filter(li)}>{li}</Button>
            )
        })
        if (this.state.filterOptions.length === opList.length - 1){
            return this.state.filtersVisible ? opList : ''
        }
    }
    opDisplayRenderings = (type, c1, c2) => {
        return (<div>
                <Button id={`${type}Display`} onClick={() => this.filterOptions(c1, c2)} type="button">F</Button>
            </div>)
    };
    reset() {
        this.setState({ currentEmployees: this.state.default, filterOptions: [], filterSpecs: [], filtersVisible: false })
    };
    componentDidMount() {
        API.mergeDatabase().then(res => {
            const arrayData = res.data.results;
            let push = false
            for(let i = 0; i < arrayData.length; i++){
                arrayData[i].index = i
                arrayData[i].stats = this.statusAndDepartment();
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
            <div>{this.opFiltersDiv()}</div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID: <Button onClick={() => this.sort('index')}>S</Button></th>
                        <th>Username:</th>
                        <th>Name: (Last, First) <Button onClick={() => this.sort('name', 'last')} >S</Button> </th>
                        <th>Status: {this.opDisplayRenderings('Status', 'stats', 'status')}</th>
                        <th>Department: {this.opDisplayRenderings('Dept', 'stats', 'department')}</th>
                        <th>Location: {this.opDisplayRenderings('Loc', 'location', 'city')}</th>
                        <th>Phone:</th>
                        <th>Email:</th>
                        <th>Age: <Button onClick={() => this.sort('dob', 'age')}>S</Button> </th>
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