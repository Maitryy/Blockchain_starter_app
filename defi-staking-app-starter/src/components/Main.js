import React, {Component} from 'react'
import tether from '../tether.png' 

class Main extends Component{
render(){
    console.log(this.props.tetherBalance)
  return (
    
    <div id='content' className='mt-3'>
        
        <table className='table text-muted text-center'>
            <thead>
                 <tr style={{color:'white'}}>
                     <th scope='col'> Staking Balance</th>
                     <th scope='col'>Reward Balance</th>
                 </tr>
            </thead>
            <tbody>
                <tr style={{color:'white'}}>
                    <td> {window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} USDT </td>
                    <td>{window.web3.utils.fromWei(this.props.rwdBalance, 'Ether')} RWD</td>
                </tr>
            </tbody>
        </table>
        <div className="card mb-2" style={{opacity: '0.9'}}>
            <form onSubmit={(e) => {
                e.preventDefault()
                let amount
                amount = this.input.value.toString()
                amount = window.web3.utils.toWei(amount, 'Ether')
                this.props.stakeTokens(amount) 
            }} className='mb-3'>
                <div style={{borderSpacing: '0 1em'}}>
                    <label htmlFor="" className='float-left' style={{marginLeft: '15px'}}>
                        <b>Stake Tokens</b> 
                    </label>
                    <span  className='float-right' style={{marginRight: '8px'}}>
                        Balance: {window.web3.utils.fromWei(this.props.tetherBalance, 'Ether')}
                    </span>
                    <div className="input-group mb-4">
                        <input type="text" 
                        placeholder='0'
                        ref={(input)=>this.input = input}
                        required />
                        <div className='input-group-open'>
                            <div className='input-group-text'>
                            <img src={tether} alt='tether' height='35' />
                            &nbsp;  USDT
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-warning btn-lg btn-block'>DEPOSIT</button>
                    
                </div>
            </form> 
            <button type='submit' onClick={(e)=> {
                e.preventDefault();
                this.props.unstakeTokens();
            }} className='btn btn-danger btn-lg btn-block'>UNSTAKE</button>
            <div className='card-body text-center' style={{color: 'blue'}}> AIRDROP</div>
        </div>
    </div>
  )}
}

export default Main