import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Angry from './images/angry.png';
import Care from './images/care.png';
import Haha from './images/haha.png';
import Like from './images/like.png';
import Love from './images/love.png';
import Sad from './images/sad.png';

const images = [Angry, Care, Haha, Like, Love, Sad];

export default class Bindding extends Component {
  state = {
    icon: Angry,
  };
  pressIcon = nameIcon => {
    this.setState({icon: nameIcon});
  };
  renderIcon() {
    return images.map((image, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.btnStyleOpacity}
          onPress={() => this.pressIcon(image)}>
          <Image style={styles.icon} source={image} />
        </TouchableOpacity>
      );
    });
  }
  render() {
    console.log(images.length);
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.state.icon} />
        </View>
        <View style={styles.viewIcon}>{this.renderIcon()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewIcon: {
    width: '90%',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 50,
    width: 50,
  },
});
