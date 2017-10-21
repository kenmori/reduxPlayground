import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
let store = createStore(todoApp)

render (
	//ProviderはStoreがこれ以下のComponentでconnct()を使えるようにしている。Providerのラッピングなしにconnctを使えない
	<Provider store={store}>
		<App />//ルートComponent
	</Provider>,
	document.getElementById('root')
)
