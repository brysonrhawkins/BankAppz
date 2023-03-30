import React from 'react';
import './Header.css';


function Header(){
    return(
        <div className="Header">
            <h1 className="Logo">Bank App</h1>
                <nav className="Links">
                    <a  className="LinkOne" href='/Home'>Home </a>
                    <a className="LinkTwo" href='/Display'>See All </a>
                    <a className="LinkThree" href='/Deposit'>Create Deposit </a>
                    <a className="LinkThree" href='/Search'>Search Deposit </a>
                    <a className="LinkThree" href='/Projections'>Financial Projections </a>
                </nav>
            
        </div>
    )
}

export default Header;