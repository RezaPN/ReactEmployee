import React, {Component} from 'react';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

class Information extends Component {
    
    render(){
        let employeeSelected = this.props.employeeSelected;

        if(employeeSelected == null){
            return (<p>Select Employee</p>)
        }else{
            return(
            
                <ListGroup style={{border: 'none', outline:"none"}}>
                     
                     <ListGroup.Item style={{border: 'none', width: '100%', padding: '0px'}}><Image style={{width:'500px'}} src={`${employeeSelected.photo}?img=${employeeSelected.id}`} /></ListGroup.Item>
                     
                     <ListGroup.Item style={{border: 'none'}}>
                         <h2>
                             {employeeSelected.name} 
                         </h2>
                           
                         <div style = {{color:'#979696'}}>
                         {employeeSelected.position}
                         </div>
                     </ListGroup.Item>
                     <ListGroup.Item style = {{borderBottom: '0px'}}>
                         <p>
                             {employeeSelected.detail.email}
                         </p>
                     </ListGroup.Item>
                     <ListGroup.Item style = {{borderBottom: '0px'}}>
                         <p>
                             {employeeSelected.detail.phone}
                         </p>
                     </ListGroup.Item>
                     <ListGroup.Item style = {{borderBottom: '0px'}}>
                         <p>
                              {employeeSelected.detail.address}
                         </p>
                     </ListGroup.Item>
                     
                 </ListGroup>
             );
        }
        
    }
}

export default Information;