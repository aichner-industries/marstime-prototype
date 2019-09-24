//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdbreact';

//> Images
import MarsIcon from '../../../assets/notfound.png';

class NotFound extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow className="flex-center text-center">
          <MDBCol md="12">
            <img
            src={MarsIcon}
            alt="Mars Not Found Icon"
            style={{ height: "150px" }}
            />
          </MDBCol>
          <MDBCol md="12" className="pt-4">
            <h2 className="font-weight-bold">Page not found</h2>
          </MDBCol>
        </MDBRow>
          
      </MDBContainer>
    );
  }
}

export default NotFound;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
