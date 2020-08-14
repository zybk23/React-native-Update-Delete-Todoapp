/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Bar from './src/tabbar/Bar';
import {Provider} from "react-redux"
import configureStore from './src/redux/reducers';



const store=configureStore();

const App: () => React$Node = () => {
  return (
      <Provider store={store}>
        <Bar/>
      </Provider>
  );
};
export default App;
