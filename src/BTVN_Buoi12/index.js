import axios from 'axios';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  LinearGradient,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class BTVN_Buoi12 extends Component {
  state = {
    listCategory: [],
    listProduct: [],
  };

  componentDidMount() {
    const getAllCategory = axios({
      url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
      method: 'GET',
    });
    const getAllProduct = axios({
      url: 'http://svcy3.myclass.vn/api/Product',
      method: 'GET',
    });
    Promise.all([getAllCategory, getAllProduct])
      .then(([resultCategory, resultProduct]) => {
        const listCategory = resultCategory.data.content;
        const listProduct = resultProduct.data.content;
        this.setState({listCategory, listProduct});
      })
      .catch(error => console.log(error));
  }
  renderListProduct = ({item, index}) => {
    const isItem = index < 3;
    if (isItem) {
      return (
        <View style={[styles.cardProduct]}>
          <View style={styles.itemHeader}>
            <View style={styles.viewPrice}>
              <Text style={[styles.textPrice, {color: '#0DD7DF'}]}>$</Text>
              <Text style={styles.textPrice}>{item.price}</Text>
            </View>
            <AntDesign name="heart" color="#FF0000" size={24} />
          </View>
          <View style={styles.viewImg}>
            <Image style={styles.image} source={{uri: item.image}} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.textName}> {item.name}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={[styles.cardProduct]}>
          <View style={styles.itemHeader}>
            <View style={styles.viewPrice}>
              <Text style={[styles.textPrice, {color: '#0DD7DF'}]}>$</Text>
              <Text style={styles.textPrice}>{item.price}</Text>
            </View>
            <AntDesign name="hearto" color="#ccc" size={24} />
          </View>
          <View style={styles.viewImg}>
            <Image style={styles.image} source={{uri: item.image}} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.textName}> {item.name}</Text>
          </View>
        </View>
      );
    }
  };
  render() {
    const {listCategory, listProduct} = this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#DCF1F9" barStyle="dark-content" />
        <View style={styles.header}>
          <FontAwesome name="align-left" color="#566283" size={28} />
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://thuthuatnhanh.com/wp-content/uploads/2019/12/avatar-deo-khau-trang.jpg',
            }}
          />
        </View>
        <View style={styles.search}>
          <TextInput
            placeholder="Find shoes"
            style={styles.textInput}
            autoCapitalize="none"
          />
          <View style={styles.iconSearch}>
            <FontAwesome name="search" color="#fff" size={28} />
          </View>
        </View>
        <View style={styles.ViewCategories}>
          <Text style={styles.textCategory}>Categories</Text>
          <FlatList
            style={styles.category}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={listCategory}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.categoryButton}>
                <Text style={styles.categoryTitle}>{item.category}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <FlatList
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          data={listProduct}
          renderItem={this.renderListProduct}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#DCF1F9',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  search: {
    marginBottom: 30,
  },
  textInput: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    borderRadius: 50,
    color: '#ccc',
    position: 'relative',
    height: 50,
  },

  iconSearch: {
    backgroundColor: '#0DD7DF',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    top: 5,
    left: 325,
  },
  ViewCategories: {
    marginBottom: 20,
  },
  textCategory: {
    color: '#363B64',
    fontSize: 32,
    fontWeight: 'bold',
  },
  category: {flexGrow: 0},
  categoryButton: {
    paddingVertical: 10,
    marginRight: 20,
  },
  categoryTitle: {
    color: '#363B64',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  cardProduct: {
    width: '48%',
    height: 200,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,

    padding: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hearto: {
    alignItems: 'flex-end',
  },
  viewImg: {
    alignItems: 'center',
  },
  image: {
    height: 110,
    width: 150,
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#363B64',
  },
  viewPrice: {
    flexDirection: 'row',
  },
  textPrice: {
    fontSize: 16,
    color: '#363B64',
    fontWeight: '900',
  },
});
