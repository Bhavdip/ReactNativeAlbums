/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  View,
  AppRegistry,
} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const albums = () => (
  <View>
    <Header screenTitle={'Albums'} />
    <AlbumList />
  </View>
);


AppRegistry.registerComponent('albums', () => albums);
