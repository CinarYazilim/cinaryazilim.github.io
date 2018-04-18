import React, { Component } from 'react';
import Splash from '../core/Splash.js';
import Block from '../core/Block.js';
import SimpleBlock from '../core/SimpleBlock';

export default class Contact extends Component {
    
    render() {

        return (

            <div className="contact" key="iletisim" id="iletisim">
                <div className="container">
                    <div className="row">
                        <div className="col" style={{textAlign:"right", marginTop: 15}}>
                            
                            <table style={{textAlign:"right"}}>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div style={{fontSize:30, textAlign:"left", marginBottom:20}}>
                                                İletişim
                                            </div>
                                        </td>                                        
                                    </tr>
                                    <tr>
                                        <td style={{verticalAlign:"top"}}>
                                            <b>Adres : </b>
                                        </td>
                                        <td style={{width:15}}/>
                                        <td style={{textAlign:"left"}}>
                                            Öveçler Huzur Mah. 1139. Sok.<br/> 
                                            Çınar Apt.No: 6/3 06460<br/>
                                            Çankaya, Ankara / TÜRKİYE
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Tel : </b>
                                        </td>
                                        <td style={{width:15}}/>
                                        <td style={{textAlign:"left"}}>
                                            0 312 472 77 97
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Faks : </b>
                                        </td>
                                        <td style={{width:15}}/>
                                        <td style={{textAlign:"left"}}>
                                            0 312 472 54 53
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>e-posta : </b>
                                        </td>
                                        <td style={{width:15}}/>
                                        <td style={{textAlign:"left"}}>
                                            <a href="mailto:info@cinaryazilim.com.tr">info@cinaryazilim.com.tr</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col" style={{minWidth:300}}>
                            <div id="map"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}