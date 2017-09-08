import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducers/index'
import ConnectedInput from './container/InputContainer'
const store = createStore(
    appReducer
)

const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="input" component={ConnectedInput} />
        </Router>
    </Provider>,
    document.getElementById('root')
)


