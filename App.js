import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers/counter';
import Root from './src/root';

const store = createStore(reducers);

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}