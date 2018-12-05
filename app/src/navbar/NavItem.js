import React, {Component} from 'react';
import '../index.css';

class NavItem extends Component {
    constructor(props) {
        super(props);
    
    }
    
    render() {
        const {name} = this.props;
        return(
            <a href={'#navbar-' + name.toLowerCase()} >{name}</a> 
        );
    }
};

export default NavItem;