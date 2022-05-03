import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../services/withRouter';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.params.id,
            firstName: "",
            lastName: "",
            emailAddress: ""
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailAddressHandler = this.changeEmailAddressHandler.bind(this);
        this.addorUpdateEmployee = this.addorUpdateEmployee.bind(this);
    }
    componentDidMount() {
        // eslint-disable-next-line
        if(this.state.id == -1) {
            return
        }
        else{
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({firstName: employee.firstName, lastName: employee.lastName, emailAddress: employee.emailAddress});
        })
        }
    }
    changeFirstNameHandler(event) {
        this.setState({firstName: event.target.value})
    }
    changeLastNameHandler(event) {
        this.setState({lastName: event.target.value})
    }
    changeEmailAddressHandler(event) {
        this.setState({emailAddress: event.target.value})
    }
    addorUpdateEmployee(entry){
        entry.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailAddress: this.state.emailAddress};
        // eslint-disable-next-line
        if(this.state.id == -1) {
        EmployeeService.addEmployee(employee).then(res => {
            this.routeToHome();
        });
        }
        else {
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
            this.routeToHome();
            });
        }
    }
    routeToHome() {
        this.props.navigate("/");
    }
    displayTitle() {
        // eslint-disable-next-line
        if(this.state.id == -1) {
            return <h2 className='text-center'>Add New Employee</h2>
        }
        else {
            return <h2 className='text-center'>Update Employee</h2>
        }
    }
    displayButtonName() {
        // eslint-disable-next-line
        if(this.state.id == -1) {
            return "Add"
        }
        else {
            return "Update"
        }
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            {this.displayTitle()}
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Enter The First Name:</label>
                                        <input placeholder='First Name' name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <br></br>
                                    <div className='form-group'>
                                        <label>Enter The Last Name:</label>
                                        <input placeholder='Last Name' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <br></br>
                                    <div className='form-group'>
                                        <label>Enter The Email Address:</label>
                                        <input placeholder='Email Address' name='emailAddress' className='form-control' value={this.state.emailAddress} onChange={this.changeEmailAddressHandler}/>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <div className='text-center'>
                                    <button className='btn btn-success' onClick={this.addorUpdateEmployee}>{this.displayButtonName()}</button>
                                    <button className='btn btn-danger' onClick={this.routeToHome.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateEmployeeComponent);