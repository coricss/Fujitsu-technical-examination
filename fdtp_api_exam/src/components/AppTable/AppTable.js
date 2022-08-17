import React from 'react';
import PropTypes from 'prop-types';
import './AppTable.css';

import { useState, useEffect } from "react";


const AppTable = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(`https://5fdb12ee91f19e00173339f5.mockapi.io/employee`)
     .then((response) => response.json())
     .then((actualData) => setData(actualData))
     .catch((err) => {
      console.log(err.message);
     });
   }, []);


  return (
    <div className="AppTable" data-testid="AppTable">
      <table className="AppTable-table table table-bordered table-striped">
        <thead className='table-dark'>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Position</th>
            <th>Section</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.fullname}</td>
                  <td>{item.position}</td>
                  <td>{item.section}</td>
                  <td>{item.status}</td>
                  <td className="d-flex justify-content-center gap-2">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
};

AppTable.propTypes = {};

AppTable.defaultProps = {};

export default AppTable;
