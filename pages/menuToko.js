import {useNavigation, useRoute} from '@react-navigation/native';
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/AntDesign';

const DATA = [
  {
    nama: 'Dancow',
    harga: 5000,
    tag: ['susu', 'dancow', 'sapi'],
  },
  {
    nama: 'Milo',
    harga: 6000,
    tag: ['susu', 'milo', 'sapi'],
  },
  {
    nama: 'ZEE',
    harga: 7000,
    tag: ['susu', 'zee', 'sapi'],
  },
  {
    nama: 'HILO',
    harga: 8000,
    tag: ['susu', 'hilo', 'sapi'],
  },
  {
    nama: 'Anlene',
    harga: 9000,
    tag: ['susu', 'anlene', 'sapi'],
  },
  {
    nama: 'Anlene',
    harga: 1000,
    tag: ['susu', 'anlene', 'sapi'],
  },
  {
    nama: 'Anlene',
    harga: 2000,
    tag: ['susu', 'anlene', 'sapi'],
  },
];

const menuToko = () => {
  const [dataa, useData] = useState([]);
  const route = useRoute();
  useEffect(() => {
    Axios.post('http://10.0.2.2:80/api/get_product.php', {
      Id: route.params.Id,
    })
      .then((result) => {
        useData(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.containerItem}
        onPress={() => navigation.navigate('tambahBarang')}>
        <View
          style={{width: '80%', height: '60%', backgroundColor: '#C4C4C4'}}
        />
        <Text style={{color: '#0E49B5', fontSize: 24}}>{item.Nama}</Text>
        <Text style={{color: '#524F4F', fontSize: 18}}>Rp.{item.Harga},-</Text>
        <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>
          {item.tag1 + ' #' + item.tag2 + ' #' + item.tag3}
        </Text>
      </TouchableOpacity>
    );
  };
  const navigation = useNavigation();
  let {width, height} = Dimensions.get('window');
  height = height - height * 0.035;
  return (
    <View>
      <View style={{width: width, height: height}}>
        <View style={styles.bgsquare}>
          <View
            style={{
              flexDirection: 'row',
              height: 100,
              width: width,
              padding: 30,
              alignContent: 'space-around',
            }}>
            <View style={styles.bgIcon}>
              <Image
                source={require('../assets/bag.png')}
                style={styles.bagIcon}
              />
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingVertical: 40,
                paddingLeft: 10,
              }}>
              <Text style={styles.teksToko}>{route.params.Nama}</Text>
              <Text style={styles.teksAlamat}>
                {[
                  route.params.Lokasi,
                  route.params.Kecamatan,
                  route.params.Kabupaten,
                  route.params.Provinisi,
                ].join(', ')}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: 100,
              width: width,
              padding: 30,
              alignContent: 'space-around',
            }}>
            <DropDownPicker
              items={[
                {label: 'Ambil', value: 'Ambil'},
                {label: 'Antar', value: 'Antar'},
              ]}
              defaultIndex={1}
              containerStyle={{
                height: 40,
                width: '40%',
                paddingRight: '5%',
                paddingLeft: -10,
              }}
              onChangeItem={(items) => console.log(items.label, items.value)}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
            />
            <View style={styles.input}>
              <TextInput
                placeholder="Cari product disini..."
                style={{fontSize: 18}}
              />
              <Image source={require('../assets/search.png')} />
            </View>
          </View>
        </View>

        <FlatList
          style={{height: '70%', zIndex: -1}}
          data={dataa}
          renderItem={renderItem}
          keyExtractor={(item, index) => index + 'A'}
          numColumns={2}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('keranjang')}
        style={styles.TouchableOpacityStyleTambah}>
        <Icon name="shoppingcart" size={30} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bgsquare: {
    width: '100%',
    height: '30%',
    backgroundColor: '#0E49B5',
    padding: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgIcon: {
    width: 87,
    height: 87,
    borderRadius: 130 / 2,
    backgroundColor: '#E4E3E3',
    padding: '5%',
  },
  bagIcon: {
    width: '100%',
    height: '100%',
  },
  teksToko: {
    fontSize: 24,
    color: 'white',
  },
  teksAlamat: {
    fontSize: 13,
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
    width: '65%',
  },
  containerItem: {
    flex: 2,
    height: 200,
    margin: 5,
    alignItems: 'center',
  },
  TouchableOpacityStyleTambah: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 10,
    backgroundColor: '#0E49B5',
    borderRadius: 25,
  },
  FloatingButtonStyle: {
    position: 'absolute',
    width: 20,
    height: 20,
    color: 'white',
  },
});

export default menuToko;
