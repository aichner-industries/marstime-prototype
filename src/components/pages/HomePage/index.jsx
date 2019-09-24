//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdbreact';

//> Images
// Mars drawing
//import Mars from '../../../assets/mars.png';

class HomePage extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="3">

          </MDBCol>
          <MDBCol md="6" className="text-center center-part">
            
          </MDBCol>
          <MDBCol md="3">

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
