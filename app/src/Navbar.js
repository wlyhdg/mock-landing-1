import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        }
    }

    render() {
        return(
            <div className="appnav">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li style={{float:'right'}}>Help</li>
                </ul>
            </div>
        )
    }
}

render(<Navbar />, document.getElementById('navbar'))

export default Navbar;