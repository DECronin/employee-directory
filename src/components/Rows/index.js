import React from "react";
// import API from "../../utils/API"

function Rows() {
    let maxEmployees = 10;
    let employeeArray = [];
    for(let i = 0; i < maxEmployees; i++){
        employeeArray.push(<tr>
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
    }
  return (<>
    {employeeArray}
  </>)
}

export default Rows;