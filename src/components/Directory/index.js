import React, { Component } from 'react';
import API from "../../utils/API";
import Table from 'react-bootstrap/Table';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    alphebetizeStrings = (a, b) => {
        // remove forign characters
        if(a.includes("@")){
            a = a.replace(/"."/g, '');
            a = a.replace("@examplecom", '');
            b = b.replace(/"."/g, '');
            b = b.replace("@examplecom", '');
        }
        const maxLength = a.length > b.length ? b.length : a.length;
        for (let i = 0; i < maxLength;){
            let x = a.charCodeAt(i);
            let y = b.charCodeAt(i);
            // Test if character is number (such as in email or username)
            // let x = Number.isInteger(parseInt(a.charCodeAt(i))) ? a[i] : a.charCodeAt(i);
            // let y = Number.isInteger(parseInt(b.charCodeAt(i)) ? b[i] : b.charCodeAt(i);
            if (x === y){
                i++
            } else {
                return x - y
            }
        }
    }
    sortArray = (col1, col2) => {
        let data = this.state.currentEmployees;
        let sortedData;
        if(col2 && data){ 
            sortedData = Number.isInteger(data[0][col1][col2]) ? data.sort((obj1, obj2) => (obj1[col1][col2] - obj2[col1][col2])) : data.sort((a, b) => this.alphebetizeStrings(a[col1][col2], b[col1][col2]))
        } else if (data) {
            sortedData = Number.isInteger(data[0][col1]) ? data.sort((obj1, obj2) => (obj1[col1] - obj2[col1])) : data.sort((a, b) => this.alphebetizeStrings(a[col1], b[col1]))

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
        let  data = this.state.currentEmployees;
        let areaCode =  parseInt(comp.substring(1, 5));
        let filteredData = Number.isInteger(areaCode) ? data.filter(e => parseInt(e.phone.substring(1, 5)) === areaCode) : data.filter(e => e[col1][col2] === comp);         
        if (filteredData.length > 0){
            this.setState({currentEmployees: filteredData, filterSpecs: [], filterOptions: []})
        }
    };
    filterOptions = (col1, col2) => {
        let options = [];
        let push = false;
        let indexCounter = 0;
        if (col2 === 5){
            this.state.currentEmployees.forEach(em => {
                const areaCode = `(${em.phone[1]}${em.phone[2]}${em.phone[3]})`;
                let arLength = this.state.currentEmployees.length;
                if(!options.includes(areaCode)){
                    options.push(areaCode)
                }
                indexCounter++;
                if (indexCounter === arLength){
                    push = true
                }
            })
        } else {
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
        }
        if (push) {
            this.setState({filterOptions: options, filterSpecs: [col1, col2], filtersVisible: true})
        }
    };
    opFiltersDiv = () => {
        let opList = [<Button className="btn" key="reset" color="info" onClick={() => this.reset()}>Reset</Button>];
        this.state.filterOptions.forEach(li => {
            opList.push(
                <Button className="btn" key={li} onClick={() => this.filter(li)}>{li}</Button>
            )
        })
        if (this.state.filterOptions.length === opList.length - 1){
            return this.state.filtersVisible ? opList : ''
        }
    }
    opDisplayRenderings = (type, c1, c2) => {
        return (<div>
                <Button className="btn btnHd" id={`${type}Display`} onClick={() => this.filterOptions(c1, c2)} type="button">{type}: <FontAwesomeIcon icon="filter" /></Button>
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
                        <th><Button className="btn btnHd" onClick={() => this.sortArray('index')}>ID: <FontAwesomeIcon icon="sort-numeric-down" /></Button></th>
                        <th><Button className="btn btnHd" onClick={() => this.sortArray('login', 'username')}>Username: <FontAwesomeIcon icon="sort-alpha-down" /></Button></th>
                        <th><Button className="btn btnHd" onClick={() => this.sortArray('name', 'last')}>Name: <FontAwesomeIcon icon="sort-alpha-down" /><i id="name-ital"> (Last, First)</i></Button></th>
                        <th>{this.opDisplayRenderings('Status', 'stats', 'status')}</th>
                        <th>{this.opDisplayRenderings('Department', 'stats', 'department')}</th>
                        <th>{this.opDisplayRenderings('Location', 'location', 'city')}</th>
                        <th>{this.opDisplayRenderings('Phone', 'phone', 5)}</th>
                        <th><Button className="btn btnHd" onClick={() => this.sortArray('email')}>Email: <FontAwesomeIcon icon="sort-alpha-down" /></Button></th>
                        <th><Button className="btn btnHd" onClick={() => this.sortArray('dob', 'age')}>Age: <FontAwesomeIcon icon="sort-numeric-down" /></Button></th>
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