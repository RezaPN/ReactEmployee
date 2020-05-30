import React, {Component} from 'react';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'



class Employee extends Component {
    render(){
        return(

            <Button onClick={()=> this.props.showDetails(this.props.id)} style={{border: 'none', textDecoration:"none", color:"black", backgroundColor: "white", width: "360px" }}>

            <ListGroup style={{border: 'none', outline:"none", alignItems:"center"}} horizontal={true}>
                
                <ListGroup.Item style={{border: 'none', }}><Image style={{maxWidth:'100%', alignContent:'flex-start  '}} src={`${this.props.employee.photo}?img=${this.props.employee.id}`} roundedCircle /></ListGroup.Item>
                
                <ListGroup.Item style={{border: 'none', }}>
                
                <div style={{fontWeight: "bold"}}>
                    {this.props.employee.name} 
                </div>
                {this.props.employee.position}<br/>
                
                </ListGroup.Item>

                <ListGroup.Item style={{border: 'none', }}>
                     <Image style={{maxWidth:'30%', alignContent:'flex-end  '}} src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Double_angle_right_font_awesome.svg/512px-Double_angle_right_font_awesome.svg.png' />
                </ListGroup.Item>        
            </ListGroup>

            </Button>
        );
    }
}

export default Employee;