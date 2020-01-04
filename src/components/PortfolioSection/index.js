// import React, { Component } from 'react';
import React from 'react';
import './style.css';

const PortfolioSection = (props) => (
      <div id={props.id} className="port-section">
        {props.children}
      </div>
    )

export default PortfolioSection;