import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const statusPesanan = () => {
  const navigation = useNavigation();
  let {width, height} = Dimensions.get('window');
  height = height - height * 0.035;
  return (
    <ScrollView>
      <View style={{width: width, height: height, backgroundColor: 'white'}}>
        <View style={styles.bgsquare}>
          <View style={styles.bgIcon}>
            <Image source={require('../assets/bag.png')} style={styles.bag} />
          </View>
          <Text style={styles.teksToko}>TobangaDO</Text>
          <Text style={styles.teksStatus}>Status: Dikemas</Text>
        </View>
        <View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Text style={styles.buttonText}>
                Tekan disini untuk hubungi penjual
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.items}>
            <View style={{flexDirection: 'row', marginBottom: '4%'}}>
              <Image source={require('../assets/dancow.png')} />
              <View
                style={{
                  alignContent: 'space-between',
                  width: '80%',
                  backgroundColor: 'white',
                }}>
                <Text style={{fontSize: 24, color: 'black'}}>Dancow</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 13, color: 'black'}}>Rp. 5.500 </Text>
                  <Text style={{fontSize: 13, color: 'black'}}>Qty. 2 </Text>
                  <Text style={{fontSize: 13, color: 'black'}}>
                    Rp. 11.000{' '}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginBottom: '4%'}}>
              <Image source={require('../assets/dancow.png')} />
              <View
                style={{
                  alignContent: 'space-between',
                  width: '80%',
                  backgroundColor: 'white',
                }}>
                <Text style={{fontSize: 24, color: 'black'}}>Milo</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 13, color: 'black'}}>Rp. 6.500 </Text>
                  <Text style={{fontSize: 13, color: 'black'}}>Qty. 2 </Text>
                  <Text style={{fontSize: 13, color: 'black'}}>
                    Rp. 13.000{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              height: 40,
              paddingLeft: '8%',
              paddingRight: '0%',

              backgroundColor: '#C4C4C4',
              flexDirection: 'row',
              justifyContent: 'space-between',
              bottom: '-80%',
              position: 'absolute',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#0E49B5',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              Total
            </Text>
            <View
              style={{
                width: 120,
                height: 40,
                backgroundColor: '#0E49B5',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  alignSelf: 'center',
                  marginLeft: '15%',
                }}>
                Rp.50.000
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bgsquare: {
    width: '100%',
    height: '30%',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  bag: {
    width: '90%',
    height: '90%',
  },
  teksToko: {
    marginTop: 10,
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  teksStatus: {
    fontSize: 20,
    color: 'white',
  },
  button: {
    backgroundColor: '#0E49B5',
    height: '12%',
    width: '90%',
    padding: 4,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: '4%',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
  produk: {
    alignItems: 'center',
  },
  items: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: '4%',
    marginTop: '4%',
    marginLeft: '4%',
    marginRight: '4%',
  },
});

export default statusPesanan;
