import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  </React.StrictMode>, 
  document.getElementById('root')
); 
