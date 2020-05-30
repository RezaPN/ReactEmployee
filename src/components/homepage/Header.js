import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <div style={{justifyContent:'center', textAlign:'center', alignItems: 'center', alignContent: 'center'}}>
            <h2 className='title'>{this.props.text}</h2>
            </div>
        );
    }
}

export default Header;