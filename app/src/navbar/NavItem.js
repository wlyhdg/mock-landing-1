import React, {Component} from 'react';
import '../index.css';

class NavItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var aStyle = { background: 'rgb(5, 41, 65)'}    // black default background for navbar
        const {name} = this.props;
        const hrefTag = '#navbar-' + name.toLowerCase()
        if (hrefTag == this.props.clickedOne) {
            aStyle['background'] = '#61dafb'            // blue background solely for clicked navbar item
        }
        return(
            <a onClick={this.props.onClick} href={'#navbar-' + name.toLowerCase()} style={aStyle}>{name}</a> 
        );
    }
};

export default NavItem;