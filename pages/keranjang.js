import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const keranjang = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const Cplus = () => {
    setCount(count + 1 <= Number.MAX_SAFE_INTEGER ? count + 1 : count);
  };

  const Cminus = () => {
    setCount(count - 1 >= 0 ? count - 1 : count);
  };
  const hapusB = () => {
    setCount(count - 1 >= 0 ? count - count : count);
  };
  let {width, height} = Dimensions.get('window');
  height = height - height * 0.03;
  return (
    <ScrollView>
      <View style={{width: width, height: height}}>
        <View style={styles.bgsquare}>
          <View style={styles.bgIcon}>
            <Image source={require('../assets/bag.png')} style={styles.bag} />
          </View>
          <Text style={styles.teksToko}>TobangaDO</Text>
        </View>
        <View style={{height: '65%'}}>
          <View style={styles.items}>
            <Image source={require('../assets/dancow.png')} />
            <View
              style={{
                flexDirection: 'column',
                alignSelf: 'flex-start',
              }}>
              <Text style={{fontSize: 20, color: '#0E49B5'}}>Dancow</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#E4E3E3',
                  width: 100,
                }}>
                <View style={styles.buttonStyle}>
                  <Button onPress={Cminus} title="-" />
                </View>
                <Text style={styles.teksConter}>{count}</Text>
                <View style={styles.buttonStyle}>
                  <Button onPress={Cplus} title="+" />
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text>Rp.5000</Text>
              <Button onPress={hapusB} title="Hapus" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              position: 'absolute',
              bottom: 0,
              alignSelf: 'flex-end',
              backgroundColor: 'green',
            }}>
            <Text
              style={{
                width: '80%',
                alignSelf: 'center',
                paddingLeft: '10%',
                fontSize: 20,
                backgroundColor: '#F9F9F9',
                color: '#0E49B5',
              }}>
              Total Rp.5000
            </Text>
            <View style={{width: '20%'}}>
              <Button
                onPress={() => navigation.navigate('statusPesanan')}
                title="Beli"
              />
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
    height: '35%',
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
  teksConter: {
    paddingLeft: 10,
    fontSize: 14,
    width: '20%',
  },

  produk: {
    alignItems: 'center',
  },
  items: {
    width: Dimensions.get('window').width - 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5%',
    margin: '2%',
    justifyContent: 'space-between',
  },
});

export default keranjang;
