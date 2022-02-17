import React from 'react'
import tether from '../tether.png' 

function Main() {
  return (
    <div id='content' className='mt-3'>
        <table className='table text-muted text-center'>
            <thead>
                 <tr style={{color:'black'}}>
                     <th scope='col'> Staking Balance</th>
                     <th scope='col'>Reward Balance</th>
                 </tr>
            </thead>
            <tbody>
                <tr style={{color:'black'}}>
                    <td>USDT</td>
                    <td>RWD</td>
                </tr>
            </tbody>
        </table>
        <div className="card mb-2" style={{opacity: '0.9'}}>
            <form action="" className='mb-3'>
                <div style={{borderSpacing: '0 1em'}}>
                    <label htmlFor="" className='float-left' style={{marginLeft: '15px'}}>
                        <b>Stake Tokens</b> 
                    </label>
                    <span  className='float-right' style={{marginRight: '8px'}}>
                        Balance: 
                    </span>
                    <div className="input-group mb-4">
                        <input type="text" 
                        placeholder='0'
                        required />
                        <div className='input grouped-text'>
                            <img src={tether} alt='tether' height='35' />
                            &nbsp;  USDT
                        </div>
                    </div>
                    <button type='submit' className='btn btn-warning btn-lg btn-block'>DEPOSIT</button>
                    
                </div>
            </form>
            <button className='btn btn-danger btn-lg btn-block'>UNSTAKE</button>
            <div className='card-body text-center' style={{color: 'blue'}}> AIRDROP</div>
        </div>
    </div>
  )
}

export default Main