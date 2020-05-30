import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends Component {
    render(){

        return(
            <div className ="search">
                 <input style = {{borderTop: "0px", borderRight: "0px", borderLeft: "0px"}}
                     onChange={this.props.searchHandle}  data-test="input" type="text" class="form-control" placeholder="Search" aria-disabled="false">
                 </input>
            </div>
        );
       
    }
};

export default SearchBar;