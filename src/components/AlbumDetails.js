import React from 'react';
import { View, Text } from 'react-native';

//we take a fucntion component

const AlbumDetails = (props) => {
  console.log(props.data.title);
  //debugger;
  return (
    <View>
      <Text>{props.data.title}</Text>
    </View>
  );
};

export default AlbumDetails;
