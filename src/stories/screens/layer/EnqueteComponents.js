/* @flow */

import React from 'react';

class EnqueteComponents extends React.Component {

  render() {
   
      return (
            <li className="no-padding">
            <ul className="collapsible" data-collapsible="accordion">                
            <li className="bold">
                <a className="collapsible-header  waves-effect waves-cyan active">
                <i className="material-icons">pages</i>
                <span className="nav-text">Enquetes</span>
                </a>
                <div className="collapsible-body">
                <ul className="collapsible" data-collapsible="accordion">      
                { this.renderComponent() }                
                </ul>
                </div>
            </li>
            </ul>
        </li>  
        );
    }

    renderComponent() {

        let comp = this.props.enquetes.map((enquete) => {
        return (
            <li className="bold waves-effect waves-cyan" key={enquete._id}>
            <a href={'/enquete/' + enquete._id} data-activates={enquete.app}>
              <i className="material-icons">keyboard_arrow_right</i>
              <span className="nav-text">{enquete.app}</span>
            </a>
          </li>
            );
        });
        return comp;
    }

}

export default EnqueteComponents;