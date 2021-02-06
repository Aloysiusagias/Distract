import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect} from 'react/cjs/react.development';

const keranjang = () => {
  const [count, setCount] = useState(1);
  const Cplus = () => {
    setCount(count + 1 <= Number.MAX_SAFE_INTEGER ? count + 1 : count);
  };

  const Cminus = () => {
    setCount(count - 1 >= 0 ? count - 1 : count);
  };
  let {width, height} = Dimensions.get('window');
  height = height - height * 0.035;
  const route = useRoute();
  const data = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    // AsyncStorage.removeItem('Keranjang')
    // console.log(data)
    AsyncStorage.getItem('Keranjang')
    .then(result => JSON.parse(result))
    .then(result => console.log(result))
  }, []);

  const tambah = async () => {
    data.jumlah = count
    var data2 = await AsyncStorage.getItem('Keranjang');
    data2 = JSON.parse(data2)
    // console.log(data2.concat(data))
    if (data2) {
      data2 = data2.concat(data);
      await AsyncStorage.setItem('Keranjang', JSON.stringify(data2)).then(
        () => {
          console.log('item stored');
          navigation.navigate('menuToko');
        }
      );
    } else {
      AsyncStorage.setItem('Keranjang', JSON.stringify([data])).then(() => {
        console.log('item stored');
        navigation.navigate('menuToko');
      });
    }
  };
  return (
    <ScrollView>
      <View style={{width: width, height: height}}>
        <View style={styles.bgsquare} />
        <View style={styles.bgIcon}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logoAtas}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.teksMasuk}>{data.Nama}</Text>
          <View style={styles.containerIsi}>
            <View>
              <Text style={styles.teksHarga}>Rp.{data.Harga},-</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingTop: '10%',
              }}>
              <Text style={{fontSize: 40, paddingRight: '10%'}}>Jumlah</Text>
              <View style={styles.viewJml}>
                <View style={styles.buttonEdit}>
                  <Button onPress={Cminus} title="-" />
                </View>
                <View
                  style={{
                    width: 70,
                    height: 35,
                    backgroundColor: '#E4E3E3',
                    alignSelf: 'center',
                  }}>
                  <Text style={styles.teksConter}>{count}</Text>
                </View>
                <View style={styles.buttonEdit}>
                  <Button onPress={Cplus} title="+" />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingTop: '10%',
              }}>
              <Text style={{fontSize: 18, color: '#524F4F'}}>
                {'#' + data.tag1}
              </Text>
              <Text style={{fontSize: 18, color: '#524F4F'}}>
                {'#' + data.tag2}
              </Text>
              <Text style={{fontSize: 18, color: '#524F4F'}}>
                {'#' + data.tag3}
              </Text>
            </View>

            <TouchableOpacity
              style={{marginBottom: '20%'}}
              onPress={() => tambah()}>
              <View style={styles.buttonS}>
                <Text style={styles.buttonText}>TAMBAH</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Image
        style={styles.logoBawah}
        source={require('../assets/logo_distract.png')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  bgsquare: {
    width: '100%',
    height: '40%',
    backgroundColor: '#0E49B5',
    position: 'absolute',
  },
  teksMasuk: {
    color: 'white',
    fontSize: 40,
    top: 110,
  },
  teksHarga: {
    color: 'black',
    fontSize: 40,
    top: '10%',
    alignSelf: 'center',
  },
  teksConter: {
    color: 'black',
    fontSize: 28,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  containerIsi: {
    marginTop: '40%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
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
  input: {
    backgroundColor: '#E4E3E3',
    marginHorizontal: '3%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  inputtext: {
    width: '80%',
    marginLeft: '5%',
    fontSize: 18,
  },
  buttonS: {
    backgroundColor: '#0E49B5',
    width: '80%',
    marginTop: 30,
    padding: 10,
    borderRadius: 15,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  NoAkun: {
    textAlign: 'center',
    fontSize: 20,
  },
  logoBawah: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  bgIcon: {
    width: 110,
    height: 110,
    borderRadius: 130 / 2,
    backgroundColor: '#E4E3E3',
    padding: '5%',
    top: 20,
    position: 'absolute',
    alignSelf: 'center',
  },
  logoAtas: {
    top: 20,
    alignSelf: 'center',
    width: '90%',
    height: '65%',
  },
  buttonStyle: {
    height: '100%',
    width: '10%',
    borderRadius: 20,
    margin: 10,
  },
  viewJml: {
    width: 100,
    flexDirection: 'row',
    alignContent: 'space-between',
    marginLeft: 10,
  },
  buttonEdit: {
    alignSelf: 'center',
    width: '25%',
  },
});

export default keranjang;
