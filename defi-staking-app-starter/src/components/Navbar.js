import React, {Component} from 'react'
import bank from '../bank.png'

class Navbar extends Component {
    render()
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <img src={bank} alt="bank img" width='50' height='30' className='d-inline-block align-top ' /> 
                <a className="navbar-brand" href="#">  
                &nbsp; Decentralized Banking
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse float-right align-right" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
                <span className="navbar-text align-right float-right">
                    Account Number: {this.props.account}
                </span>
                </div>
            </div>
            </nav>
        )
    }
}

export default Navbar;