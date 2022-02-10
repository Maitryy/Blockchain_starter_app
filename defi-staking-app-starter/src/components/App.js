 import React, {Component} from 'react'
 import './App.css'
 import Navbar from './Navbar.js';

 class App extends Component {
     constructor(props) {
         super(props)
         this.state = {
             account: '0x0',
         }
     }
     render(){
        return (
            <div>
            <Navbar account={this.state.account}/>
            
            </div> 
        )
     }
 }

 export default App;