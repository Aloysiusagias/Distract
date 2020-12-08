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
    return(
    <ScrollView>
      <View style={{width: width, height: height}}>
        <View style={styles.bgsquare}>
          <View style={styles.bgIcon}>
            <Image
              source={require('../assets/person.png')}
              style={styles.foto}
            />
            <Image 
            source={require('../assets/photo_camera.png')} 
            style={styles.editFoto}
            />
          </View>
          <View style={styles.editNama}>
          <Text style={styles.teksNama}>Ali Baba</Text>
          <Image 
            source={require('../assets/edit.png')} 
            />
          </View>
        </View>
        <TouchableOpacity
              onPress={() => navigation.navigate('statusPesanan')}>
        <View style={styles.items}>
          <Text style={{fontSize: 24, color: 'black'}}>Lokasi</Text>
          <Text style={{fontSize: 13, color: 'black'}}>Sragen kulon, Sragen, Jawa Tengah</Text>
        </View>
        </TouchableOpacity>        
        <View style={styles.items}>
          <Text style={{fontSize: 24, color: 'black'}}>No Telp</Text>
          <Text style={{fontSize: 13, color: 'black'}}>081234567890</Text>
        </View>  
      </View>
    </ScrollView>

    )
}

const styles = StyleSheet.create({
bgsquare: {
    width: '100%',
    height: '35%',
    backgroundColor: '#0E49B5',
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: Dimensions.get('window').width - 35,
    alignItems: 'flex-start',
    padding: '2%',
    margin: '4%',
    marginBottom: 0,
    backgroundColor: 'white',
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
  editFoto: {
    alignSelf: 'flex-end',
  }
});

export default profil;