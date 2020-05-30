import React, {Component} from 'react';
import Header from '../components/employeepage/Header';
import Information from '../components/employeepage/Information';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

class EmployeePage extends Component {
    render() {

        return(
            <div>
                <Card >
                    <Card.Header style={{fontFamily:'Open Sans' ,backgroundColor: 'white', borderBottom: '2px dashed #ccccb3'}}> <Header text="Employee Detail"/> </Card.Header>
                    <ListGroup variant="flush">
                    <ListGroup.Item> <Information 
                    
                        employees = {this.props.employees}
                        employeeSelected = {this.props.employeeSelected}
                        />
                    </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        );
    }
}

export default EmployeePage;