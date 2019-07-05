import { JwtService } from '@sensenet/authentication-jwt';
import { Repository } from '@sensenet/client-core'
import { Reducers, Store } from '@sensenet/redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers  } from 'redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const repository = new Repository({
  repositoryUrl: 'https://mysensenetsite.com'
});

const jwtService = new JwtService(repository);
jwtService.checkForUpdate();

const sensenet = Reducers.sensenet;
const myReducer = combineReducers({
  sensenet
});

const storeOptions = {
  repository,
  rootReducer: myReducer,
} as Store.CreateStoreOptions<any>;

const store = Store.createSensenetStore(storeOptions);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();