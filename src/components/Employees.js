import React from 'react';

// Generate ___ employees
let state = {
    fistName: '',
    lastName: '',
    birthday: '',
    hireDate: '',
    payRate: '',
    status: '',
    gender: '',
    email: '',
    phone: '',
    department: '',
    location: ''
}
// return:::::
{/* <tr>
    <td>1</td>
</tr>
<tr>
    <td>2</td>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
</tr>
<tr>
    <td>3</td>
    <td colSpan="2">Larry the Bird</td>
    <td>@twitter</td>
</tr> */}

class Employee extends Component {
    // state = {
    //   search: "",
    //   breeds: [],
    //   results: [],
    //   error: ""
    // };

    // // When the component mounts, get a list of all available base breeds and update this.state.breeds
    // componentDidMount() {
    //   API.getBaseBreedsList()
    //     .then(res => this.setState({ breeds: res.data.message }))
    //     .catch(err => console.log(err));
    // }

    // handleInputChange = event => {
    //   this.setState({ search: event.target.value });
    // };

    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   API.getDogsOfBreed(this.state.search)
    //     .then(res => {
    //       if (res.data.status === "error") {
    //         throw new Error(res.data.message);
    //       }
    //       this.setState({ results: res.data.message, error: "" });
    //     })
    //     .catch(err => this.setState({ error: err.message }));
    // };
    render() {
        return (
<>
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
            </>
      );
    }
}

export default Employee