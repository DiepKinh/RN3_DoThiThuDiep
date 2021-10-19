import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class ItemHeader extends Component {
  render() {
    const {friend} = this.props;
    console.log(friend);
    return (
      <View style={styles.viewItemHeader}>
        <Image source={friend.avatar} style={styles.imgHeader} />
        <Text style={styles.textNameHeader}>{friend.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewItemHeader: {
    alignItems: 'center',
    marginRight: 15,
  },
  imgHeader: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  textNameHeader: {
    color: 'black',
    fontWeight: '600',
  },
});
