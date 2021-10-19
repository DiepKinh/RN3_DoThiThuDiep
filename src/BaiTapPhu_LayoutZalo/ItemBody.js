import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class ItemBody extends Component {
  render() {
    const {friend} = this.props;
    console.log(friend);
    return (
      <View style={styles.viewItemBody}>
        <View style={styles.viewItem}>
          <Image source={friend.avatar} style={styles.imgBody} />
          <View>
            <Text style={[styles.textName, {fontWeight: '700'}]}>
              {friend.name}
            </Text>
            <Text style={styles.textName}>
              {friend.mutual_friends} bạn chung
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnAddFriend}>
          <Text style={styles.textBtn}>Kết bạn</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewItemBody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ddd',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgBody: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 10,
  },
  textName: {
    color: 'black',
  },
  btnAddFriend: {
    height: 32,
    width: 80,
    backgroundColor: '#BBBBFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textBtn: {
    color: 'black',
  },
});
