/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import Header from './src/components/Header';

const albums = () => (<Header />);


AppRegistry.registerComponent('albums', () => albums);
