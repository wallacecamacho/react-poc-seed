/* @flow */

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import Aside from './Aside';


class ComponentLayout extends React.Component {

  renderSection() {
    if(this.props.match.params.enqueteId) {
      return <Section enquete={this.props.match.params}/>
    }
      return <Section enquete={this.props.match.params}/>
  }

  renderAside() {    
      return <Aside enquete={this.props.match.params}/>
  }

  renderHeader() {    
    return <Header />
  }

  renderFooter() {    
    return  <Footer />
  }

  render() {
    console.log(this.props.match.params);
    return (
            <div>
              { this.renderHeader() }
              { this.renderAside() }
              { this.renderSection() }
              { this.renderFooter() }             
            </div>
    );
  }
}

export default ComponentLayout;