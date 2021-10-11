import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{padding: 10}}>
        <View
          style={{
            backgroundColor: '#C9C9FF',
            height: 165,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Purple: #C9C9FF
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#3D85C6',
            height: 165,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Blue: #3D85C6</Text>
        </View>
        <View
          style={{
            backgroundColor: '#96CC96',
            height: 165,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Green: #96CC96</Text>
        </View>
        <View
          style={{
            backgroundColor: '#F4B940',
            height: 165,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Yellow: #F4B940
          </Text>
        </View>
      </View>
    );
  }
}

export default App;
