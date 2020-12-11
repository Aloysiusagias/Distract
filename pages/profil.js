import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const profil = () => {
  const navigation = useNavigation();
  let {width, height} = Dimensions.get('window');
  height = height - height * 0.108;
  return (
    <ScrollView>
      <View style={{width: width, height: height,alignItems:'center'}}>
        <View style={styles.bgsquare}>
          <View style={styles.bgIcon}>
            <Image
              source={require('../assets/person.png')}
              style={styles.foto}
            />
            <TouchableOpacity onPress={() => console.log('edit')}>
            <Image
              source={require('../assets/photo_camera.png')}
              style={{alignSelf: 'flex-end'}}
            />
            </TouchableOpacity>
          </View>
          <View style={styles.editNama}>
            <Text style={styles.teksNama}>Ali Baba </Text>
            <TouchableOpacity onPress={() => console.log('edit')}>
            <Image source={require('../assets/edit.png')} />
            </TouchableOpacity>
          </View>
        </View>
      
          <View
            style={{
              width: Dimensions.get('window').width - 35,
              flexDirection: 'row',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingHorizontal: '5%',
              marginBottom: '4%',
              elevation: 12,
            }}>
             
            <Image source={require('../assets/place.png')} />
           
            <View style={styles.items}>
              <Text style={{fontSize: 24, color: 'black'}}>
                Lokasi
              </Text>
              <Text style={{fontSize: 13, color: 'black'}}>
                Sragen kulon, Sragen, Jawa Tengah
              </Text>
            </View>
            <TouchableOpacity onPress={() => console.log('edit')}>
            <Image style={{marginLeft: '30%'}}  source={require('../assets/edit2.png')} />
            </TouchableOpacity>
          </View>
      
        <View
          style={{
            width: Dimensions.get('window').width - 35,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingHorizontal: '5%',
            marginBottom: '4%',
            elevation: 12,
          }}>
           <Image source={require('../assets/call.png')} />
         
          <View style={styles.items}>
            <Text style={{fontSize: 24, color: 'black'}}>No Telp</Text>
            <Text style={{fontSize: 13, color: 'black'}}>081234567890</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('edit')}>
          <Image  style={{marginLeft: '65%'}} source={require('../assets/edit2.png') }  />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    marginBottom: '5%'
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
    marginTop: 20,
    fontSize: 40,
    color: 'white',
  },
  items: {
    alignItems: 'flex-start',
    padding: '2%',
    margin: '4%',
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  editNama: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default profil;
