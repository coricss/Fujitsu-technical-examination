import React from 'react';
import PropTypes from 'prop-types';
import './AppRegistration.css';

import { useState, useEffect } from "react";

const AppRegistration = () => {
 
  return(
    <div className="AppRegistration" data-testid="AppRegistration">
      <form className='border border-2 p-3' >
        <div className='form-group text-center mb-3'>
          <h5>Register New Employee</h5>
        </div>
        <hr></hr>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="section">Position</label>
          <input type="text" className="form-control" id="section" name="position" placeholder="Enter app description" />
        </div>
        <div className="form-group">
          <label htmlFor="section">Section</label>
          <input type="text" className="form-control" id="section" name="section" placeholder="Enter app price" />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input type="text" className="form-control" id="status" name="status" placeholder="Enter app price" />
        </div>
        <div className="form-group mt-3 d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="reset" className="btn btn-secondary">Reset</button>
        </div>
      </form>
    </div>
  )
};

AppRegistration.propTypes = {};

AppRegistration.defaultProps = {};

export default AppRegistration;
