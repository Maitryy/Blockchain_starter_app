 import React, {Component} from 'react'
 import './App.css'
 import Navbar from './Navbar.js';
 import Web3 from 'web3';

 class App extends Component {
     // this will run first
     async UNSAFE_componentWillMount() {
         await this.loadWeb3();
         await this.loadBlockchainData();
     }
     //connect webapp to web3
     async loadWeb3() {
         // if we detect ethereum then enable it
         if(window.ethereum) 
         {
             window.web3 =new Web3(window.ethereum);
             await window.ethereum.enable()
         } //
         else if(window.web3)
         {
            window.web3 =new Web3(window.web3.currentProvider);
         } 
         else
         {
            window.alert('No etherem browser detected! check Metamask ')
         }
     }
     // to load blockchain data
     async loadBlockchainData() {
         const web3 = window.web3;
         const account = await web3.eth.getAccounts();
         console.log(account);
     }

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