import React, {Component} from 'react';
import './App.css';
import employees from '../data/employees.json';
import Homepage from '../containers/Homepage';
import EmployeesPage from '../containers/EmployeePage';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      employees,
      show: employees,
      selectedEmployee: null,
      searchKey: ""
    };
  }

  searchHandle = (event) =>{
    event.persist();
    let newSearchKey = event.target.value;
    
    console.log(newSearchKey);
    const employeeSelected = this.state.employees.filter(function (e) {
    return e.name.toLowerCase().includes(newSearchKey.toLowerCase());
    })
   
      this.setState({show: employeeSelected});
   
  }

  showDetails = (id) =>{
    const index = this.state.employees.findIndex(p => {
      return p.id === id;
    });
    const employeeToBeChanged = {...this.state.employees[index]};
    this.setState({selectedEmployee: employeeToBeChanged});
  }

  
  render() {
    return (
      
        <Container className="mt-6">
          <Row>
            <Col lg="5">
            <Homepage 
            employeeList={this.state.show} 
            searchHandle={this.searchHandle}
            showDetails={this.showDetails}
            />
            </Col>
            <Col lg="6">
            <EmployeesPage
            employeeSelected = {this.state.selectedEmployee}
            />
            </Col>
          </Row>
        </Container>
 
    )
  }
}

export default App;
