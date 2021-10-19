import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  blackwidow,
  captain,
  flash,
  ironman,
  spiderman,
  strange,
  suppergirl,
  wanda,
  wonderwoman,
  yasuo,
} from './images';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemHeader from './ItemHeader';
import ItemBody from './ItemBody';

export default class LayoutZalo extends Component {
  listFriends = [
    {
      name: 'Wanda',
      avatar: wanda,
      mutual_friends: 15,
    },
    {
      name: 'Natasha',
      avatar: blackwidow,
      mutual_friends: 16,
    },
    {
      name: 'Yasuo',
      avatar: yasuo,
      mutual_friends: 21,
    },
    {
      name: 'Caption',
      avatar: captain,
      mutual_friends: 20,
    },
    {
      name: 'Flash',
      avatar: flash,
      mutual_friends: 15,
    },
    {
      name: 'Strange',
      avatar: strange,
      mutual_friends: 121,
    },
    {
      name: 'Kara',
      avatar: suppergirl,
      mutual_friends: 60,
    },
    {
      name: 'Diana',
      avatar: wonderwoman,
      mutual_friends: 150,
    },
    {
      name: 'Justin',
      avatar: ironman,
      mutual_friends: 15,
    },
    {
      name: 'Perter',
      avatar: spiderman,
      mutual_friends: 50,
    },
  ];
  renderItemHeader = ({item}) => <ItemHeader friend={item} />;
  renderItemBody = ({item}) => <ItemBody friend={item} />;
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.viewTextHeader}>
              <Entypo name="back-in-time" size={20} color="black" />
              <Text style={styles.textHeader}>Danh sách tìm kiếm gần đây</Text>
            </View>
            <FlatList
              contentContainerStyle={styles.scrollContent}
              data={this.listFriends}
              renderItem={this.renderItemHeader}
              keyExtractor={(item, index) => {
                return `${item.name}_${index}`;
              }}
              horizontal
            />
          </View>
          <View>
            <View style={[styles.viewTextHeader, {marginTop: 10}]}>
              <Ionicons name="ios-people" size={20} color="black" />
              <Text style={styles.textHeader}>Gợi ý kết bạn</Text>
            </View>
            <FlatList
              contentContainerStyle={styles.scrollContent}
              data={this.listFriends}
              renderItem={this.renderItemBody}
              keyExtractor={(item, index) => {
                return `${item.name}_${index}`;
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  viewTextHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  scrollContent: {
    marginVertical: 10,
  },
});
