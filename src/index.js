import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import history from './history';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
