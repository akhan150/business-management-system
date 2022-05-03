import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../services/withRouter';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.params.id,
            firstName: "",
            lastName: "",
            emailAddress: ""
        }
    }
    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({firstName: employee.firstName, lastName: employee.lastName, emailAddress: employee.emailAddress});
        })
    }
    routeToHome() {
        this.props.navigate("/");
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h2 className='text-center'>View Employee</h2>
                            <div className='card-body'>
                                <form>
                                <div className='form-group'>
                                        <label>Employee ID:</label>
                                        <input placeholder='Employee ID' name='id' className='form-control' value={this.state.id} readOnly={true} />
                                    </div>
                                    <br></br>
                                    <div className='form-group'>
                                        <label>First Name:</label>
                                        <input placeholder='First Name' name='firstName' className='form-control' value={this.state.firstName} readOnly={true} />
                                    </div>
                                    <br></br>
                                    <div className='form-group'>
                                        <label>Last Name:</label>
                                        <input placeholder='Last Name' name='lastName' className='form-control' value={this.state.lastName} readOnly={true} />
                                    </div>
                                    <br></br>
                                    <div className='form-group'>
                                        <label>Email Address:</label>
                                        <input placeholder='Email Address' name='emailAddress' className='form-control' value={this.state.emailAddress} readOnly={true} />
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <div className='text-center'>
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
export default withRouter(ViewEmployeeComponent);