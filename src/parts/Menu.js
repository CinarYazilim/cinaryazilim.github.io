import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light bg-controlled">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img className="brand brand-large" data-toggle="brand" src="images/CinarYazilimLogoSmallGrad.svg" alt="Çınar Yazılım A.Ş."/>
                        <span style={{paddingLeft: "15px", fontWeight: 300, fontSize:"18px", color:"#ffffff"}}>ÇINAR</span>
                        <span style={{paddingLeft: "7px", fontWeight: 300, fontSize:"12px", color:"#ffffff"}}>Yazılım A.Ş.</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">                         
                                <a className="nav-link" href="#en" ><span className="flag-icon flag-icon-gb"></span> EN</a>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>;
    }
}

export default Menu;

/*

                            <li className="nav-item"><a className="nav-link" href="#iletisim">İLETİŞİM</a></li>
                            <li className="nav-item" style={{textAlign: "center", width: "20px", color: "#aaaaaa", lineHeight: "30px"}}>
                                |
                            </li>
                            */
