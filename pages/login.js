import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const login = () => {
  let {width, height} = Dimensions.get('window');
  const [nama, setNama] = useState();
  const [pass, setPass] = useState();
  height = height - height * 0.035;
  const navigation = useNavigation();

  const checking = () => {
    if (nama == null || nama == '') {
      alert('Nama tidak boleh kosong');
    } else if (pass == null || pass == '') {
      alert('Password tidak boleh kosong');
    } else {
      // navigation.navigate('bottomTabs');
      axios
      .post('http://10.0.2.2:80/api/user_login.php', {
        Nama: nama,
        Pass: pass,
      })
      .then((result) => {console.log(result.data.Id)})
      .catch((err) => console.log('Error :', err));
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
          <Text style={styles.teksMasuk}>Masuk</Text>
          <View style={styles.containerIsi}>
            <View style={[styles.input, {marginTop: '5%'}]}>
              <Image source={require('../assets/person_outline.png')} />
              <TextInput
                placeholder="Nama"
                style={styles.inputtext}
                underlineColorAndroid="black"
                onChangeText={(nama) => setNama(nama)}
              />
            </View>
            <View style={[styles.input, {marginVertical: '10%'}]}>
              <Image source={require('../assets/vpn_key.png')} />
              <TextInput
                placeholder="Password"
                style={styles.inputtext}
                underlineColorAndroid="black"
                secureTextEntry={true}
                onChangeText={(pass) => setPass(pass)}
              />
            </View>
            <TouchableOpacity
              style={{marginBottom: '20%'}}
              // onPress={() => navigation.navigate('bottomTabs')}
              onPress={() => checking()}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>MASUK</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.NoAkun}>
              Belum punya akun?{' '}
              <Text
                style={{color: '#4D5BAA'}}
                onPress={() => navigation.navigate('register')}>
                Daftar
              </Text>
            </Text>
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
  button: {
    backgroundColor: '#0E49B5',
    width: '80%',
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
});

export default login;
