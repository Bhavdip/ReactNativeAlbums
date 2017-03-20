import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {

  //class level state
  state = { albums: [] };

  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    //debugger;
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({
      albums: response.data
    }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetails key={album.title} data={album} />
    );
  }

  render() {
    // just for print the current update state
    console.log(this.state);
  return (
    <View>
      {this.renderAlbums()}
   </View>
  );
 }
}


export default AlbumList;
