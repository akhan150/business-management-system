import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../services/withRouter';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.redirectToAddEmployee = this.redirectToAddEmployee.bind(this);
        this.redirectToUpdateEmployee = this.redirectToUpdateEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.redirectToViewEmployee = this.redirectToViewEmployee.bind(this);
    }
    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }
    redirectToAddEmployee() {
        this.props.navigate("/add-employee/-1");
    }
    redirectToUpdateEmployee(id) {
        this.props.navigate(`/add-employee/${id}`);
    }
    deleteEmployee(id, employee) {
        let confirmation = window.confirm("Are you sure you want to delete " + employee.firstName + " " + employee.lastName)
        if(confirmation === false) {
            return
        }
        else{
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)})
        });
        }
    }
    redirectToViewEmployee(id) {
        this.props.navigate(`/view-employee/${id}`);
    }
    // handleSearch(event) {
    //     const name = event.target.value
    // }
    render() {
        return (
            <div>
                <h1 className='text-center'>Employee List</h1>
                <div className='button search'>
                    <button className='btn btn-success' onClick={this.redirectToAddEmployee}>Add Employee</button>
                    {/* <label>&nbsp;&nbsp;&nbsp;Search:
                    <select value="option">
                        <option></option>
                        <option value="name">Name</option>
                        <option value="id">ID</option>
                    </select> */}
                {/* <input type="text" value={this.props.searchParams.get('name' || 'id')}/> */}
                {/* </label> */}
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                {/* <th>Employee ID</th> */}
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Address</th>
                                <th style={{"width": "252.40px"}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => <tr key={employee.id}>
                                        {/* <td>{employee.id}</td> */}
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailAddress}</td>
                                        <td>
                                        <button className='btn btn-secondary' onClick={() => this.redirectToViewEmployee(employee.id)}> View </button>
                                            &nbsp;&nbsp;&nbsp;
                                            <button className='btn btn-primary' onClick={() => this.redirectToUpdateEmployee(employee.id)}> Update </button>
                                            &nbsp;&nbsp;&nbsp;
                                            <button className='btn btn-danger' onClick={() => this.deleteEmployee(employee.id, employee)}> Delete </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(ListEmployeeComponent);
