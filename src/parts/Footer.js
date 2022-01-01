import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return( 
            <div className="footer">
                <div className="container">

                    {/* <div className="row">
                        <div className="col">
                            <div class=" widget_text">
                                <table border="0" width="100%" cellspacing="1" cellpadding="1">
                                    <tbody>
                                        <tr>
                                            <td valign="top">Adres</td>
                                            <td valign="top">:</td>
                                            <td valign="top">Öveçler Huzur Mah. 1139. Sok. Çınar Apt.No: 6/3 06460 Çankaya, Ankara / TÜRKİYE</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Tel.</td>
                                            <td valign="top" width="3">:</td>
                                            <td valign="top">0 312 472 38 39</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Faks</td>
                                            <td valign="top">:</td>
                                            <td valign="top">0 312 472 39 33</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" width="100">e-posta</td>
                                            <td valign="top">:</td>
                                            <td valign="top"><a href="mailto:cinar@cinarmuhendislik.com">cinar@cinarmuhendislik.com</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>               
                        <div className="col">
                        </div>                                   
                    </div> */}

                    <div className="row">
                        <div className="col" style={{textAlign:"center"}}>
                            &copy; 2022 Çınar Yazılım A.Ş. 
                        </div>                                   
                    </div>                                 
                </div>
            </div>
        );
    }
}

export default Footer;
