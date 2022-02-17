 import React, {Component} from 'react'
 import './App.css'
 import Navbar from './Navbar.js';
 import Web3 from 'web3';
 import Tether from '../truffle_abis/Tether.json'
 import RWD from '../truffle_abis/RWD.json'
 import DecentralBank from '../truffle_abis/DecentralBank.json'
 import Main from './Main.js';
 
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
         this.setState({account: account[0]})
         console.log(account, 'current account')
         const networkId = await web3.eth.net.getId()
         console.log(networkId, 'Network ID');
         
        //bring/load tether contract
        const tetherData = Tether.networks[networkId]
        if(tetherData)
        {
            const tether = new web3.eth.Contract(Tether.abi, tetherData.address)
            this.setState({tether})
            let tetherBalance = await tether.methods.balanceOf(this.state.account).call()
            this.setState({tetherBalance: tetherBalance.toString()})
            console.log({balance: tetherBalance}, 'tether balance')
        }
        else
        {
            window.alert('Error! Tether contract not deployed - no detected network!')
        }

        //bring/load rwd contract
        const rwdData = RWD.networks[networkId]
        if(rwdData)
        {
            const rwd = new web3.eth.Contract(RWD.abi, rwdData.address)
            this.setState({rwd})
            let rwdBalance = await rwd.methods.balanceOf(this.state.account).call()
            this.setState({rwdBalance: rwdBalance.toString()})
            console.log({balance: rwdBalance}, 'reward Balance')
        }
        else
        {
            window.alert('Error! RWD contract not deployed - no detected network!')
        }

        //bring/load DecentralBank contract
        const decentralBankData = DecentralBank.networks[networkId]
        if(decentralBankData)
        {
            const decentralBank = new web3.eth.Contract(DecentralBank.abi, decentralBankData.address)
            this.setState({decentralBank})
            let stakingBalance = await decentralBank.methods.stakingBalance(this.state.account).call()
            this.setState({stakingBalance: stakingBalance.toString()})
            console.log({balance: stakingBalance}, 'staking Balance')
        }
        else
        {
            window.alert('Error! DecentralBank contract not deployed - no detected network!')
        }

        this.setState({loading: false})

     }

     constructor(props) {
         super(props)
         this.state = {
             account: '0x0',
             tether: {},
             rwd: {},
             decentralBank: {},
             tethterBalance: '0',
             rwdBAlance: '0',
             stakingBalance: '0',
             loading: true
         }
     }
     render(){
        return (
            <div>
            <Navbar account={this.state.account}/>
            {/* <h1>{console.log(this.state.loading)}</h1> */}
             <div className='container-fluid mt-5'>
                <div className='row'>
                    <main role='main' className='col-lg-12 ml-auto mr-auto' style={{maxWidth: '600px', minHeight: '100vm'}}>
                        <div>
                            <Main/>
                        </div>
                    </main>
                </div>
             </div>
            </div> 
        )
     }
 }

 export default App;