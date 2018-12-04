import React, {Component} from 'react';
import {render} from 'react-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null
        };
    }

    render() {
        return(
            <div>
                <p>Welcome to mock-landing-1</p>
            </div>
        )
    }
}

render(<Navbar />, document.getElementById('mock-1'));

export default Navbar