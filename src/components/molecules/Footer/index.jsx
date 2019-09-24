//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBFooter,
    MDBRow,
    MDBCol,
    MDBContainer,
} from 'mdbreact';

//> Images
// Marstime Logo
import Logo from '../../../assets/logo-h50.png';

class Footer extends React.Component{
    render(){
        return(
            <MDBFooter color="agency-dark" className="font-small pt-4 mt-4">
                <MDBContainer className="text-center text-md-left">
                    <MDBRow>
                    <MDBCol md="6">
                        <img src={Logo} className="img-fluid" />
                        <p className="mt-2 font-weight-bold">
                        Built for future explorers and inhabitants
                        </p>
                    </MDBCol>
                    <MDBCol md="3">
                        <h5 className="title">Links</h5>
                        <ul>
                        <li className="list-unstyled">
                            <a href="#!">Link 1</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 2</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 3</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 4</a>
                        </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="3">
                        <h5 className="title">Links</h5>
                        <ul>
                        <li className="list-unstyled">
                            <a href="#!">Link 1</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 2</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 3</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 4</a>
                        </li>
                        </ul>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: 
                        <a 
                        href="https://www.aichner-christian.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        > Werbeagentur Christian Aichner
                        </a>
                        <p className="my-2 font-weight-bold gidole">
                            Made with <i className="fas fa-heart pulse red-text" aria-hidden="true"></i> by us.
                        </p>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
