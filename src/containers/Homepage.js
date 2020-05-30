import React, {Component} from 'react';
import Header from '../components/homepage/Header';
import SearchBar from '../components/homepage/SearchBar';
import EmployeeList from '../components/homepage/EmployeeList';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

class Homepage extends Component {
    render() {
        let employees = this.props.employeeList;

        return(
            <Card style={{alignItems:'center'}}>
            <Card.Header style={{width: '100%' , fontFamily:'Open Sans' ,backgroundColor:'white', borderBottom: '2px dashed #ccccb3'}}> <Header text="Employee List"/> </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> <SearchBar symbol={this.props.symbol} searchHandle={this.props.searchHandle}  /></ListGroup.Item>
                <ListGroup.Item><EmployeeList showDetails= {this.props.showDetails} employees = {employees} /> </ListGroup.Item>
            </ListGroup>
            </Card>
        );
    }
}

export default Homepage;