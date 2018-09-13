import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import './styles/index.css';
import Root from './container/Root';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-snapshot';
//import configureStore from './store/configureStore';
//const store = configureStore();

const renderApp = Component => {
    render(
      <AppContainer>
            <Component />
      </AppContainer>,
      document.getElementById('root'),
    )
  }
  
  renderApp(Root);
  registerServiceWorker();
  
  // Webpack Hot Module Replacement API
  if (module.hot) {
    ReactDOM.render(<Root />, document.getElementById('root'))
  }