import React, { Component } from 'react';
import Title from "./components/Title"
import Employee from "./components/Employees";
import Form from "./components/Form"
import './App.css';
import orderBy from 'lodash/orderBy';
import employees from './employees.json';
import Wrapper from './components/Wrapper';

class App extends Component {
  state = {
    employees,
    sortedEmployees: employees,
    ascending: true
  };

  //use lodash to create function to sort by name
  sortName = () => {
    const { sortedEmployees, ascending } = this.state
    console.log(sortedEmployees);
    console.log(ascending);
    const direction = ascending ? 'asc' : 'desc'
    const sorted = orderBy(sortedEmployees, 'name', direction);
    console.log(sorted)
    this.setState({ sortedEmployees: sorted, ascending: !ascending })

    console.log("clicked name to sort")
  }


  render() {
    return (
      <Wrapper>
        <div className="container">
        <Title>Employee Directory</Title>

        
          <Form />
          <table className="table" id="table">
            <thead>
              <tr className="header">
                <th scope="col" onClick={this.sortName}>Name</th>
                <th scope="col">Department</th>
                <th scope="col" >Phone Number</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            {this.state.sortedEmployees.map(employee => {
              return (
                <Employee
                  id={employee.id}
                  key={employee.id}
                  name={employee.name}
                  department={employee.department}
                  phone={employee.phone}
                  email={employee.email}
                />
              )
            })}
          </table>
        </div>
      </Wrapper>
    );
  }
}

export default App;
