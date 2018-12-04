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
            <div className="appnav text-center">
                This is a placeholder for the Navbar.
            </div>
        )
    }
}

render(<Navbar />, document.getElementById('navbar'))

export default Navbar;