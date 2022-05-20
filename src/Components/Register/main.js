import React, {Component} from "react";

class Main extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.state = {
            username: "",
            name:"",
            lastname: "",
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

        fetch('http://localhost:3030/customers',{
                method: 'POST',
                headers: {  
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'  
                },  
               body: JSON.stringify({
                   username: this.state.username,
                   name: this.state.name,
                   lastname: this.state.lastname,
                   password: this.state.password
               })
        })
        .then(response => console.log("Post successful " + response))
        .catch(err => console.log("Something went wrong" + err.message));
       
    }

    render(){
        return(        
                <main>
                <h2>Register for the Competition Here</h2>
                    <form>
                        <div>
                            <label>
                            Username:
                                <input type="text" name="username" onChange={this.handleFieldChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                            Name:
                                <input type="text" name="name" onChange={this.handleFieldChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                            LastName:
                                <input type="text" name="lastname" onChange={this.handleFieldChange} />
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

export default Main;