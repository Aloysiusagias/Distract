import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

var data = {};

const profil = () => {
  const [daerah, setDaerah] = useState();

  useEffect(() => {
    const session = async () => {
      data = await AsyncStorage.getItem('DataUser');
      data = JSON.parse(data);
      setDaerah([data.Kecamatan, data.Kabupaten, data.Provinsi].join(', '));
    };

    session();
  });

  const navigation = useNavigation();
  let {width, height} = Dimensions.get('window');
  height = height - height * 0.108;
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.bgsquare}>
        <View style={styles.bgIcon}>
          <Image source={require('../assets/person.png')} style={styles.foto} />
          <TouchableOpacity onPress={() => console.log('edit')}>
            <Image
              source={require('../assets/photo_camera.png')}
              style={{alignSelf: 'flex-end'}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.editNama}>
          <Text style={styles.teksNama}>{data.Nama}</Text>
          <TouchableOpacity onPress={() => console.log('edit')}>
            <Image source={require('../assets/edit.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.wrapItem}>
        <Image source={require('../assets/place.png')} />

        <View style={styles.items}>
          <Text style={{fontSize: 24, color: 'black'}}>Lokasi</Text>
          <Text style={{fontSize: 13, color: 'black'}}>{daerah}</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log('edit')}
          style={{width: '10%'}}>
          <Image source={require('../assets/edit2.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.wrapItem}>
        <Image source={require('../assets/call.png')} />

        <View style={styles.items}>
          <Text style={{fontSize: 24, color: 'black'}}>No Telp</Text>
          <Text style={{fontSize: 13, color: 'black'}}>{data.Nomor}</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log('edit')}
          style={{width: '10%'}}>
          <Image source={require('../assets/edit2.png')} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.boxLogout}
        onPress={() => {
          AsyncStorage.clear();
          navigation.navigate('login');
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bgsquare: {
    width: '100%',
    height: '35%',
    backgroundColor: '#0E49B5',
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  bgIcon: {
    width: 120,
    height: 120,
    borderRadius: 130 / 2,
    backgroundColor: '#E4E3E3',
    padding: '5%',
  },
  foto: {
    width: '100%',
    height: '100%',
  },
  teksNama: {
    fontSize: 40,
    color: 'white',
    marginRight: 15,
  },
  items: {
    width: '80%',
    alignItems: 'flex-start',
    padding: '2%',
    marginBottom: 0,
  },
  editNama: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  wrapItem: {
    width: Dimensions.get('window').width - 35,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    marginBottom: '4%',
    elevation: 12,
  },
  boxLogout: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    borderRadius: 10,
  },
});

export default profil;
