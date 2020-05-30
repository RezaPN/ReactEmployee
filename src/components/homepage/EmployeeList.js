import React from 'react';
import Employee from './employeelist/Employee';
import Card from 'react-bootstrap/Card'

export default function EmployeeList(props) {

    let items = props.employees.map(function (employee) {
        return  (
            <Employee 
            showDetails={props.showDetails} 
            id={employee.id} 
            employee={employee}/>
        );
    });

    return(

        <Card style = {{maxWidth:'100%', border:'0px'}}>
            <Card.Body>
            {items}
            </Card.Body>
        </Card>
    );
}

