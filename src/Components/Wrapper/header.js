import React, {Component} from "react";
//import { Link  } from 'react-router-dom';
import logo from '../../Sources/images/chart.jpg';
import { withRouter } from "react-router";

class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {validUser: localStorage.getItem('validuser')};
        this.logOut = this.logOut.bind(this);
    }
    logOut(){
        localStorage.removeItem('validuser');
        this.setState((state) => ({ validUser: null })); 
        this.props.history.push('/home');  
    }

    render(){
        return(
            <header>
                <img src={logo} id="logo" alt="logo" />
                <h1 style={{color:'White'}}>Welcome to Summoner Rift!</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/register">Register</a></li>
                        <li><a href="/customers">Customers</a></li>     
                        { ! this.state.validUser ? 
                        <li><a href="/login">Login</a></li> :
                        <>
                            <li className="moveRight" onClick={this.logOut}><a href="/logout"> Log Out </a></li>
                            <li className="moveRight"><a href="/profile">Welcome {this.state.validUser} !</a></li>                            
                        </>
                        }            
             
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header);