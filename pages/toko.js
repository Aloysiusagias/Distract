import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

var DATA = []
const toko = () => {
  const [dataa, useData] = useState()
  const disableBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    Axios.get('http://10.0.2.2:80/api/get_toko.php')
      .then((result) => {
        useData(result.data);
      })
      .catch((err) => console.error(err));
      
    return function cleanup() {
      // BackHandler.addEventListener('hardwareBackPress', disableBackButton())
    };
  },[]);
  console.log(dataa)
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.containerItem}
        onPress={() => navigation.navigate('menuToko', item)}>
        <View
          style={{width: '80%', height: '60%', backgroundColor: '#C4C4C4'}}
        />
        <Text style={{color: '#0E49B5', fontSize: 24}}>{item.Nama}</Text>
        <Text style={{color: '#524F4F', fontSize: 18}}>
          {item.Lokasi}
        </Text>
        <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>{item.Tipe}</Text>
      </TouchableOpacity>
    );
  };
  const navigation = useNavigation();
  let {width, height} = Dimensions.get('window');
  height = height - height * 0.108;
  return (
    <View>
      <View style={{width: width, height: height}}>
        <View style={styles.bgsquare}>
          <View style={styles.bgIcon}>
            <Image
              source={require('../assets/bag.png')}
              style={styles.bagIcon}
            />
          </View>
          <Text style={styles.teksToko}>Toko</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Cari toko disini..."
              style={{fontSize: 18}}
            />
            <Image source={require('../assets/search.png')} />
          </View>
        </View>
        <FlatList
          data={dataa}
          renderItem={renderItem}
          keyExtractor={(item, index) => index + 'A'}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgsquare: {
    width: '100%',
    height: '40%',
    backgroundColor: '#0E49B5',
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgIcon: {
    width: 100,
    height: 100,
    borderRadius: 130 / 2,
    backgroundColor: '#E4E3E3',
    padding: '5%',
  },
  bagIcon: {
    width: '100%',
    height: '100%',
  },
  teksToko: {
    fontSize: 40,
    color: 'white',
  },
  input: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  containerItem: {
    flex: 1,
    height: 200,
    margin: 5,
    alignItems: 'center',
  },
});

export default toko;
