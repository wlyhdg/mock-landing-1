import React, {Component} from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import '../index.css';
import NavItem from './NavItem'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedAnchor: null
        }
        this.aItemWasClicked = this.aItemWasClicked.bind(this);
    }

    aItemWasClicked(e) {
        this.setState({
            clickedAnchor: e.target.getAttribute('href')
        })
    }

    render() {
        let headers = ['Home', 'News', 'Contact', 'About']
        return(
            <div className="topnav">
                {headers.map((header, idx) => {
                    return <NavItem onClick={this.aItemWasClicked}
                    name={header} 
                    key={'navitem-key-' + header} 
                    clickedOne= {this.state.clickedAnchor}
                    />
                })}
            </div> 
        );
    }
};

ReactDOM.render(<Navbar />, document.getElementById('navbar'))

export default Navbar;