import React, {Component} from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import '../index.css';
import NavItem from './NavItem'

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let headers = ['Home', 'News', 'Contact', 'About']
        return(
            <div className="topnav">
                {headers.map((header, index) => {
                    return <NavItem name={header} key={'navitem-key-' + header}/>
                })}
            </div> 
        );
    }
};

ReactDOM.render(<Navbar />, document.getElementById('navbar'))

export default Navbar;