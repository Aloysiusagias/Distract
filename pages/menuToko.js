import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  FlatList,
  state,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const DATA = [
  {
    nama: 'Dancow',
    tag: ['susu', 'dancow', 'sapi'],
  },
  {
    nama: 'Milo',
    tag: ['susu', 'milo', 'sapi'],
  },
  {
    nama: 'ZEE',
    tag: ['susu', 'zee', 'sapi'],
  },
  {
    nama: 'HILO',
    tag: ['susu', 'hilo', 'sapi'],
  },
  {
    nama: 'Anlene',
    tag: ['susu', 'anlene', 'sapi'],
  },
  {
    nama: 'Anlene',
    tag: ['susu', 'anlene', 'sapi'],
  },
  {
    nama: 'Anlene',
    tag: ['susu', 'anlene', 'sapi'],
  },
];

const menuToko = () => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.containerItem}
        onPress={() => navigation.navigate('tambahBarang')}>
        <View
          style={{width: '80%', height: '60%', backgroundColor: '#C4C4C4'}}
        />
        <Text style={{color: '#0E49B5', fontSize: 24}}>Prana</Text>
        <Text style={{color: '#524F4F', fontSize: 18}}>
          Jl. Pegangsaan no.2
        </Text>
        <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>Coffee Shop</Text>
      </TouchableOpacity>
    );
  };
  const navigation = useNavigation();
  let {width, height} = Dimensions.get('window');
  height = height - height * 0.108;
  return (
    <KeyboardAwareScrollView>
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
                flexDirection: 'column',
                height: 100,
                width: width,
                padding: 30,
                paddingBottom:'10%',
                alignContent: 'space-around',
              }}>
              <Text style={styles.teksToko}>Toko</Text>
              <Text style={styles.teksAlamat}>
                Jl. Ks Tubun, Kebayan 3, Sragen Kulon,Kec. Sragen, Kabupaten
                Sragen, Jawa Tengah
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
              containerStyle={{height: 40, width: '40%',paddingRight:"5%",paddingLeft:-10}}
              onChangeItem={(items) => console.log(items.label, items.value)}
            />
            <View style={styles.input}>
              <TextInput
                placeholder="Cari toko disini..."
                style={{fontSize: 18}}
              />
              <Image source={require('../assets/search.png')} />
            </View>
          </View>
        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => index + 'A'}
          numColumns={2}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('keranjang')}
        style={styles.TouchableOpacityStyleTambah}>
        <Image
          source={{
            uri:
              'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png',
          }}
          style={styles.FloatingButtonStyle}
        />
      </TouchableOpacity>
    </KeyboardAwareScrollView>
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
    width:"65%",
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
  },
  FloatingButtonStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
});

export default menuToko;
