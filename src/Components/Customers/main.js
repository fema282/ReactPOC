import React, {Component} from "react";
//
class Main extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            allCustomers:   []
        }
    }

    componentDidMount(){
        fetch("http://localhost:3030/customers")
        .then(data => {
          return data.json();
        })
        .then(resolvedData=>{
            this.setState({allCustomers:resolvedData});                
        });
      }
    

    render(){
        return(        
                <main>
                    <h2>Customers</h2>
                    <ul>
                    {this.state.allCustomers.map(
                        customer => (
                            <li key={customer.id}>
                              <b>Name:</b>  {customer.name}&nbsp;{customer.lastname}   -   <b>User:</b> {customer.username}   
                            </li>
                        )
                    )}
                    </ul>
                </main>      
        )
    }
}



export default Main;