import React, {Component} from 'react';
import '../index.css';

class NavItem extends Component {
    constructor(props) {
        super(props);
    }

    // aItemWasClicked(event) {
    //     this.setState({
    //         isActive: !this.state.isActive
    //     })
        // if (event.target.className == null || !event.target.className.includes('active')) {
        //     event.target.className += ' active';
        // }
        // else {
        //     let classList = event.target.className.split(" ")
        //     let desIndex = classList.indexOf('active');
        //     if (desIndex > -1) {
        //         classList.splice(desIndex, 1)
        //     }
        //     event.target.className = classList.join(' ');
        // }
    // }

    render() {
        var aStyle = { background: 'rgb(5, 41, 65)'}
        const {name} = this.props;
        const hrefTag = '#navbar-' + name.toLowerCase()
        if (hrefTag == this.props.clickedOne) {
            aStyle['background'] = '#61dafb'
        }
        return(
            <a onClick={this.props.onClick} href={'#navbar-' + name.toLowerCase()} style={aStyle}>{name}</a> 
        );
    }
};

export default NavItem;