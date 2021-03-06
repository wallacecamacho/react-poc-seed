/* @flow */

import React from 'react';
import EnqueteChartPergunta from '../../../container/enquetes/EnqueteChartPergunta';

class Section extends React.Component {

  render() {
    return (
            
        <section id="content">
        <div id="breadcrumbs-wrapper">

        <div className="header-search-wrapper grey lighten-2 hide-on-large-only">
            <input type="text" name="Search" className="header-search-input z-depth-2" placeholder="Explore Materialize" />
        </div>

          <div className="container">
            <div className="row">
              <div className="col s10 m6 l6">
                <h5 className="breadcrumbs-title">Enquete</h5>
                <ol className="breadcrumbs">
                  <li><a href="index.html">Dashboard</a></li>
                  <li><a >Pages</a></li>
                  <li className="active">Página Inicial</li>
                </ol>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="section">
              <p className="caption">Dashboard das perguntas utilizadas na enquete.</p>
          <div className="divider"></div>

          <EnqueteChartPergunta />

        </div>


        </div>

        </section>
            
    );
  }
}

export default Section;