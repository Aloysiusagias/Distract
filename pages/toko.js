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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
];

const toko = () => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.containerItem} onPress={() => navigation.navigate('menuToko')}>
        <View
          style={{width: '80%', height: '60%', backgroundColor: '#C4C4C4'}}
        />
        <Text style={{color: '#0E49B5', fontSize: 24}}>Prana</Text>
        <Text style={{color: '#524F4F', fontSize: 18}}>Jl. Pegangsaan no.2</Text>
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
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => index + 'A'}
          numColumns={2}
        />
      </View>
    </KeyboardAwareScrollView>
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
    alignItems: 'center'
  },
});

export default toko;