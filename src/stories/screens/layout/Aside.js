/* @flow */

import React from 'react';
import Enquete from '../../../container/enquetes/Enquete'

class Side extends React.Component {

  render() {
    return (
        <aside id="left-sidebar-nav">
          <ul id="slide-out" className="side-nav fixed leftside-navigation nav-expanded nav-lock nav-collapsible">
            <Enquete enquete={this.props.enquete}/>        
          </ul>
        </aside>

    );
  }
}

export default Side;