import React, {Component} from "react";
import { withRouter } from "react-router";

class Main extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.state = {
            username: "",
            password: ""            
        }
    }

    handleFieldChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });        
    }

    handleSubmit(event){
        event.preventDefault();

        fetch(
            `http://localhost:3030/customers?username=${encodeURIComponent(this.state.username)}`,
            {
              method: 'GET',
              headers: {           
                'Accept': 'application/json',
                'Content-Type': 'application/json'  
              }
            }
        )      
        .then(response => response.json())
        .then(data =>{
            if(data[0].password === this.state.password){
                localStorage.setItem('validuser', this.state.username);
                console.log("Login Success");
                this.props.history.push("/"); 
              } else {
                console.log("Invalid login");
              }
        
        })      
        .catch(err => console.log("Something went wrong" + err.message));
       
    }

    render(){
        return(        
                <main>
                <h2>Sing In</h2>
                    <form>
                        <div>
                            <label>
                            Username:
                                <input type="text" name="username" onChange={this.handleFieldChange} />
                            </label>
                        </div>                       
                        <div>
                            <label>
                            Password:
                                <input type="text" name="password" onChange={this.handleFieldChange} />
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="Submit" onClick={this.handleSubmit} />
                        </div>
                    </form>
                </main>      
        )
    }
}

export default withRouter(Main);